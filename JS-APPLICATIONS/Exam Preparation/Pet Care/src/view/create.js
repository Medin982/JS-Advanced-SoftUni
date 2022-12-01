import { html } from "../lib.js";
import { createPet } from "../api/data.js";

const createTemp = (onSubmit) => html`
<section id="createPage">
    <form @submit=${onSubmit} class="createForm">
        <img src="./images/cat-create.jpg">
        <div>
            <h2>Create PetPal</h2>
            <div class="name">
                <label for="name">Name:</label>
                <input name="name" id="name" type="text" placeholder="Max">
            </div>
            <div class="breed">
                <label for="breed">Breed:</label>
                <input name="breed" id="breed" type="text" placeholder="Shiba Inu">
            </div>
            <div class="Age">
                <label for="age">Age:</label>
                <input name="age" id="age" type="text" placeholder="2 years">
            </div>
            <div class="weight">
                <label for="weight">Weight:</label>
                <input name="weight" id="weight" type="text" placeholder="5kg">
            </div>
            <div class="image">
                <label for="image">Image:</label>
                <input name="image" id="image" type="text" placeholder="./image/dog.jpeg">
            </div>
            <button class="btn" type="submit">Create Pet</button>
        </div>
    </form>
</section>`;

export function showCreate(ctx) {
    ctx.updateNav();
    ctx.render(createTemp(onSubmit));

    async function onSubmit(e) {
        e.preventDefault();

        const { name, breed, age, weight, image } = Object.fromEntries(new FormData(e.target));

        if (!name || !breed || !age || !weight || !image) {
            return alert("Cannot have empty fields!");
        }

        await createPet({ name, breed, age, weight, image });

        ctx.page.redirect("/");
    }
}