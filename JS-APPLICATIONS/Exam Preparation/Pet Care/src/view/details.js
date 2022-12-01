import { getPetById } from "../api/data.js";
import { getUserData } from "../api/util.js";
import { html, nothing } from "../lib.js";

const detailsTemp = (pet, user, isOwner, onDelete) => html`
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
                <h4 class="donation">Donation: 0$</h4>
            </div>
            ${user
            ? html`
                <div class="actionBtn">
                    ${isOwner 
                    ? html`
                     <a href="/edit/${pet._id}" class="edit">Edit</a>
                     <a href="javascript:void(0)" class="remove">Delete</a>`
                    : html`
                     <a href="#" class="donate">Donate</a>`}
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

    ctx.render(detailsTemp(pet, user, isOwner));
}