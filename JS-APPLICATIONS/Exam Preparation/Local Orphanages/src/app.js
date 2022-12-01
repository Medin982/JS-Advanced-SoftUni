import { logout } from "./api/user.js";
import { page, render } from "./lib.js";
import { showCreate } from "./view/create.js";
import { showDetails } from "./view/details.js";
import { showEdit } from "./view/edit.js";
import { showHome } from "./view/home.js";
import { showLogin } from "./view/login.js";
import { showMyPosts } from "./view/myPosts.js";
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
page("/my-posts", showMyPosts);
page("/create", showCreate);
page("/details/:id", showDetails);
page("/edit/:id", showEdit);
page("*", showHome);

page.start();

function renderMiddleware(ctx, next) {
    ctx.updateNav = showNav;
    ctx.render = (content) => render(content, document.getElementById('main-content'));
    next();
}