import { editItem, getById } from "../api/data.js";
import { html } from "../lib.js";

const editTemp = (item, onSubmit) => html`
<section id="edit">
    <div class="form">
        <h2>Edit Offer</h2>
        <form @submit=${onSubmit} class="edit-form">
            <input type="text" name="title" id="job-title" placeholder="Title" .value=${item.title} />
            <input type="text" name="imageUrl" id="job-logo" placeholder="Company logo url" .value=${item.imageUrl} />
            <input type="text" name="category" id="job-category" placeholder="Category" .value=${item.category} />
            <textarea id="job-description" name="description" placeholder="Description" .value=${item.description}
                rows="4" cols="50"></textarea>
            <textarea id="job-requirements" name="requirements" placeholder="Requirements" rows="4"
                .value=${item.requirements} cols="50"></textarea>
            <input type="text" name="salary" id="job-salary" placeholder="Salary" .value=${item.salary} />
            <button type="submit">post</button>
        </form>
    </div>
</section>`;

export async function showEdit(ctx) {
    ctx.updateNav();
    const itemId = ctx.params.id;
    const item = await getById(itemId);
    ctx.render(editTemp(item, onSubmit));

    async function onSubmit(e) {
        e.preventDefault();

        const { title, imageUrl, category,
            description, requirements, salary } = Object.fromEntries(new FormData(e.target));

        if (!title || !imageUrl || !category || !description
            || !requirements || !salary) {
            return alert('Cannot have empty field!');
        }

        const item = await editItem(itemId,
            {
                title, imageUrl, category,
                description, requirements, salary
            });

        ctx.page.redirect(`/details/${itemId}`);
    }
}