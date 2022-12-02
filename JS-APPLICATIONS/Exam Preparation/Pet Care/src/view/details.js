import { deletePet, getCountDonate, getPetById, getUserCountDonate, sendDonate } from "../api/data.js";
import { getUserData } from "../api/util.js";
import { html, nothing } from "../lib.js";

const detailsTemp = (pet, user, isOwner, onDelete, count, canDonate, onDonate) => html`
<section id="detailsPage">
    <div class="details">
        <div class="animalPic">
            <img src=${pet.image}>
        </div>
        <div>
            <div class="animalInfo">
                <h1>Name: ${pet.name}</h1>
                <h3>Breed: ${pet.breed}</h3>
                <h4>Age: ${pet.age}</h4>
                <h4>Weight: ${pet.weight}</h4>
                <h4 class="donation">Donation: ${count ? count + "00$" : "0$"}</h4>
            </div>
            ${user
            ? html`
                <div class="actionBtn">
                    ${isOwner 
                    ? html`
                     <a href="/edit/${pet._id}" class="edit">Edit</a>
                     <a @click=${onDelete} href="javascript:void(0)" class="remove">Delete</a>`
                    : html`
                     ${canDonate 
                        ? html`
                        <a @click=${onDonate} href="javascript:void(0)" class="donate">Donate</a>`
                        : nothing}`}
                </div>`
            : nothing}
        </div>
    </div>
</section>`;

export async function showDetails(ctx) {
    ctx.updateNav();
    const petId = ctx.params.id;
    const pet = await getPetById(petId);
    const user = getUserData();
    const userId = user?.id;
    const isOwner = userId === pet._ownerId;
    const count  = await getCountDonate(petId);
    const canDonate = await canUserDonate(petId, userId);

    ctx.render(detailsTemp(pet, user, isOwner, onDelete, count, canDonate, onDonate));

    async function onDelete() {
        const choice = confirm("Are you sure?");
        if (choice) {
            await deletePet(petId);
            ctx.page.redirect("/");
        }
    }

    async function onDonate() {
        await sendDonate(petId);
        ctx.page.redirect(`/details/${petId}`);
    }
}

async function canUserDonate(petId, userId) {
    const donate = await getUserCountDonate(petId, userId);

    if (donate >= 1) {
        return false;
    }
    
    return true;
}