import { html } from "../../node_modules/lit-html/lit-html.js";

let context;
export function showCreateView(ctx) {
    context = ctx.page;
    ctx.updataNav();
    ctx.render(loadCreateTemp());
}

function onSubmit(e) {
    e.preventDefault();

    const { make, model, year, description,
        price, img, material } = Object.fromEntries(new FormData(e.target));
    let hasInvalid = false;
    const validate = {
        'hasMake': 'is-valid',
        'hasModel': 'is-valid',
        'hasYear': 'is-valid',
        'hasDescription': 'is-valid',
        'hasPrice': 'is-valid',
        'hasImg': 'is-valid',
    }

    if (!make || make.length < 4) {
        validate['hasMkae'] = 'is-invalid';
        hasInvalid = true;
    }

   


}

function loadCreateTemp() {
    return html`
    <div class="row space-top">
        <div class="col-md-12">
            <h1>Create New Furniture</h1>
            <p>Please fill all fields.</p>
        </div>
    </div>
    <form @click=${onSubmit}>
        <div class="row space-top">
            <div class="col-md-4">
                <div class="form-group">
                    <label class="form-control-label" for="new-make">Make</label>
                    <input class="form-control valid" id="new-make" type="text" name="make">
                </div>
                <div class="form-group has-success">
                    <label class="form-control-label" for="new-model">Model</label>
                    <input class="form-control is-valid" id="new-model" type="text" name="model">
                </div>
                <div class="form-group has-danger">
                    <label class="form-control-label" for="new-year">Year</label>
                    <input class="form-control is-invalid" id="new-year" type="number" name="year">
                </div>
                <div class="form-group">
                    <label class="form-control-label" for="new-description">Description</label>
                    <input class="form-control" id="new-description" type="text" name="description">
                </div>
            </div>
            <div class="col-md-4">
                <div class="form-group">
                    <label class="form-control-label" for="new-price">Price</label>
                    <input class="form-control" id="new-price" type="number" name="price">
                </div>
                <div class="form-group">
                    <label class="form-control-label" for="new-image">Image</label>
                    <input class="form-control" id="new-image" type="text" name="img">
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