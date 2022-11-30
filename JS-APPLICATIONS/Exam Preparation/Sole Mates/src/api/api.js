import { clearUserData, getUserData } from "./util.js";

const host = 'http://localhost:3030/';

async function requester(method, url, data) {
    const option = {
        method,
        headers: {}
    }

    if (data) {
       option.headers['Content-Type'] = 'application/json';
       option.body = JSON.stringify(data);
    }

    const user = getUserData();
    if (user) {
        option.headers['X-Authorization'] = user.accessToken;
    }

    try {
        const response = await fetch(host + url, option);

        if (!response.ok) {
            if (response.status === 404) {
                clearUserData();
            }

            const err = await response.json();
            throw new Error(err.message);
        }

        if (response.status !== 204) {
            return await response.json();
        }
    } catch (error) {
        alert(error.message);
        throw error;
    }
}

const get = requester.bind(null, 'get');
const post = requester.bind(null, 'post');
const put = requester.bind(null, 'put');
const del = requester.bind(null, 'delete');

export {
    get,
    post,
    put,
    del
}