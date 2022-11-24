import { html, render } from "../node_modules/lit-html/lit-html.js";

const form = document.querySelector('form');
form.addEventListener('submit', onsubmit);
const roter = document.getElementById('root');

function onsubmit(e) {
    e.preventDefault();

    const {towns} = Object.fromEntries(new FormData(e.target));
    const townsArr = towns.split(', ');
    const result = createTownsList(townsArr);
    render(result, roter);
    form.reset();
}

function createTownsList(data) {
    return html `
    <ul>
        ${data.map(ele => html`<li>${ele}</li>`)}
    </ul>`;
}