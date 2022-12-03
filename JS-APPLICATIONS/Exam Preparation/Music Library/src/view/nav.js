import { html, render } from "../lib.js";
import { getUserData } from "../api/util.js";

export function showNav() {
    const user = getUserData();
    const navTemp = html`
    <a id="logo" href="/"><img id="logo-img" src="./images/logo.png" alt="" /></a>
    <nav>
        <div>
            <a href="/catalog">Dashboard</a>
        </div>
        ${user 
        ? html`<div class="user">
            <a href="/create">Add Album</a>
            <a href="/logout">Logout</a>
        </div>`
        : html` <div class="guest">
            <a href="/login">Login</a>
            <a href="/register">Register</a>
        </div>`}
    </nav>`;

    render(navTemp, document.querySelector('header'));
}