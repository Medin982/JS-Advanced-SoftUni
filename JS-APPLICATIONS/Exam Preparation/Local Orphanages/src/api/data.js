import { get, post, del } from "./api.js";

const endpoint = {
    "getAll": "data/posts?sortBy=_createdOn%20desc",
    "create": "data/posts",
    "getById": "data/posts/",
    "delete" : "data/posts/",
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

export {
    getAll,
    createItem,
    getById,
    deleteItem
}