import { login } from "../api/user.js";

const loginSec = document.getElementById('login-View');
const form = loginSec.querySelector('form');
form.addEventListener('submit', onsubmit);
loginSec.remove();

let ctx
export function showLogin(context) {
    ctx = context;
    context.showSection(loginSec);
}

async function onsubmit(event) {
    event.preventDefault();

    const {email, password} = Object.fromEntries(new FormData(event.target));

    if (!email || !password) {
        alert('Email or Password don\'t be empty!');
        return;
    }
    form.reset();
    await login(email, password);
    ctx.goTo('Home');
}