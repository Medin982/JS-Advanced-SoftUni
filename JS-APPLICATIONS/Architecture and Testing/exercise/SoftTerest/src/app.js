import { logout } from "./api/user.js";
import { initialize } from "./router.js";
import { showCreate } from "./views/create.js";
import { showDashboard } from "./views/dashboard.js";
import { showHome } from "./views/home.js";
import { showLogin } from "./views/login.js";
import { showRegisterSec } from "./views/register.js";



const views = {
    'Dashboard': showDashboard,
    'Login': showLogin,
    'Register': showRegisterSec,
    'Home': showHome,
    'Create': showCreate,
    'Logout': async () => {
        await logout();
        router.goTo('Home');
    },
}

const router = initialize(views);

router.goTo('Home');
