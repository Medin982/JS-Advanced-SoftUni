import { logout } from "./api/user.js";
import { page, render } from "./lib.js";
import { showCatalog } from "./view/catalog.js";
import { showCreate } from "./view/create.js";
import { showDetails } from "./view/deatails.js";
import { showEdit } from "./view/edit.js";
import { showHome } from "./view/home.js";
import { showLogin } from "./view/login.js";
import { showNav } from "./view/nav.js";
import { showRegister } from "./view/registe.js";

page(renderMiddleware);
page("/", showHome);
page("/catalog", showCatalog);
page("/login", showLogin);
page("/register", showRegister);
page("/logout", (ctx) => {
    logout();
    ctx.page.redirect("/catalog");
});
page("/create", showCreate);
page("/details/:id", showDetails);
page("/edit/:id", showEdit);
page("*", ''); 

page.start();

function renderMiddleware(ctx, next) {
    ctx.updateNav = showNav;
    ctx.render = (conrent) => render(conrent, document.querySelector("main"));
    next();
}