import { showLoginForm } from "./login.js";
import { shonNavBar } from "./navBar.js";

const registerSection = document.getElementById('form-sign-up');
const container = document.getElementById('container');
const form = registerSection.querySelector('form');
form.addEventListener('submit', onSubmit);
const errroP = document.createElement('p');
errroP.setAttribute("class", 'error-notification');


export function showRegisterForm() {
    container.replaceChildren(registerSection);
    shonNavBar();
}

function onSubmit(event) {
    event.preventDefault();

    const { email, password, repeatPassword } = Object.fromEntries(new FormData(event.target));

    if (!email || password.length < 6 ||
        password.normalize() !== repeatPassword.normalize()) {
        errroP.textContent = 'Invalid username or password!';
        form.prepend(errroP);
        setTimeout(() => {
            errroP.remove();
        }, 2000);

        return;
    }

    registerUser({ email, password, repeatPassword });
    form.reset();
}

async function registerUser(body) {
    try {
        const response = await fetch('http://localhost:3030/users/register', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(body)
        });

        showLoginForm();
    } catch (err) {
        errroP.textContent = err.message;
    }
}