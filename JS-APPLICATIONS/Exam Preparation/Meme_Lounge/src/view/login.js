import { login } from "../api/user.js";
import { html } from "../lib.js";

const loginTemp = (onSubmit) => html`
<section id="login">
    <form @submit=${onSubmit} id="login-form">
        <div class="container">
            <h1>Login</h1>
            <label for="email">Email</label>
            <input id="email" placeholder="Enter Email" name="email" type="text">
            <label for="password">Password</label>
            <input id="password" type="password" placeholder="Enter Password" name="password">
            <input type="submit" class="registerbtn button" value="Login">
            <div class="container signin">
                <p>Dont have an account?<a href="#">Sign up</a>.</p>
            </div>
        </div>
    </form>
</section>`;

export function showLogin(ctx) {
    ctx.updateNav();
    ctx.render(loginTemp(onSubmit));

    async function onSubmit(e) {
        e.preventDefault();

        const { email, password } = Object.fromEntries(new FormData(e.target));

        if (!email || !password) {
            return alert('Email and Password are required!');
        }

        const user = await login(email, password);

        ctx.page.redirect("/allMemes");
    }
}