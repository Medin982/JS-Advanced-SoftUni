import { logout } from "./api/user.js";
import { page, render } from "./lib.js";
import { showCatalog } from "./view/catalog.js";
import { showCreate } from "./view/create.js";
import { showDetails } from "./view/details.js";
import { showHome } from "./view/home.js";
import { showLogin } from "./view/login.js";
import { showNav } from "./view/nav.js";
import { showRegister } from "./view/register.js";

page(renderMiddleware);
page("/", showHome);
page("/login", showLogin);
page("/register", showRegister);
page("/logout", (ctx) => {
        logout();
        ctx.page.redirect("/");
});
page("/edit/:id", "");
page("/details/:id", showDetails);
page("/create", showCreate);
page("/catalog", showCatalog);
page("*", showHome);

page.start();

function renderMiddleware(ctx, next) {
    ctx.updateNav = showNav;
    ctx.render = (content) => render(content, document.getElementById('content'));
    next();
}