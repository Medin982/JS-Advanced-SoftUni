import { html } from "../../node_modules/lit-html/lit-html.js";
import { getFurniture, updateFurniture } from "../api/data.js";
import { validateInput } from "./create.js";

let context;
let furnitureId;
export async function showEditView(ctx) {
    context = ctx;
    furnitureId = ctx.params.id;
    const furniture = await getFurniture(furnitureId);
    ctx.updateNav();
    ctx.render(loadEditTemp(furniture));

}

async function onSubmit(e) {
    e.preventDefault();

    const { make, model, year, description,
        price, img, material } = Object.fromEntries(new FormData(e.target));

    const validate = {
        'hasMake': 'is-valid',
        'hasModel': 'is-valid',
        'hasYear': 'is-valid',
        'hasDescription': 'is-valid',
        'hasPrice': 'is-valid',
        'hasImg': 'is-valid',
    }

    let hasInvalid = validateInput({
        make, model, year, description,
        price, img, material
    }, validate);

    if (hasInvalid) {
        return context.render(loadEditTemp({
            make, model, year, description,
            price, img, material
        }, validate))
    }

    await updateFurniture(furnitureId, {
        make, model, year, description,
        price, img, material
    });
    context.page.redirect('/');
}

function loadEditTemp(furniture, status = {}) {
    return html`
    <div class="row space-top">
        <div class="col-md-12">
            <h1>Edit Furniture</h1>
            <p>Please fill all fields.</p>
        </div>
    </div>
    <form @submit=${onSubmit}>
        <div class="row space-top">
            <div class="col-md-4">
                <div class="form-group">
                    <label class="form-control-label" for="new-make">Make</label>
                    <input class="form-control ${status.hasMake}" id="new-make" type="text" name="make"
                        .value=${furniture.make}>
                </div>
                <div class="form-group has-success">
                    <label class="form-control-label" for="new-model">Model</label>
                    <input class="form-control ${status.hasModel}" id="new-model" type="text" name="model"
                        .value=${furniture.model}>
                </div>
                <div class="form-group has-danger">
                    <label class="form-control-label" for="new-year">Year</label>
                    <input class="form-control ${status.hasYear}" id="new-year" type="number" name="year"
                        .value=${furniture.year}>
                </div>
                <div class="form-group">
                    <label class="form-control-label" for="new-description">Description</label>
                    <input class="form-control ${status.hasDescription}" id="new-description" type="text" name="description"
                        .value=${furniture.description}>
                </div>
            </div>
            <div class="col-md-4">
                <div class="form-group">
                    <label class="form-control-label" for="new-price">Price</label>
                    <input class="form-control ${status.hasPrice}" id="new-price" type="number" name="price"
                        .value=${furniture.price}>
                </div>
                <div class="form-group">
                    <label class="form-control-label" for="new-image">Image</label>
                    <input class="form-control ${status.hasImg}" id="new-image" type="text" name="img"
                        .value="${furniture.img}">
                </div>
                <div class="form-group">
                    <label class="form-control-label" for="new-material">Material (optional)</label>
                    <input class="form-control" id="new-material" type="text" name="material" .value=${furniture.material}>
                </div>
                <input type="submit" class="btn btn-info" value="Edit" />
            </div>
        </div>
    </form>`;
}