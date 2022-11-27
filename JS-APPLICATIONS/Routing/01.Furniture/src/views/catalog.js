import { html } from "../../node_modules/lit-html/lit-html.js";
import { allFurniture } from "../api/data.js";


export async function showCatalog(ctx) {
    ctx.updateNav();
    const furtunites = await allFurniture();
    ctx.render(loadCatalogTemp(furtunites));
}

function loadCatalogTemp(items) {
    return html`
    <div class="row space-top">
        <div class="col-md-12">
            <h1>Welcome to Furniture System</h1>
            <p>Select furniture from the catalog to view details.</p>
        </div>
    </div>
    <div class="row space-top">
        ${items.map(i => html`
        <div class="col-md-4">
            <div class="card text-white bg-primary">
                <div class="card-body">
                    <img src='../.${i.img}' />
                    <p>${i.description}</p>
                    <footer>
                        <p>Price: <span>${i.price} $</span></p>
                    </footer>
                    <div>
                        <a href="/details/${i._id}" class="btn btn-info">Details</a>
                    </div>
                </div>
            </div>
        </div>
    </div>`)}`;
}