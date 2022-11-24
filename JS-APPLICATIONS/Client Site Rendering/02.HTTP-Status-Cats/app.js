import { html, render } from "../node_modules/lit-html/lit-html.js";
import { cats } from "./catSeeder.js";

const roter = document.getElementById('allCats');

const createList = html`
    <ul>
        ${cats.map(cat => createCatCards(cat))}
    </ul>`;

render(createList, roter);

function createCatCards(cat) {
    return html` 
    <li>
        <img src='./images/${cat.imageLocation}.jpg' width="250" height="250" alt="Card image cap">
        <div class="info">
            <button @click=${showOrHide} class="showBtn">Show status code</button>
            <div class="status" style="display: none" id=${cat.id}>
                <h4>Status Code: ${cat.statusCode}</h4>
                <p>${cat.statusMessage}</p>
            </div>
        </div>
    </li>`;
}

function showOrHide(e) {
    const content = e.target.parentElement.querySelector('div');
    const status = content.style.display;
    if (status === 'none') {
        content.style.display = 'block';
        e.target.textContent = 'Hide status code';
    } else {
        content.style.display = 'none';
        e.target.textContent = 'Show status code';
    }
}