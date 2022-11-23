const registerSec = document.getElementById('register-View');
registerSec.remove();

let ctx;
export function showRegisterSec(context) {
    ctx = context;
    ctx.showSection(registerSec);
}