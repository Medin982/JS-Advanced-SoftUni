import { getAllAlbums } from "../api/data.js";
import { html } from "../lib.js";

const catalogTemp = (albums) => html`
<section id="dashboard">
    <h2>Albums</h2>
    ${albums
    ? html`
    <ul class="card-wrapper">
        ${albums.map(album => html`
        <li class="card">
            <img src=${album.imageUrl} alt="travis" />
            <p>
                <strong>Singer/Band: </strong><span class="singer">${album.singer}</span>
            </p>
            <p>
                <strong>Album name: </strong><span class="album">${album.album}</span>
            </p>
            <p><strong>Sales:</strong><span class="sales">${album.sales}</span></p>
            <a class="details-btn" href="/details/${album._id}">Details</a>
        </li>`)}
    </ul>`
    : html`<h2>There are no albums added yet.</h2>`}
</section>`;

export async function showCatalog(ctx) {
    ctx.updateNav();
    let albums = await getAllAlbums();
    if (albums <= 0) {
        albums = undefined;
    }
    ctx.render(catalogTemp(albums));
}