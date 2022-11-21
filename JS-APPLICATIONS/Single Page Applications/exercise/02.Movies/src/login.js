import { showHome } from "./home.js";
import { showNavBar } from "./navBar.js";

const loginSection = document.getElementById('form-login');
const form = loginSection.querySelector('form');
form.addEventListener('submit', onsubmitt);
const container = document.getElementById('container');
const errroP = document.createElement('p');
errroP.setAttribute("class", 'error-notification');

export function showLoginForm() {
    container.replaceChildren(loginSection);
    showNavBar();
}

function onsubmitt(e) {
    e.preventDefault();
    const { email, password } = Object.fromEntries(new FormData(e.target));

    login({ email, password });
    form.reset();
}

async function login(body) {
    try {
        const response = await fetch('http://localhost:3030/users/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(body)
        });

        if (response.status !== 200) {
            throw new Error('Wrong credentials!');
        }

        const data = await response.json();

        sessionStorage.setItem('authToken', data.accessToken);
        sessionStorage.setItem('userEmail', data.email);
        sessionStorage.setItem('userId', data.email);

        showHome();
    } catch (err) {
        errroP.textContent = err.message;
        form.prepend(errroP);
        setTimeout(() => {
            errroP.remove();
        }, 2000);
    }
}