import { getById, updateItem } from "../api/data.js";
import { html } from "../lib.js";

const editTemp = (item, onSubmit) => html`
<section id="edit-page" class="auth">
    <form @submit=${onSubmit} id="edit">
        <h1 class="title">Edit Post</h1>

        <article class="input-group">
            <label for="title">Post Title</label>
            <input type="title" name="title" id="title" .value=${item.title}>
        </article>

        <article class="input-group">
            <label for="description">Description of the needs </label>
            <input type="text" name="description" id="description" .value=${item.description}>
        </article>

        <article class="input-group">
            <label for="imageUrl"> Needed materials image </label>
            <input type="text" name="imageUrl" id="imageUrl" .value=${item.imageUrl}>
        </article>

        <article class="input-group">
            <label for="address">Address of the orphanage</label>
            <input type="text" name="address" id="address" .value=${item.address}>
        </article>

        <article class="input-group">
            <label for="phone">Phone number of orphanage employee</label>
            <input type="text" name="phone" id="phone" .value=${item.phone}>
        </article>

        <input type="submit" class="btn submit" value="Edit Post">
    </form>
</section>`;

export async function showEdit(ctx) {
    ctx.updateNav();
    const itemId = ctx.params.id;
    const item = await getById(itemId);
    ctx.render(editTemp(item, onSubmit));

    async function onSubmit(e) {
        e.preventDefault();

        const { title, description, imageUrl,
            address, phone } = Object.fromEntries(new FormData(e.target));

        if (!title || !description || !imageUrl
            || !address || !phone) {
            return alert("Cannot have empty fields!");
        }

        await updateItem(itemId, {
            title, description, imageUrl,
            address, phone
        });

        ctx.page.redirect(`/details/${itemId}`);

    }
}