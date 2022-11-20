import { showHome } from "./home.js";
import { showLoginForm } from "./login.js";
import { shonNavBar } from "./navBar.js";
import { showRegisterForm } from "./register.js";


document.querySelector('.nav-item a[href="#"]')
    .addEventListener('click', logout);
[...document.querySelectorAll('.nav-item a')]
.forEach(a =>a.addEventListener('click', loginOrRegister));


showHome();
shonNavBar();


function loginOrRegister(e) {
    if (e.target.innerHTML === 'Login') {
        showLoginForm();
    } else {
        showRegisterForm();
    }
}

async function logout() {
    debugger;
    const authToken = sessionStorage.authToken;
    const response = await fetch('http://localhost:3030/users/logout', {
        method: 'GET',
        headers: {'X-Authorization': authToken}
    });
    sessionStorage.clear();
    showHome();
}