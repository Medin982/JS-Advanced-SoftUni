import { login } from "../api/user.js";
import { html } from "../lib.js";

const loginTemp = (onSubmit) => html`
<section id="login">
    <div class="form">
        <h2>Login</h2>
        <form @submit=${onSubmit} class="login-form">
            <input type="text" name="email" id="email" placeholder="email" />
            <input type="password" name="password" id="password" placeholder="password" />
            <button type="submit">login</button>
            <p class="message">
                Not registered? <a href="#">Create an account</a>
            </p>
        </form>
    </div>
</section>`;

export function showLogin(ctx) {
    ctx.updateNav();
    ctx.render(loginTemp(onSubmit));

    async function onSubmit(e) {
        e.preventDefault();

        const {email, password} = Object.fromEntries(new FormData(e.target));

        if (!email || !password) {
            return alert('Email and Password are requared!');
        }

        const user = await login(email, password);

        ctx.page.redirect('/catalog');
    }
}