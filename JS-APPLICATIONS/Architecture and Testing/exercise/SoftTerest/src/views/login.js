
const loginSec = document.getElementById('login-View');
loginSec.remove();

export function showLogin(context) {
    context.showSection(loginSec);
}