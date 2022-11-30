import { createItem } from "../api/data.js";
import { html } from "../lib.js";

const createTemp = (onSubmit) => html`
<section id="create">
    <div class="form">
        <h2>Create Offer</h2>
        <form @submit=${onSubmit} class="create-form">
            <input type="text" name="title" id="job-title" placeholder="Title" />
            <input type="text" name="imageUrl" id="job-logo" placeholder="Company logo url" />
            <input type="text" name="category" id="job-category" placeholder="Category" />
            <textarea id="job-description" name="description" placeholder="Description" rows="4" cols="50"></textarea>
            <textarea id="job-requirements" name="requirements" placeholder="Requirements" rows="4"
                cols="50"></textarea>
            <input type="text" name="salary" id="job-salary" placeholder="Salary" />

            <button type="submit">post</button>
        </form>
    </div>
</section>`;

export function showCreate(ctx) {
    ctx.updateNav();
    ctx.render(createTemp(onSubmit));

    async function onSubmit(e) {
        e.preventDefault();

        const { title, imageUrl, category,
            description, requirements, salary } = Object.fromEntries(new FormData(e.target));

        if (!title || !imageUrl || !category || !description
            || !requirements || !salary) {
            return alert('Cannot have empty field!');
        }

        const item = await createItem({
            title, imageUrl, category,
            description, requirements, salary
        });

        ctx.page.redirect("/catalog");
    }
}