const nav = document.getElementsByClassName('navbar')[0];
const container = document.getElementById('container');

export function shonNavBar() {
    const authToken = sessionStorage.authToken;
    if (!authToken) {
        const userNav = [...nav.getElementsByClassName('nav-item user')];
        userNav.forEach(e => e.remove());
    } else {
        const guestNav = [...nav.getElementsByClassName('nav-item guest')];
        guestNav.forEach(e => e.remove());
        nav.querySelector('#welcome-msg')
        .textContent = `Welcome, ${sessionStorage.userEmail}`; 
    }
    container.prepend(nav);
}