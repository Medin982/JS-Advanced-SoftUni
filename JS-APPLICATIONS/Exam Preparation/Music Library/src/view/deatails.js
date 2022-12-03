import { deleteAlbum, getAlbumById, getCountLikes, getCountUserLikes, likeAlbum } from "../api/data.js";
import { getUserData } from "../api/util.js";
import { html, nothing } from "../lib.js";

const detailsTemp = (album, user, isOwner, onDelete, onLikes, count, canLikes) => html`
<section id="details">
    <div id="details-wrapper">
        <p id="details-title">Album Details</p>
        <div id="img-wrapper">
            <img src=${album.imageUrl} alt="example1" />
        </div>
        <div id="info-wrapper">
            <p><strong>Band:</strong><span id="details-singer">${album.singer}</span></p>
            <p>
                <strong>Album name:</strong><span id="details-album">${album.album}</span>
            </p>
            <p><strong>Release date:</strong><span id="details-release">${album.release}</span></p>
            <p><strong>Label:</strong><span id="details-label">${album.label}</span></p>
            <p><strong>Sales:</strong><span id="details-sales">${album.sales}</span></p>
        </div>
        <div id="likes">Likes: <span id="likes-count">${count}</span></div>
        ${user 
        ? html`
        <div id="action-buttons">
            ${isOwner 
            ? html`
            <a href="/edit/${album._id}" id="edit-btn">Edit</a>
            <a @click=${onDelete} href="javascript:void(0)" id="delete-btn">Delete</a>`
            : html`
            ${canLikes
             ? html`<a @click=${onLikes} href="javascript:void(0)" id="like-btn">Like</a>`
             : nothing}`}
        </div>`
        : nothing}
    </div>
</section>`;

export async function showDetails(ctx) {
    ctx.updateNav();
    const albumId = ctx.params.id;
    const album = await getAlbumById(albumId);
    const user = getUserData();
    const userId = user?.id;
    const isOWner = userId === album._ownerId;
    const count = await getCountLikes(albumId);
    const canLikes = await canUserLikes(albumId, userId);
    ctx.render(detailsTemp(album, user, isOWner, onDelete, onLikes, count, canLikes));

    async function onDelete() {
        const choice = confirm("Are you sure?");
        if(choice) {
            await deleteAlbum(albumId);
            ctx.page.redirect('/catalog');
        } 
    }

    async function onLikes() {
        await likeAlbum(albumId);
        ctx.page.redirect(`/details/${albumId}`);
    }
}

async function canUserLikes(albumId, userId) {
    const res = await getCountUserLikes(albumId, userId);
    if (res >= 1) {
        return false;
    }

    return true;
}