import { html, render } from "../lib.js";
import { getUserData } from "../api/util.js";

export function updateNavigation() {
    const user = getUserData();
    const navTemp = html`
    <a id="logo" href="/"
          ><img id="logo-img" src="./images/logo.jpg" alt=""
        /></a>
        <nav>
          <div>
            <a href="/catalog">Dashboard</a>
          </div>

          ${user ? html`
          <!-- Logged-in users -->
          <div class="user">
            <a href="/create">Create Offer</a>
            <a href="/logout">Logout</a>
          </div>`
          : html `
              <!-- Guest users -->
          <div class="guest">
            <a href="/login">Login</a>
            <a href="/register">Register</a>
          </div>`}
        </nav>`;

    render(navTemp, document.querySelector('header'));
}