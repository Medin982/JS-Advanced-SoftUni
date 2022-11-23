import { get, post } from "./api.js";

const endPoint = {
    'login': 'users/login',
    'register': 'users/register',
    'logout': 'users/logout',
}

export async function login(email, password) {
    const user = await post(endPoint.login, { email, password });
    sessionStorage.setItem('user', JSON.stringify(user));
}

export async function register(email, password) {
    const user = await post(endPoint.register, { email, password });
    sessionStorage.setItem('user', JSON.stringify(user));
}

export async function logout() {
    await get(endPoint.logout);
    sessionStorage.clear;
}

