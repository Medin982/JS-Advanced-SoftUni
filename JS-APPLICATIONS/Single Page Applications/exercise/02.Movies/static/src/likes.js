import { showMovieDetails } from "./showMovieDetails.js";

export async function likeMovie(movieId) {
    const authToken = sessionStorage.authToken;
  try {
    const response = await fetch(`http://localhost:3030/data/likes`, {
        method: 'POST',
        headers: {'X-Authorization': authToken},
        body: JSON.stringify({'movieId': movieId})
    });
  } catch (error) {
    return;
  }
    showMovieDetails(movieId);
}

export async function getCountLikesPerMovie(movieId) {
    const response = await fetch(`http://localhost:3030/data/likes?where=movieId%3D%22{${movieId}}%22&distinct=_ownerId&count`);
    if (!response.ok) {
        return
    }
    const data = await response.json();
    return data;
}