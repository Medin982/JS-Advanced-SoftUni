import { getAll } from "../api/data.js";
import { html } from "../lib.js";

const homeTemp = (items) => html`
<section id="dashboard-page">
    ${items ? html`
    <h1 class="title">All Posts</h1>
    <div class="all-posts">
        ${items.map(item => html`
        <div class="post">
            <h2 class="post-title">${item.title}</h2>
            <img class="post-image" src=${item.imageUrl} alt="Material Image">
            <div class="btn-wrapper">
                <a href="/details/${item._id}" class="details-btn btn">Details</a>
            </div>
        </div>`)}
    </div>`
        : html`<h1 class="title no-posts-title">No posts yet!</h1>`}
</section>`;

export async function showHome(ctx) {
    ctx.updateNav();
    let items = await getAll();
    if (items <= 0) {
        items = undefined
    }
    ctx.render(homeTemp(items));
}