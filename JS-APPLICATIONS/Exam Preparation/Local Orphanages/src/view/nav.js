import { html, render } from "../lib.js";
import { getUserData } from "../api/util.js";

export function showNav() {
    const user = getUserData();
    const navTemp = html`
    <h1><a href="/">Orphelp</a></h1>
    
    <nav>
        <a href="/">Dashboard</a>
       ${user ? html`
       <div id="user">
            <a href="/my-posts">My Posts</a>
            <a href="/create">Create Post</a>
            <a href="/logout">Logout</a>
        </div>`
        : html`  <div id="guest">
            <a href="/login">Login</a>
            <a href="/register">Register</a>
        </div>`}
    </nav>`;

    render(navTemp, document.querySelector('header'));
}