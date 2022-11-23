import { register } from "../api/user.js";

const registerSec = document.getElementById('register-View');
const form = registerSec.querySelector('form');
form.addEventListener('submit', onSubmit);
registerSec.remove();

let ctx;
export function showRegisterSec(context) {
    ctx = context;
    ctx.showSection(registerSec);
}
 
async function onSubmit(event) {
    event.preventDefault();
    const {email, password, repeatPassword} = Object.fromEntries(new FormData(event.target));

    if (password !== repeatPassword || email.length < 3 || password.length < 3) {
        alert("Password don't match!");
        return;
    }
    form.reset();
    await register(email, password);
    ctx.goTo('Home');
}