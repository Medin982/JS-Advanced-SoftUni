import { showHome } from "./home.js";

export async function deleteMovie(movieId) {
    const authToken = sessionStorage.authToken;
    try {
        const response = await fetch(`http://localhost:3030/data/movies/${movieId}`, {
        method: 'DELETE',
        headers: { 'X-Authorization': authToken}
    });
    showHome();
    } catch (error) {
       return; 
    }
}