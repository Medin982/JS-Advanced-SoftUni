import { html } from "../lib.js";
import { editAlbum, getAlbumById } from "../api/data.js";

const editTemp = (album, onSubmit) => html`<section id="edit">
    <div class="form">
        <h2>Edit Album</h2>
        <form @submit=${onSubmit} class="edit-form">
            <input type="text" name="singer" id="album-singer" .value=${album.singer} placeholder="Singer/Band" />
            <input type="text" name="album" id="album-album" .value=${album.album} placeholder="Album" />
            <input type="text" name="imageUrl" id="album-img" .value=${album.imageUrl} placeholder="Image url" />
            <input type="text" name="release" id="album-release" .value=${album.release} placeholder="Release date" />
            <input type="text" name="label" id="album-label" .value=${album.label} placeholder="Label" />
            <input type="text" name="sales" id="album-sales" .value=${album.sales} placeholder="Sales" />

            <button type="submit">post</button>
        </form>
    </div>
</section>`;

export async function showEdit(ctx) {
    ctx.updateNav();
    const albumId = ctx.params.id;
    const album = await getAlbumById(albumId);
    ctx.render(editTemp(album, onSubmit));

    async function onSubmit(e) {
        e.preventDefault();

        const { singer, album, imageUrl,
            release, label, sales } = Object.fromEntries(new FormData(e.target));

        if (!singer || !album || !imageUrl
            || !release || !label || !sales) {
            return alert("Cannot have empty field!");
        }

        const newAlbum = await editAlbum(albumId, {
            singer, album, imageUrl,
            release, label, sales
        });

        ctx.page.redirect(`/details/${albumId}`);
    }
}