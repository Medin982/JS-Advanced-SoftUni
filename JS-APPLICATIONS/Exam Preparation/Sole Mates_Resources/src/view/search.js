import { searchByParams } from "../api/data.js";
import { getUserData } from "../api/util.js";
import { html } from "../lib.js";

const searchTemp = (onSubmit, isLogged, items) => html`
<section id="search">
    <h2>Search by Brand</h2>

    <form @submit=${onSubmit} class="search-wrapper cf">
        <input id="#search-input" type="text" name="search" placeholder="Search here..." required />
        <button type="submit">Search</button>
    </form>

    <h3>Results:</h3>

    <div id="search-container">
        ${items ? html`
        <ul class="card-wrapper">
            ${items.map(item => html`
            <li class="card">
                <img src=${item.imageUrl} alt="travis" />
                <p>
                    <strong>Brand: </strong><span class="brand">${item.brand}</span>
                </p>
                <p>
                    <strong>Model: </strong><span class="model">${item.model}</span>
                </p>
                <p><strong>Value:</strong><span class="value">${item.value}</span>$</p>
                ${isLogged ? html`
                <a class="details-btn" href="/details/${item._id}">Details</a>`
        : ""}
            </li>`)}
        </ul>`
        : html`
        <h2>There are no results found.</h2> `}
    </div>
</section>`;

export function showSearch(ctx) {
    ctx.updateNav();
    ctx.render(searchTemp(onSubmit));

    async function onSubmit(e) {
        e.preventDefault();

        const { search } = Object.fromEntries(new FormData(e.target));

        if (!search) {
            return alert('Input are requare!');
        }
        let isLogged = false;
        if (getUserData()) {
            isLogged = true;
        }
        let items = await searchByParams(search);
        if (items.length <= 0) {
            items = undefined;
        }
        ctx.render(searchTemp(onSubmit, isLogged, items))
    }
} 