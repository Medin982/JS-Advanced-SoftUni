import { getallItems } from "../api/data.js";
import { html } from "../lib.js";

const catalogTemp = (data) => html`
<section id="dashboard">
  ${data ? html`
  <!-- Display a li with information about every post (if any)-->
  <h2>Collectibles</h2>
  <ul class="card-wrapper">
    ${data.map(item => html`
    <li class="card">
      <img src=${item.imageUrl} alt="travis" />
      <p>
        <strong>Brand: </strong><span class="brand">${item.brand}</span>
      </p>
      <p>
        <strong>Model: </strong><span class="model">${item.model}</span>
      </p>
      <p><strong>Value:</strong><span class="value">${item.value}</span>$</p>
      <a class="details-btn" href="/details/${item._id}">Details</a>
    </li>`)}
  </ul>`
    : html`
  <!-- Display an h2 if there are no posts -->
  <h2>There are no items added yet.</h2>`}


</section>`;

export async function showDashboard(ctx) {
  ctx.updateNav();
  let data = await getallItems();
  if (data.length <= 0) {
    data = undefined;
  }
  ctx.render(catalogTemp(data));
}