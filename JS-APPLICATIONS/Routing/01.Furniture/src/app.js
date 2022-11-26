import { render } from "../node_modules/lit-html/lit-html.js";
import  page  from "../node_modules/page/page.mjs"
import { logout } from "./api/user.js";
import { showAllFurnitureView } from "./views/allFurnituere.js";
import { showCatalog } from './views/catalog.js'
import { showCreateView } from "./views/create.js";
import { showDetailsView } from "./views/details.js";
import { showEditView } from "./views/edit.js";
import { showLoginView } from "./views/login.js";
import { showMyFurnitureView } from "./views/myFurniture.js";
import { updataNavBar } from "./views/navigation.js";
import { showRegisterView } from "./views/register.js";

page(renderMiddleware);
page('/', showCatalog);
page('/create', showCreateView);
page('/login', showLoginView);
page('/register', showRegisterView);
page('/logout', async (ctx) => {
    await logout()
    ctx.updataNav();
    ctx.page.redirect('/');
});
page('/details/:id', showDetailsView);
page('/allFurniture', showAllFurnitureView);
page('/myFurniture/:id', showMyFurnitureView);
page('/edit/:id', showEditView);
page('*', showCatalog);
page.start();

function renderMiddleware(ctx, next) {
    ctx.render = (content) => render(content, document.querySelector('.container'));
    ctx.updataNav = updataNavBar;
    next();
}