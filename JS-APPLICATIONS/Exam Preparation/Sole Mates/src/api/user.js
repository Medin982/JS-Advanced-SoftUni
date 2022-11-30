import { post, get } from "./api.js";
import { clearUserData, setUserData } from "./util.js";

const endPoint = {
    'login': 'users/login',
    'register': 'users/register',
    'logout': 'users/logout'
};

export async function login(email, password) {
    const user = await post(endPoint.login, { email, password });
    setUserData({ id: user._id, accessToken: user.accessToken });
    return user;
}

export async function register(email, password) {
    const user = await post(endPoint.register, { email, password });
    setUserData({ id: user._id, accessToken: user.accessToken });
    return user;
}

export function logout() {
    get(endPoint.logout);
    clearUserData();
}