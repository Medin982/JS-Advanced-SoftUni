import { get, post, del, put } from "./api.js";

const endpoint = {
    "getAll": "data/posts?sortBy=_createdOn%20desc",
    "create": "data/posts",
    "getById": "data/posts/",
    "delete" : "data/posts/",
    "update": "data/posts/",
    "getUserPosts": "data/posts?where=_ownerId%3D%22{userId}%22&sortBy=_createdOn%20desc",
    "sendDonate": "data/donations",
    "getUserDonate": "data/donations?where=postId%3D%22${postId}%22%20and%20_ownerId%3D%22${userId}%22&count",
    "getCountDonate": "data/donations?where=postId%3D%22${postId}%22&distinct=_ownerId&count"
}

async function getAll() {
    return await get(endpoint.getAll);
}

async function createItem(item) {
    return await post(endpoint.create, item);
}

async function getById(itemId) {
    return await get(endpoint.getById + itemId);
}

async function deleteItem(itemId) {
    return await del(endpoint.delete + itemId);
}

async function updateItem(itemId, item) {
    return await put(endpoint.update + itemId, item);
}

async function getUserPosts(userId) {
    let url = endpoint.getUserPosts.replace("{userId}", userId);
    return await get(url);
}

async function donate(itemId) {
    return post(endpoint.sendDonate, {"postId": itemId})
}

async function getCountDonate(itemId) {
    let url = endpoint.getCountDonate.replace("${postId}", itemId);
    return await get(url);
}

async function getUserCountDonate(itemId, userId) {
    let url = endpoint.getUserDonate.replace("${postId}", itemId);
    url = url.replace("${userId}", userId);
    return await get(url);
}

export {
    getAll,
    createItem,
    getById,
    deleteItem,
    updateItem,
    getUserPosts,
    donate,
    getCountDonate,
    getUserCountDonate
}