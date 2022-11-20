import { shonNavBar } from "./navBar.js";

const addMovieSection = document.getElementById('add-movie');
const container = document.getElementById('container');
const form = addMovieSection.querySelector('form');
form.addEventListener('submit', movieData);

export function showAddMovieForm() {
    container.replaceChildren(addMovieSection);
    shonNavBar();
}

function movieData(e) {
    e.preventDefault();

    const {title, description, img} = Object.fromEntries(new FormData(e.target));

    
}