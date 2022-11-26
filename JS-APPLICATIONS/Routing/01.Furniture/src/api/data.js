import { del, get, post, put } from "./api.js";

const endPoint = {
    'allFurniture': 'data/catalog',
    'getFurniture': 'data/catalog',
    'createFurniture': 'data/catalog',
    'updateFurniture': 'data/catalog',
    'deletaFurniture': 'data/catalog',
    'getMyFurniture': 'data/catalog?where=_ownerId%3D%22'
};

export async function allFurniture() {
    return await get(endPoint.allFurniture);
}

export async function getFurniture(id) {
    return await get(endPoint.getFurniture + id);
}

export async function createFurniture(furniture) {
    return await post(endPoint.createFurniture, furniture);
}

export async function updateFurniture(id, furniture) {
    return await put(endPoint.createFurniture + id, furniture);
}

export async function deleteFurniture(id) {
    return await del(endPoint.deletaFurniture + id);
}

export async function getMyFurniture(ownerId) {
    return await get(endPoint.getMyFurniture + ownerId + '%22');
}

