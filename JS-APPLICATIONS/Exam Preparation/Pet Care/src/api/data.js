import { del, get, post, put } from "./api.js"

const endPoint = {
    "getAllPets": "data/pets?sortBy=_createdOn%20desc&distinct=name",
    "createPet": "data/pets",
    "getById": "data/pets/",
    "editPet": "data/pets/",
    "deletePet": "data/pets/",
    "addDonate": "data/donation",
    "getCountDonate": "data/donation?where=petId%3D%22${petId}%22&distinct=_ownerId&count",
    "getUserCountDanote": "data/donation?where=petId%3D%22${petId}%22%20and%20_ownerId%3D%22${userId}%22&count"
}

async function getAllPets() {
    return await get(endPoint.getAllPets);
}

async function createPet(pet) {
    return await post(endPoint.createPet, pet);
}

async function getPetById(petId) {
    return await get(endPoint.getById + petId);
}

async function editPet(petId, pet) {
    return await put(endPoint.editPet + petId, pet);
}

async function deletePet(petId) {
    return await del(endPoint.deletePet + petId);
}

async function sendDonate(petId) {
    return await post(endPoint.addDonate, {petId});
}

async function getCountDonate(petId) {
    let URL = endPoint.getCountDonate.replace("${petId}", petId);
    return await get(URL);
}

async function getUserCountDonate(petId, userId) {
    let URL = endPoint.getUserCountDanote.replace("${petId}", petId);
    URL = URL.replace("${userId}", userId);
    return await get(URL);
}

export {
    getAllPets,
    createPet,
    getPetById,
    editPet,
    deletePet,
    sendDonate,
    getCountDonate,
    getUserCountDonate
}