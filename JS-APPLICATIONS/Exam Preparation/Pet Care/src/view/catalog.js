import { getAllPets } from "../api/data.js";
import { html } from "../lib.js";

const catalogTemp = (pets) => html`
<section id="dashboard">
    <h2 class="dashboard-title">Services for every animal</h2>
    <div class="animals-dashboard">
        ${pets 
        ? html`
        ${pets.map(pet =>html`
        <div class="animals-board">
            <article class="service-img">
                <img class="animal-image-cover" src=${pet.image}>
            </article>
            <h2 class="name">${pet.name}</h2>
            <h3 class="breed">${pet.breed}</h3>
            <div class="action">
                <a class="btn" href="/details/${pet._id}">Details</a>
            </div>
        </div>`)}`
        : html`
        <div>
            <p class="no-pets">No pets in dashboard</p>
        </div>`}
    </div>
</section>`;

export async function showCatalog(ctx) {
    ctx.updateNav();
    let pets = await getAllPets();
    if (pets <= 0) {
        pets = undefined;
    }
    
    ctx.render(catalogTemp(pets));
}