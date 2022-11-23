import { del, get, post } from "./api.js"

const endPoint = {
    'allIdeas': 'data/ideas?select=_id%2Ctitle%2Cimg&sortBy=_createdOn%20desc',
    'idea': 'data/ideas/',
    'createIdea': 'data/ideas/'
}

async function getAllIdeas() {
    return await get(endPoint.allIdeas);
}

 async function getIdea(ideaId) {
    return await get(endPoint.idea + ideaId);
}

 async function deleteIdea(ideaId) {
    await del(endPoint.idea + ideaId);
}

async function createIdea(imageURL, title, description) {
    return await post(endPoint.createIdea, {"img": imageURL, title, description});
}

export {
    getAllIdeas,
    getIdea,
    deleteIdea,
    createIdea
}