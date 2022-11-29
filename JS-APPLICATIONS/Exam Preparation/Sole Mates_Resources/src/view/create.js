import { createItem } from "../api/data.js";
import { html } from "../lib.js";

const createTemp = (onsubmit) => html`
<section id="create">
    <div class="form">
        <h2>Add item</h2>
        <form @submit=${onsubmit} class="create-form">
            <input type="text" name="brand" id="shoe-brand" placeholder="Brand" />
            <input type="text" name="model" id="shoe-model" placeholder="Model" />
            <input type="text" name="imageUrl" id="shoe-img" placeholder="Image url" />
            <input type="text" name="release" id="shoe-release" placeholder="Release date" />
            <input type="text" name="designer" id="shoe-designer" placeholder="Designer" />
            <input type="text" name="value" id="shoe-value" placeholder="Value" />

            <button type="submit">post</button>
        </form>
    </div>
</section>`;

export function showCreate(ctx) {
    ctx.updateNav();
    ctx.render(createTemp(onsubmit));

    async function onsubmit(e) {
        e.preventDefault();

        const { brand, model, imageUrl,
            release, designer, value } = Object.fromEntries(new FormData(e.target));

        if (!brand || !model || !imageUrl ||
            !release || !designer || !value) {
            return alert('Fiels are requared!');
        }

        const item = await createItem({
            brand, model, imageUrl,
            release, designer, value
        });

        ctx.page.redirect('/catalog');
    }
}

