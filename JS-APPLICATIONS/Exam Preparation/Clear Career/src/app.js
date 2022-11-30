import { logout } from "./api/user.js";
import { page, render } from "./lib.js";
import { showCatalog } from "./view/catalog.js";
import { showCreate } from "./view/create.js";
import { showDetails } from "./view/details.js";
import { showEdit } from "./view/edit.js";
import { showHome } from "./view/home.js";
import { showLogin } from "./view/login.js";
import { updateNavigation } from "./view/nav.js";
import { showRegister } from "./view/register.js";

page(renderMiddleware);
page("/", showHome);
page("/catalog", showCatalog);
page("/create", showCreate);
page("/login", showLogin);
page("/register", showRegister);
page("/logout", (ctx) =>{
    logout();
    ctx.page.redirect('/catalog');
});
page("/details/:id", showDetails);
page("/edit/:id", showEdit);
page("*", showHome);

page.start();

function renderMiddleware(ctx, next) {
    ctx.updateNav = updateNavigation;
    ctx.render = (content) => render(content, document.querySelector('main'));
    next();
}