import { editItem, getItemById } from "../api/data.js";
import { html } from "../lib.js";

const editTemp = (item, onsubmit) => html`
<section id="edit">
    <div class="form">
        <h2>Edit item</h2>
        <form @submit=${onsubmit} class="edit-form">
            <input type="text" name="brand" id="shoe-brand"
             placeholder="Brand" .value=${item.brand} />
            <input type="text" name="model" id="shoe-model"
             placeholder="Model" .value=${item.model} />
            <input type="text" name="imageUrl" id="shoe-img"
             placeholder="Image url" .value=${item.imageUrl} />
            <input type="text" name="release" id="shoe-release"
             placeholder="Release date" .value=${item.release} />
            <input type="text" name="designer" id="shoe-designer"
             placeholder="Designer" .value=${item.designer} />
            <input type="text" name="value" id="shoe-value"
             placeholder="Value" .value=${item.value} />

            <button type="submit">post</button>
        </form>
    </div>
</section>`;

export async function showEdit(ctx) {
    ctx.updateNav();
    const itemId = ctx.params.id;
    const item = await getItemById(itemId);
    ctx.render(editTemp(item, onsubmit));

    async function onsubmit(e) {
        e.preventDefault();

        const { brand, model, imageUrl,
            release, designer, value } = Object.fromEntries(new FormData(e.target));

        if (!brand || !model || !imageUrl ||
            !release || !designer || !value) {
            return alert('Fiels are requared!');
        }

        const item = await editItem(itemId, {
            brand, model, imageUrl,
            release, designer, value
        });

        ctx.page.redirect(`/details/${itemId}`);
    }
}