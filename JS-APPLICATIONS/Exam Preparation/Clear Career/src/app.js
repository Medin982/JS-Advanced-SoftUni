import { logout } from "./api/user.js";
import { page, render } from "./lib.js";
import { showCatalog } from "./view/catalog.js";
import { showHome } from "./view/home.js";
import { showLogin } from "./view/login.js";
import { updateNavigation } from "./view/nav.js";
import { showRegister } from "./view/register.js";

page(renderMiddleware);
page("/", showHome);
page("/catalog", showCatalog);
page("/login", showLogin);
page("/register", showRegister);
page("/logout", (ctx) =>{
    logout();
    ctx.page.redirect('/catalog');
});
page("/details/:id", "Home");
page("/edit/:id", "Home");
page("*", 'home');

page.start();

function renderMiddleware(ctx, next) {
    ctx.updateNav = updateNavigation;
    ctx.render = (content) => render(content, document.querySelector('main'));
    next();
}