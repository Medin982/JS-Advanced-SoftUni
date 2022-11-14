document.getElementById("login-form").addEventListener('submit', getLoginData);
document.querySelectorAll('a').forEach(e => e.classList.remove('active'));
document.getElementById('login').classList.add('active');
const errorP = document.getElementsByClassName('notification')[0];

function getLoginData(event) {
    event.preventDefault();

    const { email, password } = Object.fromEntries(new FormData(event.target));
    loginUser({email, password});
}

async function loginUser(body) {
    try {
        const response = await fetch('http://localhost:3030/users/login', {
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
        window.location = './index.html';
    } catch (error) {
        errorP.textContent = error.message;
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