import { register } from "../api/user.js";
import { html } from "../lib.js";

const registerTemp = (onsubmit) => html`
<section id="register-page" class="auth">
    <form @submit=${onsubmit} id="register">
        <h1 class="title">Register</h1>

        <article class="input-group">
            <label for="register-email">Email: </label>
            <input type="email" id="register-email" name="email">
        </article>

        <article class="input-group">
            <label for="register-password">Password: </label>
            <input type="password" id="register-password" name="password">
        </article>

        <article class="input-group">
            <label for="repeat-password">Repeat Password: </label>
            <input type="password" id="repeat-password" name="repeatPassword">
        </article>

        <input type="submit" class="btn submit-btn" value="Register">
    </form>
</section>`;

export function showRegister(ctx) {
    ctx.updateNav();
    ctx.render(registerTemp(onSubmit));

    async function onSubmit(e) {
        e.preventDefault();

        const {email, password} = Object.fromEntries(new FormData(e.target));

        if (!email || !password) {
            return alert("Email and Password are required!");
        }

        const user = await register(email, password);
        ctx.page.redirect("/");
    }
}