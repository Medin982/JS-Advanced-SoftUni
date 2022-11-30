import { get, post, del, put } from "./api.js"

const endpoints = {
    "getAll": "data/offers?sortBy=_createdOn%20desc",
    "create": "data/offers",
    "getById": "data/offers/",
    "deleteItem": "data/offers/",
    "editItem": "data/offers/",
    "applingItem": "data/applications"
}

export async function getAllItems() {
    return await get(endpoints.getAll);
}

export async function createItem(item) {
    return await post(endpoints.create, item);
}

export async function getById(itemId) {
    return await get(endpoints.getById + itemId);
}

export async function deleteById(itemId) {
    await del(endpoints.deleteItem + itemId);
}

export async function editItem(itemId ,item) {
    await put(endpoints.editItem + itemId, item);
}

export async function applyItem(itemId) {
    await post(endpoints.applingItem, {"offerId": itemId});
}

export async function getCountApply(itemId) {
    let url = `?where=offerId%3D%22${itemId}%22&distinct=_ownerId&count`;
    return await get(endpoints.applingItem + url);
}

export async function canApplyUser(itemId, userId) {
    let url = `?where=offerId%3D%22${itemId}%22%20and%20_ownerId%3D%22${userId}%22&count`;
    return await get(endpoints.applingItem + url);
}