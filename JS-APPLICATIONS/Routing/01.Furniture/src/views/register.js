import { html } from "../../node_modules/lit-html/lit-html.js";
import { register } from "../api/user.js";

let context;
export function showRegisterView(ctx) {
    context = ctx.page;
    ctx.render(loadRegisterTemp());
}

async function onSubmit(e) {
    e.preventDefault();
    const {email, password, rePass} = Object.fromEntries(new FormData(e.target));
    if (!email || !password || !rePass || password !== rePass) {
        alert('Fields cannot be empty');
        return;
    }

    const user = await register(email, password);
    context.redirect('/');
}

function loadRegisterTemp() {
    return html`
            <div class="row space-top">
                <div class="col-md-12">
                    <h1>Register New User</h1>
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
                        <div class="form-group">
                            <label class="form-control-label" for="rePass">Repeat</label>
                            <input class="form-control" id="rePass" type="password" name="rePass">
                        </div>
                        <input type="submit" class="btn btn-primary" value="Register" />
                    </div>
                </div>
            </form>`;
}