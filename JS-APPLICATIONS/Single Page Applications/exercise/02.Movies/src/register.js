const registerSection = document.getElementById('form-sign-up');
const form = registerSection.querySelector('form');
form.addEventListener('submit', onSubmit);


function onSubmit(event) {
    event.preventDefault();

    const { email, password, repeatPassword } = Object.fromEntries(new FormData(event.target));

    if (!email || password.length < 6 ||
        password.normalize() !== repeatPassword.normalize()) {
        return;
    }

    registerUser({email, password, repeatPassword});
}

async function registerUser(body) {
    const response = await fetch('http://localhost:3030/users/register', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(body)
    });

    
}