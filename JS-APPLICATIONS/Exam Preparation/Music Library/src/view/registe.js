import { register } from "../api/user.js";
import { html } from "../lib.js";

const registerTemp = (onsubmit) => html`<section id="register">
    <div class="form">
        <h2>Register</h2>
        <form @submit=${onsubmit} class="login-form">
            <input type="text" name="email" id="register-email" placeholder="email" />
            <input type="password" name="password" id="register-password" placeholder="password" />
            <input type="password" name="re-password" id="repeat-password" placeholder="repeat password" />
            <button type="submit">register</button>
            <p class="message">Already registered? <a href="/login">Login</a></p>
        </form>
    </div>
</section>`;

export function showRegister(ctx) {
    ctx.updateNav();
    ctx.render(registerTemp(onSubmit));

    async function onSubmit(e) {
        e.preventDefault();

        const { email, password } = Object.fromEntries(new FormData(e.target));

        if (!email || !password) {
            return alert('Email and Password are required!');
        }

        const user = await register(email, password);

        ctx.page.redirect('/catalog');
    }
}