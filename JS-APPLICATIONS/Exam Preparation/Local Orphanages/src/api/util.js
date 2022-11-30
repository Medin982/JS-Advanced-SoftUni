export function getUserData() {
    return JSON.parse(sessionStorage.getItem('userData'));
}

export function addUserData(user) {
    sessionStorage.setItem('userData', JSON.stringify(user));
}

export function clearUserData() {
    sessionStorage.removeItem('userData');
}