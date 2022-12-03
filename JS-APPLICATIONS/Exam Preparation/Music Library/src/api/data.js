import { del, get, post, put } from "./api.js"

const endPoint = {
    "getAllAlbums": "data/albums?sortBy=_createdOn%20desc",
    "createAlbum": "data/albums",
    "getAlbumById": "data/albums/",
    "deleteAlbum": "data/albums/",
    "editAlbun": "data/albums/",
    "getCountLike": "data/likes?where=albumId%3D%22{albumId}%22&distinct=_ownerId&count",
    "likeAlbum": "data/likes",
    "canUserLike": "data/likes?where=albumId%3D%22{albumId}%22%20and%20_ownerId%3D%22{userId}%22&count"
}


async function getAllAlbums() {
    return get(endPoint.getAllAlbums);
}

async function createAlbum(album) {
    return await post(endPoint.createAlbum, album);
}

async function getAlbumById(albumId) {
    return await get(endPoint.getAlbumById + albumId);
}

async function deleteAlbum(albumId) {
    return await del(endPoint.deleteAlbum + albumId);
}

async function editAlbum(albumId, album) {
    return await put(endPoint.editAlbun + albumId, album);
}

async function likeAlbum(albumId) {
    await post(endPoint.likeAlbum, {albumId});
}

async function getCountLikes(albumId) {
    let URL = endPoint.getCountLike.replace("{albumId}", albumId);
    return await get(URL);
}

async function getCountUserLikes(albumId, userId) {
    let URL = endPoint.canUserLike.replace("{albumId}", albumId);
    URL = URL.replace("{userId}", userId);
    return await get(URL);
}

export {
    getAllAlbums,
    createAlbum,
    getAlbumById,
    deleteAlbum,
    editAlbum,
    likeAlbum, 
    getCountLikes,
    getCountUserLikes
}