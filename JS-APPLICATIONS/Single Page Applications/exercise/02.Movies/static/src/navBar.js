const nav = document.getElementsByClassName('navbar')[0];
const container = document.getElementById('container');

export function showNavBar() {
    const authToken = sessionStorage.authToken;
    const userNav = [...nav.getElementsByClassName('nav-item user')];
    const guestNav = [...nav.getElementsByClassName('nav-item guest')];
    if (!authToken) {
        userNav.forEach(e => e.style.display = 'none');
        guestNav.forEach(e => e.style.display = 'block');
    } else {
        guestNav.forEach(e => e.style.display = 'none');
        userNav.forEach(e => e.style.display = 'block');
        nav.querySelector('#welcome-msg')
        .textContent = `Welcome, ${sessionStorage.userEmail}`; 
    }
    container.prepend(nav);
}