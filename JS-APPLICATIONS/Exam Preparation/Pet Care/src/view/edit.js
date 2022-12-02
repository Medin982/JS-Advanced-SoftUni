import { getPetById, editPet } from "../api/data.js";
import { html } from "../lib.js";

const editTemp = (pet, onSubmit) => html`
<section id="editPage">
    <form @submit=${onSubmit} class="editForm">
        <img src="./images/editpage-dog.jpg">
        <div>
            <h2>Edit PetPal</h2>
            <div class="name">
                <label for="name">Name:</label>
                <input name="name" id="name" type="text" .value=${pet.name}>
            </div>
            <div class="breed">
                <label for="breed">Breed:</label>
                <input name="breed" id="breed" type="text" .value=${pet.breed}>
            </div>
            <div class="Age">
                <label for="age">Age:</label>
                <input name="age" id="age" type="text" .value=${pet.age}>
            </div>
            <div class="weight">
                <label for="weight">Weight:</label>
                <input name="weight" id="weight" type="text" .value=${pet.weight}>
            </div>
            <div class="image">
                <label for="image">Image:</label>
                <input name="image" id="image" type="text" .value=${pet.image}>
            </div>
            <button class="btn" type="submit">Edit Pet</button>
        </div>
    </form>
</section>`;

export async function showEdit(ctx) {
    ctx.updateNav();
    const petId = ctx.params.id;
    const pet = await getPetById(petId);
    ctx.render(editTemp(pet, onSubmit));

    async function onSubmit(e) {
        e.preventDefault();

        const { name, breed, age, weight, image } = Object.fromEntries(new FormData(e.target));

        if (!name || !breed || !age || !weight || !image) {
            return alert("Cannot have empty fields!");
        }

        await editPet(petId, { name, breed, age, weight, image });

        ctx.page.redirect(`/details/${petId}`);
    }
}