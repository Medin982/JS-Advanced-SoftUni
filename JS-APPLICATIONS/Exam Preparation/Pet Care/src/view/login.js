import { login } from "../api/user.js";
import { html } from "../lib.js";

const logigTemp = (onsubmit) => html`
<section id="loginPage">
    <form @submit=${onsubmit} class="loginForm">
        <img src="./images/logo.png" alt="logo" />
        <h2>Login</h2>

        <div>
            <label for="email">Email:</label>
            <input id="email" name="email" type="text" placeholder="steven@abv.bg" value="">
        </div>

        <div>
            <label for="password">Password:</label>
            <input id="password" name="password" type="password" placeholder="********" value="">
        </div>

        <button class="btn" type="submit">Login</button>

        <p class="field">
            <span>If you don't have profile click <a href="/register">here</a></span>
        </p>
    </form>
</section>`;

export function showLogin(ctx) {
    ctx.updateNav();
    ctx.render(logigTemp(onSubmit));

    async function onSubmit(e) {
        e.preventDefault();

        const {email, password} = Object.fromEntries(new FormData(e.target));

        if (!email || !password) {
            return alert("Email and Password are required1");
        }

        await login(email, password);

        ctx.page.redirect("/");
    }
}