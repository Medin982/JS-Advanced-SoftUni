import { showAddMovieForm } from "./addMovie.js";
import { showLoginForm } from "./login.js";
import { shonNavBar } from "./navBar.js";
import { showRegisterForm } from "./register.js";

const homeSection = document.getElementById('home-page');
const container = document.getElementById('container');
const addMovieBtn = homeSection.querySelector('#add-movie-button');

document.querySelector('.nav-item a[href="#"]')
.addEventListener('click', logout);

[...document.querySelectorAll('.nav-item a')]
.forEach(a => a.addEventListener('click', loginOrRegister));

addMovieBtn.addEventListener('click', () => {
    showAddMovieForm();
});

export function showHome() {
    container.replaceChildren(homeSection);
    showOrHideAddMovieBtn();
    shonNavBar();
}

function loginOrRegister(e) {
    if (e.target.innerHTML === 'Login') {
        showLoginForm();
    } else {
        showRegisterForm();
    }
}

function showOrHideAddMovieBtn() {
    const authToken = sessionStorage.authToken;
    if (!authToken) {
        addMovieBtn.style.display = 'none';
        return;
    }
    addMovieBtn.style.display = 'block';
}

async function logout() {
    debugger;
    const authToken = sessionStorage.authToken;
    const response = await fetch('http://localhost:3030/users/logout', {
        method: 'GET',
        headers: { 'X-Authorization': authToken }
    });
    sessionStorage.clear();
    showHome();
}