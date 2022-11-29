import { render } from "./lib.js";
import  page  from "../node_modules/page/page.mjs";
import { showLogin } from "./view/login.js";
import { showRegister } from "./view/register.js";
import { showNavigation } from "./view/nav.js";
import { showHome } from "./view/home.js";
import { showCreate } from "./view/create.js";
import { logout } from "./api/user.js";
import { showDashboard } from "./view/catalog.js";
import { showDetails } from "./view/details.js";
import { showEdit } from "./view/edit.js";
import { showSearch } from "./view/search.js";

page(renderMiddleware);
page('/', showHome);
page('/create', showCreate);
page('/catalog', showDashboard);
page('/details/:id', showDetails);
page('/login', showLogin);
page('/logout', (ctx) => {
    logout();
    ctx.page.redirect('catalog');
});
page('/register', showRegister);
page('/edit/:id', showEdit);
page('/search', showSearch);
page('*', '');

page.start();

function renderMiddleware(ctx, next) {
    ctx.updateNav = showNavigation;
    ctx.render = (content) => render(content, document.querySelector('main'));
    next();
}
