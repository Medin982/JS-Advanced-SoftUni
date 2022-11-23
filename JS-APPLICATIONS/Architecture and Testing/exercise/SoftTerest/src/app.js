import { logout } from "./api/user.js";
import { showCreate } from "./views/create.js";
import { showHome } from "./views/home.js";
import { showLogin } from "./views/login.js";
import { showRegisterSec } from "./views/register.js";

const main = document.getElementById('main-View');

document.querySelector('nav').addEventListener('click', onNavigation);

const views = {
    'Dashboard': showHome,
    'Login': showLogin,
    'Register': showRegisterSec,
    'Home': undefined,
    'Create': showCreate,
    'Logout': logout,
}

const context = {
    showSection,
    goTo
}

function showSection(section) {
    main.replaceChildren(section);
}

function onNavigation(event) {
    const target = event.target;
    event.preventDefault();
    

    if(target.tagName === "A") {
        const name = target.textContent;
        goTo(name);
    } else if (target.tagName === 'IMG') {
        goTo('Home');
    }
}


function goTo(name) {
    const handler = views[name];
    if (typeof(handler) == 'function') {
        handler(context);
    }
}
