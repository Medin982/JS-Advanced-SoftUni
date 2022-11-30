import { applyItem, canApplyUser, deleteById, getById, getCountApply } from "../api/data.js";
import { getUserData } from "../api/util.js";
import { html, nothing } from "../lib.js";

const detailsTemp = (item, isOwner, user, count, canApply, onDelete, onApply) => html`
<section id="details">
    <div id="details-wrapper">
        <img id="details-img" src=${item.imageUrl} alt="example1" />
        <p id="details-title">${item.title}</p>
        <p id="details-category">
            Category: <span id="categories">${item.category}</span>
        </p>
        <p id="details-salary">
            Salary: <span id="salary-number">${item.salary}</span>
        </p>
        <div id="info-wrapper">
            <div id="details-description">
                <h4>Description</h4>
                <span>${item.description}</span>
            </div>
            <div id="details-requirements">
                <h4>Requirements</h4>
                <span>${item.requirements}</span>
            </div>
        </div>
        <p>Applications: <strong id="applications">${count}</strong></p>
        <div id="action-buttons">
            ${isOwner 
                ? html`<a href="/edit/${item._id}" id="edit-btn">Edit</a>
                 <a @click=${onDelete} href="javascript:void(0)" id="delete-btn">Delete</a>`
              : html`${user 
              ? html`${canApply 
                 ? html `<a @click=${onApply} href="javascript:void(0)" id="apply-btn">Apply</a>`
                 : nothing}` 
              : nothing}`}
        </div>
    </div>
</section>`;

export async function showDetails(ctx) {
    ctx.updateNav();
    const itemId = ctx.params.id;
    const item = await getById(itemId);
    const user = getUserData();
    let userId;
    if (user) {
        userId = user.id;
    }

    let isOwner = userId === item._ownerId;
    const count = await getCountApply(itemId);
    const canApply = await funCanApply(itemId, userId);

    ctx.render(detailsTemp(item, isOwner, user, count, canApply, onDelete, onApply));

 async function onDelete() {
    let choice = confirm("Are you sure to delete this item?");
    if (choice) {
        await deleteById(itemId);
        ctx.page.redirect("/catalog");
    }
 }

 async function onApply() {
    await applyItem(itemId);
    ctx.page.redirect(`/details/${itemId}`);
 }

}

async function funCanApply (itemId, userId)  {
    const res = await canApplyUser(itemId, userId);
    if (res >= 1) {
        return false
    }
     return true;
} 
