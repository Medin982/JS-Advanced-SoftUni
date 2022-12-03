import { createAlbum } from "../api/data.js";
import { html } from "../lib.js";

const createTemp = (onSubmit) => html`
<section id="create">
    <div class="form">
        <h2>Add Album</h2>
        <form @submit=${onSubmit} class="create-form">
            <input type="text" name="singer" id="album-singer" placeholder="Singer/Band" />
            <input type="text" name="album" id="album-album" placeholder="Album" />
            <input type="text" name="imageUrl" id="album-img" placeholder="Image url" />
            <input type="text" name="release" id="album-release" placeholder="Release date" />
            <input type="text" name="label" id="album-label" placeholder="Label" />
            <input type="text" name="sales" id="album-sales" placeholder="Sales" />

            <button type="submit">post</button>
        </form>
    </div>
</section>`;

export function showCreate(ctx) {
    ctx.updateNav();
    ctx.render(createTemp(onSubmit));

    async function onSubmit(e) {
        e.preventDefault();

        const { singer, album, imageUrl,
            release, label, sales } = Object.fromEntries(new FormData(e.target));

        if (!singer || !album || !imageUrl
            || !release || !label || !sales) {
            return alert("Cannot have empty field!");
        }

        const newAlbum = await createAlbum({
            singer, album, imageUrl,
            release, label, sales
        });

        ctx.page.redirect("/catalog");
    }
}
