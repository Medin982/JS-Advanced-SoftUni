
export function updataNavBar() {
    const userSec = document.getElementById('user');
    const guestSec = document.getElementById('guest');
    const user = JSON.parse(sessionStorage.getItem('userData'));
    if (user) {
        userSec.style.display = 'inline-block';
        guestSec.style.display = 'none'
    } else {
        userSec.style.display = 'none';
        guestSec.style.display = 'inline-block';
    }
}