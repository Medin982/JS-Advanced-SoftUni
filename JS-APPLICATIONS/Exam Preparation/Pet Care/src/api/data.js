import { get, post } from "./api.js"

const endPoint = {
    "getAllPets": "data/pets?sortBy=_createdOn%20desc&distinct=name",
    "createPet": "data/pets",
    "getById": "data/pets/"
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

export {
    getAllPets,
    createPet,
    getPetById
}