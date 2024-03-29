import { register } from "../api/user.js";
import { html } from "../lib.js";

const registerTemp = (onSubmit) => html`
<section id="register">
    <form @submit=${onSubmit} id="register-form">
        <div class="container">
            <h1>Register</h1>
            <label for="username">Username</label>
            <input id="username" type="text" placeholder="Enter Username" name="username">
            <label for="email">Email</label>
            <input id="email" type="text" placeholder="Enter Email" name="email">
            <label for="password">Password</label>
            <input id="password" type="password" placeholder="Enter Password" name="password">
            <label for="repeatPass">Repeat Password</label>
            <input id="repeatPass" type="password" placeholder="Repeat Password" name="repeatPass">
            <div class="gender">
                <input type="radio" name="gender" id="female" value="female">
                <label for="female">Female</label>
                <input type="radio" name="gender" id="male" value="male" checked>
                <label for="male">Male</label>
            </div>
            <input type="submit" class="registerbtn button" value="Register">
            <div class="container signin">
                <p>Already have an account?<a href="#">Sign in</a>.</p>
            </div>
        </div>
    </form>
</section>`;

export function showRegister(ctx) {
    ctx.updateNav();
    ctx.render(registerTemp(onSubmit));

    async function onSubmit(e) {
        e.preventDefault();

        const { username, email,
            password, repeatPass, gender } = Object.fromEntries(new FormData(e.target));

        if (!username || !email || !password
            || !repeatPass || !gender) {
            return alert("Cannot have empty fields!");
        }

        if (password == repeatPass) {
            return alert("Password don\'t match!");
        }

        const user = await register({
            username, email,
            password, gender
        });

        ctx.page.redirect('/allMemes');
    }
}