import { html } from "../../node_modules/lit-html/lit-html.js";
import { deleteFurniture, getFurniture } from "../api/data.js";

let furnitureId;
let context;
export async function showDetailsView(ctx) {
    furnitureId = ctx.params.id;
    context = ctx.page;
    const furniture = await getFurniture(furnitureId);
    const userId = JSON.parse(sessionStorage.getItem('userData'))._id;
    const isOwner = userId === furniture._ownerId;
    ctx.updateNav();
    ctx.render(loadDetailFurnitureTemp(furniture, isOwner));
    
}

async function deleteItem(e) {
    e.preventDefault();
    confirm('Are you sure to delete item?');
   await deleteFurniture(furnitureId);
   context.redirect('/');
}

function loadDetailFurnitureTemp(furniture, isOwner) {
    return html`
    <div class="row space-top">
            <div class="col-md-12">
                <h1>Furniture Details</h1>
            </div>
        </div>
        <div class="row space-top">
            <div class="col-md-4">
                <div class="card text-white bg-primary">
                    <div class="card-body">
                        <img src="../.${furniture.img}" />
                    </div>
                </div>
            </div>
            <div class="col-md-4">
                <p>Make: <span>${furniture.make}</span></p>
                <p>Model: <span>${furniture.model}</span></p>
                <p>Year: <span>${furniture.year}</span></p>
                <p>Description: <span>${furniture.description}</span></p>
                <p>Price: <span>${furniture.price}</span></p>
                <p>Material: <span>${furniture.material}</span></p>
                ${isOwner 
                ? html`
                <div>
                    <a href="/edit/${furniture._id}" class="btn btn-info">Edit</a>
                    <a @click=${deleteItem} href="javascript:void(0)" class="btn btn-red">Delete</a>
                </div>`
                : ""}
            </div>
        </div>`;
}