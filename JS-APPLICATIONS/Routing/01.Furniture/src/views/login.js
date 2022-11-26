import { html } from "../../node_modules/lit-html/lit-html.js";
import { login } from "../api/user.js";

let context;
export function showLoginView(ctx) {
    context = ctx.page;
    ctx.render(loadLoginTemp());
}

async function onSubmit(e) {
    e.preventDefault();

    const {email, password} = Object.fromEntries(new FormData(e.target));

    if (!email || !password) {
        alert('Fields cannot be empty!');
        return;
    }

    await login(email, password);
    context.redirect('/')
}

function loadLoginTemp() {
    return html`
    <div class="row space-top">
            <div class="col-md-12">
                <h1>Login User</h1>
                <p>Please fill all fields.</p>
            </div>
        </div>
        <form @submit=${onSubmit}>
            <div class="row space-top">
                <div class="col-md-4">
                    <div class="form-group">
                        <label class="form-control-label" for="email">Email</label>
                        <input class="form-control" id="email" type="text" name="email">
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" for="password">Password</label>
                        <input class="form-control" id="password" type="password" name="password">
                    </div>
                    <input type="submit" class="btn btn-primary" value="Login" />
                </div>
            </div>
        </form>`;
}