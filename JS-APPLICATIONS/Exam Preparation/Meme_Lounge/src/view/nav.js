import { html, render } from "../lib.js";
import { getUserData } from "../api/util.js";

export function showNav() {
    const user = getUserData();
    const email = user?.email;
    const navTemp = html`
    <a href="/allMemes">All Memes</a>
            ${user 
                ? html `
                <div class="user">
                <a href="/create">Create Meme</a>
                <div class="profile">
                    <span>Welcome, ${email}</span>
                    <a href="/myProfile">My Profile</a>
                    <a href="/logout">Logout</a>
                </div>
            </div>`
            : html `<div class="guest">
                <div class="profile">
                    <a href="/login">Login</a>
                    <a href="/register">Register</a>
                </div>
                <a class="active" href="/">Home Page</a>
            </div>`}`;

    render(navTemp, document.querySelector('nav'));
}