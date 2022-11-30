import { getAllItems } from "../api/data.js";
import { html } from "../lib.js";

const catalogTemp = (items) => html`
<section id="dashboard">
    <h2>Job Offers</h2>
    ${items ? html`
    <!-- Display a div with information about every post (if any)-->
    ${items.map(item => html`
    <div class="offer">
        <img src=${item.imageUrl} alt="example1" />
        <p>
            <strong>Title: </strong><span class="title">${item.title}</span>
        </p>
        <p><strong>Salary:</strong><span class="salary">${item.salary}</span></p>
        <a class="details-btn" href="/details/${item._id}">Details</a>
    </div>`)}`
       : html`
    <!-- Display an h2 if there are no posts -->
    <h2>No offers yet.</h2>`}
</section>`;

export async function showCatalog(ctx) {
    ctx.updateNav();
    let items = await getAllItems();
    if (items <= 0) {
        items = undefined;
    }
    ctx.render(catalogTemp(items));
}