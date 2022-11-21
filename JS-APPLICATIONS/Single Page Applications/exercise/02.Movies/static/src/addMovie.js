import { showHome } from "./home.js";
import { showNavBar } from "./navBar.js";

const addMovieSection = document.getElementById('add-movie');
const container = document.getElementById('container');
const form = addMovieSection.querySelector('form');
form.addEventListener('submit', movieData);
const errroP = document.createElement('p');
errroP.setAttribute("class", 'error-notification');

export function showAddMovieForm() {
    container.replaceChildren(addMovieSection);
    showNavBar();
}

function movieData(e) {
    e.preventDefault();

    const { title, description, img } = Object.fromEntries(new FormData(e.target));
    addMovie({ title, description, img });
}

async function addMovie(body) {
    const authToken = sessionStorage.authToken;
   try {
    const response = await fetch('http://localhost:3030/data/movies', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-Authorization': authToken
        },
        body: JSON.stringify(body)
    });
    showHome();
   } catch (error) {
    return;
   }
}