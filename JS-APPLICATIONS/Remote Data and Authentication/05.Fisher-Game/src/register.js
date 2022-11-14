document.getElementById('register-form').addEventListener('submit', getUserData);
document.querySelectorAll('a').forEach(e => e.classList.remove('active'));
document.getElementById('register').classList.add('active');
const errorP = document.getElementsByClassName('notification')[0];

function getUserData(event) {

    event.preventDefault();

    const userData = new FormData(event.target);
    const { email, password, rePass } = Object.fromEntries(userData);
    if (password !== rePass) {
        errorP.textContent = 'Invalid username or password!';
        setTimeout(() => {
            errorP.textContent = '';
        }, 2000);
        return;
    }
    registerUser({ email, password, rePass });
}

async function registerUser(body) {
    try {
        const response = await fetch(`http://localhost:3030/users/register`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(body)
        });

        if (response.ok !== true) {
            throw new Error(response.statusText);
        }
        const data = await response.json();
        sessionStorage.setItem('accessToken', data.accessToken);
        sessionStorage.setItem('userData', data.email);
        window.location = "./login.html";
    } catch (err) {
        errorP.textContent = err.message;
        setTimeout(() => {
            errorP.textContent = '';
        }, 2000);
    }
}

(function displayOrHideNavElement() {
    const accessToken = sessionStorage.accessToken;
    const user = sessionStorage.userData;
    if (accessToken) {
        document.getElementById('guest').style.display = 'none';
        document.querySelector('p.email span').textContent = user;
    } else {
        document.getElementById('user').style.display = 'none';
    }
})();