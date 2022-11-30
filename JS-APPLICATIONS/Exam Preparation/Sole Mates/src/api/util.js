
function setUserData(userData) {
    sessionStorage.setItem('userData', JSON.stringify(userData));
}

function getUserData() {
    return JSON.parse(sessionStorage.getItem('userData'));
}

function clearUserData() {
    sessionStorage.removeItem('userData');
}

export {
    setUserData,
    getUserData,
    clearUserData
}