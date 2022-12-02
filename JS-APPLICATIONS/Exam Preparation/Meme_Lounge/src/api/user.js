import { get, post } from "./api.js";
import { addUserData, clearUserData } from "./util.js";

const endPoint = {
    'login': 'users/login',
    'register': 'users/register',
    'logout': 'users/logout'
};

async function login(email, password) {
    const user = await post(endPoint.login, { email, password });
    addUserData({ 'id': user._id, 'email': user.email, 'accessToken': user.accessToken });
    return user;
}

async function register(user) {
    const user = await post(endPoint.register, user);
    addUserData({ 'id': user._id, 'email': user.email, 'accessToken': user.accessToken });
    return user;
}

function logout() {
    get(endPoint.logout);
    clearUserData();
}

export {
    login,
    register,
    logout
}