import { deleteItem, donate, getById, getCountDonate, getUserCountDonate } from "../api/data.js";
import { getUserData } from "../api/util.js";
import { html, nothing } from "../lib.js";

const detailsTemp = (item, isOwner, user, onDelete, canDonate, onDonate, count) => html`
<section id="details-page">
    <h1 class="title">Post Details</h1>

    <div id="container">
        <div id="details">
            <div class="image-wrapper">
                <img src=${item.imageUrl} alt="Material Image" class="post-image">
            </div>
            <div class="info">
                <h2 class="title post-title">${item.title}</h2>
                <p class="post-description">Description: ${item.description}</p>
                <p class="post-address">Address: ${item.address}</p>
                <p class="post-number">Phone number: ${item.phone}</p>
                <p class="donate-Item">Donate Materials: ${count}</p>
                <div class="btns">
                    ${isOwner 
                    ? html`
                        <a href="/edit/${item._id}" class="edit-btn btn">Edit</a>
                        <a @click=${onDelete} href="javascript:void(0)" class="delete-btn btn">Delete</a>`
                    : html`${user 
                        ? html`${canDonate
                            	? html`<a @click=${onDonate} href="javascript:void(0)" class="donate-btn btn">Donate</a>`
                                : nothing}`
                        : nothing}`}
                </div>
            </div>
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
    let count = await getCountDonate(itemId);
    let canDonateUser = await canDonate(itemId, userId);
    ctx.render(detailsTemp(item, isOwner, user, onDelete, canDonateUser, onDonate, count));

    async function onDelete() {
        let choice = confirm("Are you sure to delete this item?");
        if (choice) {
            await deleteItem(itemId);
            ctx.page.redirect("/");
        }
    }

    async function onDonate() {
        await donate(itemId);
        ctx.page.redirect(`/details/${itemId}`);
    }
}

async function canDonate(itemId, userId) {
    if (await getUserCountDonate(itemId, userId) >= 1) {
        return false;
    }

    return true;
}