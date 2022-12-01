import { getUserData } from "../api/util.js";
import { html, render } from "../lib.js";

export function showNav() {
    const user = getUserData();
    const navTemp = html`
    <nav>
        <section class="logo">
            <img src="./images/logo.png" alt="logo">
        </section>
        <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/catalog">Dashboard</a></li>
           ${user 
                ? html` 
                <li><a href="/create">Create Postcard</a></li>
                <li><a href="/logout">Logout</a></li>`
                : html`
                <li><a href="/login">Login</a></li>
                <li><a href="/register">Register</a></li>`}
        </ul>
    </nav>`;

    render(navTemp, document.querySelector('header'));
}