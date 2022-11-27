import { html } from "../../node_modules/lit-html/lit-html.js";
import { createFurniture } from "../api/data.js";

let context;
export function showCreateView(ctx) {
    context = ctx;
    ctx.updateNav();
    ctx.render(loadCreateTemp());
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
        return context.render(loadCreateTemp(validate));
    }

    const furniture = await createFurniture({
        make, model, year, description,
        price, img, material
    });

    context.page.redirect('/');

}

function loadCreateTemp(status = {}) {
    return html`
    <div class="row space-top">
        <div class="col-md-12">
            <h1>Create New Furniture</h1>
            <p>Please fill all fields.</p>
        </div>
    </div>
    <form @submit=${onSubmit}>
        <div class="row space-top">
            <div class="col-md-4">
                <div class="form-group">
                    <label class="form-control-label" for="new-make">Make</label>
                    <input class="form-control ${status.hasMake}" id="new-make" type="text" name="make">
                </div>
                <div class="form-group has-success">
                    <label class="form-control-label" for="new-model">Model</label>
                    <input class="form-control ${status.hasModel}" id="new-model" type="text" name="model">
                </div>
                <div class="form-group has-danger">
                    <label class="form-control-label" for="new-year">Year</label>
                    <input class="form-control ${status.hasYear}" id="new-year" type="number" name="year">
                </div>
                <div class="form-group">
                    <label class="form-control-label" for="new-description">Description</label>
                    <input class="form-control ${status.hasDescription}" id="new-description" type="text"
                        name="description">
                </div>
            </div>
            <div class="col-md-4">
                <div class="form-group">
                    <label class="form-control-label" for="new-price">Price</label>
                    <input class="form-control ${status.hasPrice}" id="new-price" type="number" name="price">
                </div>
                <div class="form-group">
                    <label class="form-control-label" for="new-image">Image</label>
                    <input class="form-control ${status.hasImg}" id="new-image" type="text" name="img">
                </div>
                <div class="form-group">
                    <label class="form-control-label" for="new-material">Material (optional)</label>
                    <input class="form-control" id="new-material" type="text" name="material">
                </div>
                <input type="submit" class="btn btn-primary" value="Create" />
            </div>
        </div>
    </form>`;
}

export function validateInput(inputs, validate) {
    let hasInvalid = false;
    
    if (!inputs.make || inputs.make.length < 4) {
        validate['hasMake'] = 'is-invalid';
        hasInvalid = true;
    }

    if (!inputs.model || inputs.model.length < 4) {
        validate['hasModel'] = 'is-invalid';
        hasInvalid = true;
    }

    if (!inputs.year || Number(inputs.year) < 1950 || Number(inputs.year) > 2050) {
        validate['hasYear'] = 'is-invalid';
        hasInvalid = true;
    }

    if (!inputs.description || inputs.description.length < 10) {
        validate['hasDescription'] = 'is-invalid';
        hasInvalid = true;
    }

    if (!inputs.price || Number(inputs.price) < 0) {
        validate['hasPrice'] = 'is-invalid';
        hasInvalid = true;
    }

    if (!inputs.img) {
        validate['hasImg'] = 'is-invalid';
        hasInvalid = true;
    }

    return hasInvalid;
}