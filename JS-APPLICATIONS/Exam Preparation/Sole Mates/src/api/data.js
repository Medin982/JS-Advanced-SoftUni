import { get, post, put, del } from './api.js';

const endPoint = {
    "getAll": "data/shoes?sortBy=_createdOn%20desc",
    "create": 'data/shoes',
    "getById": "data/shoes/",
    "edit": "data/shoes/",
    "delete": "data/shoes/",
    "searchByParams": `data/shoes?where=brand%20LIKE%20%22`
}

export async function getallItems() {
    return await get(endPoint.getAll);
}

export async function createItem(item) {
    return await post(endPoint.create, item);
}

export async function getItemById(itemId) {
    return await get(endPoint.getById + itemId);
}

export async function editItem(itemId, item) {
    return put(endPoint.edit + itemId, item);
}

export async function deletItem(itemId) {
    return await del(endPoint.delete + itemId);
}

export async function searchByParams(query) {
    return get(endPoint.searchByParams + query + '%22');
}