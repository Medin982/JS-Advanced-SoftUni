import { render, page } from "./lib.js";
import { showHome } from "./view/home.js";
import { showLogin } from "./view/login.js";
import { showNav } from "./view/nav.js";
import { showRegister } from "./view/register.js";


page(renderMiddleware);
page("/", showHome);
page("/catalog", '');
page("/login", showLogin);
page("/register", showRegister);
page("/logout", '');
page("/create", '');
page("/details/:id", '');
page("/edit/:id", '');
page("*", showHome);

page.start();

function renderMiddleware(ctx, next) {
    ctx.updateNav = showNav;
    ctx.render = (content) => render(content, document.querySelector('main'));
    next();
}