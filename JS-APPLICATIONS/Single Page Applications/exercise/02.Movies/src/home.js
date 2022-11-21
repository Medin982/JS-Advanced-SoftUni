import { showAddMovieForm } from "./addMovie.js";
import { showLoginForm } from "./login.js";
import { showNavBar } from "./navBar.js";
import { showRegisterForm } from "./register.js";
import { showMovieDetails } from "./showMovieDetails.js";

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

export async function showHome() {
    const movieList = homeSection.querySelector('#movies-list');
    const movies = await getMovies();
    createMovieCard(movies, movieList);
    container.replaceChildren(homeSection);
    showOrHideAddMovieBtn();

    showNavBar();
}

function createMovieCard(movies, movieList){
    movies.forEach(m => {
        const li = document.createElement('li');
        li.setAttribute('class', 'card');
        const img = document.createElement('img');
        img.src = m.img;
        li.appendChild(img);
        const title = document.createElement('h5');
        title.textContent = m.title;
        const div = document.createElement('div');
        div.setAttribute('id', 'movie-details-btn');
        div.addEventListener('click', showMovieDetails);
        const detailsBtn = document.createElement('a');
        detailsBtn.href = '#';
        detailsBtn.setAttribute('class', 'btn btn-primary');
        detailsBtn.textContent = 'Details';
        div.appendChild(detailsBtn);
        li.appendChild(title);
        li.appendChild(div);
        movieList.appendChild(li);
    });
}

async function getMovies() {
    const response = await fetch('http://localhost:3030/data/movies');
    const data = await response.json();
    return data;
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