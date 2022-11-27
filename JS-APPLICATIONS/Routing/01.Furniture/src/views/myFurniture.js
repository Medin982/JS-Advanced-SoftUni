import { html } from "../../node_modules/lit-html/lit-html.js";
import { getMyFurniture } from "../api/data.js";


export async function showMyFurnitureView(ctx) {
    ctx.updateNav();
    const userId = JSON.parse(sessionStorage.getItem('userData'))._id;
    const furnitures = await getMyFurniture(userId);
    ctx.render(loadMyFurnitureTemp(furnitures));
}

function loadMyFurnitureTemp(furnitures) {
    return html`
    <div class="row space-top">
            <div class="col-md-12">
                <h1>My Furniture</h1>
                <p>This is a list of your publications.</p>
            </div>
        </div>
        <div class="row space-top">
            ${furnitures.map(f => html`
            <div class="col-md-4">
                <div class="card text-white bg-primary">
                    <div class="card-body">
                            <img src="./.${f.img}" />
                            <p>${f.description}</p>
                            <footer>
                                <p>Price: <span>${f.price} $</span></p>
                            </footer>
                            <div>
                                <a href="/details/${f._id}" class="btn btn-info">Details</a>
                            </div>
                    </div>
                </div>
            </div>`)}
        </div>`;
}