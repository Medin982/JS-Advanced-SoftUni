import { html, render } from "../lib.js";
import { getUserData } from "../api/util.js";

export function showNavigation() {
    const user = getUserData();
    const navBar = html`
    <a id="logo" href="/"><img id="logo-img" src="./images/logo.png" alt="" /></a>
    
    <nav>
        <div>
            <a href="/catalog">Dashboard</a>
            <a href="/search">Search</a>
        </div>
    
        ${user ?
          html`
        <!-- Logged-in users -->
        <div class="user">
            <a href="/create">Add Pair</a>
            <a href="/logout">Logout</a>
        </div>`
          : html`
        <!-- Guest users -->
        <div class="guest">
            <a href="/login">Login</a>
            <a href="/register">Register</a>
        </div>`}
    </nav>
    `;

    render(navBar, document.querySelector('header'));
}