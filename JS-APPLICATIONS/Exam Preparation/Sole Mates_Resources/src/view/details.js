import { deletItem, getItemById } from "../api/data.js";
import { getUserData } from "../api/util.js";
import { html } from "../lib.js";

const detailsTemp = (item, isOwner, remove) => html`
<section id="details">
    <div id="details-wrapper">
        <p id="details-title">Shoe Details</p>
        <div id="img-wrapper">
            <img src=${item.imageUrl} alt="example1" />
        </div>
        <div id="info-wrapper">
            <p>Brand: <span id="details-brand">${item.brand}</span></p>
            <p>
                Model: <span id="details-model">${item.model}</span>
            </p>
            <p>Release date: <span id="details-release">${item.release}</span></p>
            <p>Designer: <span id="details-designer">${item.designer}</span></p>
            <p>Value: <span id="details-value">${item.value}</span></p>
        </div>

        <!--Edit and Delete are only for creator-->
        ${isOwner 
        ? html`
        <div id="action-buttons">
            <a href="/edit/${item._id}" id="edit-btn">Edit</a>
            <a @click=${remove} href="javascript:void(0)" id="delete-btn">Delete</a>
        </div>`
        : ''};
    </div>
</section>`;

export async function showDetails(ctx) {
    ctx.updateNav();
    const itemId = ctx.params.id;
    const user = getUserData();
    let userId = undefined;
    if (user) {
        userId = user.id;
    }
    const item = await getItemById(itemId);
    const isOwner = userId === item._ownerId;
    ctx.render(detailsTemp(item, isOwner, remove));

    async function remove() {
        const choice = confirm("Are you sure to delete this item?");
        if (choice) {
            await deletItem(itemId);
            ctx.page.redirect('/catalog');
        }
    }
}