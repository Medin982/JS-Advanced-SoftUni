import { showNavBar } from "./navBar.js";
import { getCurrentMovie, showMovieDetails } from "./showMovieDetails.js";

const editMovieSection = document.getElementById('edit-movie');
const form = editMovieSection.querySelector('form');
form.addEventListener('submit', getMovieData);
const container = document.getElementById('container');
const errroP = document.createElement('p');
errroP.setAttribute("class", 'error-notification');
let id;

export async function editMovie(movieId) {
    id = movieId;
    const input = editMovieSection.querySelector('textarea');
    const movie = await getCurrentMovie(movieId);
    editMovieSection.querySelector('textArea').value = movie.description;
    editMovieSection.querySelector('#title').value = movie.title;
    editMovieSection.querySelector('#imageUrl').value = movie.img;
    container.replaceChildren(editMovieSection);
    showNavBar();
}

function getMovieData(e) {
    e.preventDefault();
    const { title, description, img } = Object.fromEntries(new FormData(e.target));

    if (!title || !description || !img) {
        errroP.textContent = 'Cannot be have empty fields!';
        form.prepend(errroP);
        setTimeout(() => {
            errroP.remove();
        }, 2000);
    }

    updataMovie({ title, description, img }, id);
}

async function updataMovie(body, movieId) {
    const authToken = sessionStorage.authToken;
    try {
        const response = await fetch(`http://localhost:3030/data/movies/${movieId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'X-Authorization': authToken
            },
            body: JSON.stringify(body)
        });
        showMovieDetails(id);
    } catch (error) {
        errroP.textContent = error.message;
        form.prepend(errroP);
        setTimeout(() => {
            errroP.remove();
        }, 2000);
    }
}