import { deleteMovie } from "./delete.js";
import { editMovie } from "./editMovie.js";
import { likeMovie } from "./likes.js";
import { showNavBar } from "./navBar.js";

const movieSection = document.getElementById('movie-example');
const container = document.getElementById('container');
let movieId;

export async function showMovieDetails(e) {
   if (typeof (e) === 'string') {
      movieId = e;
   } else {
      movieId = e.target.parentElement.dataset.id;
   }
   const movie = await getCurrentMovie(movieId);
   movieSection.querySelector('h1').textContent = movie.title;
   movieSection.querySelector('img').src = movie.img;
   movieSection.querySelector('div p').textContent = movie.description;
   showOrHideBtns(movie._ownerId);
   container.replaceChildren(movieSection);
   showNavBar();
}

export async function getCurrentMovie(movieId) {
   const response = await fetch(`http://localhost:3030/data/movies/${movieId}`);
   const data = await response.json();
   return data;
}

function showOrHideBtns(ownerId) {
   const userId = sessionStorage.userId;
   const btns = [...movieSection.querySelectorAll('div a')];
   btns.forEach(btn => {
      if (btn.innerHTML === 'Edit') {
         btn.addEventListener('click', () => {
            editMovie(movieId);
         });
      } else if (btn.innerHTML === 'Delete') {
         btn.addEventListener('click', deleteMovie);
      } else {
         btn.addEventListener('click', likeMovie);
      }
   });

   if (ownerId !== userId) {
      btns
         .filter(btn => btn.innerHTML != 'Like')
         .forEach(btn => btn.style.display = 'none');
   } else {
      btns.filter(b => b.innerHTML === 'Like')[0].style.display = 'none';
   }
}