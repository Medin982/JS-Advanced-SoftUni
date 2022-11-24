import { html, render } from '../node_modules/lit-html/lit-html.js';

const menu = document.getElementById('menu');
const form = document.querySelector('form');
form.addEventListener('submit', addItem);

getItems();
async function getItems() {
    const response = await fetch('http://localhost:3030/jsonstore/advanced/dropdown');
    const data = await response.json();
    const result = Object.values(data).map(i => createOption(i));
    render(result, menu);
};

function createOption(item) {
    return html`
    <option value=${item._id}>${item.text}</option>`;
}

async function addItem(e) {
    e.preventDefault();
    const text = document.getElementById('itemText').value;
    if (!text) {
        return;
    }

    const response = await fetch('http://localhost:3030/jsonstore/advanced/dropdown', {
        method: 'POST',
        headers: {'Content-Type': 'applocation/json'},
        body: JSON.stringify({'text': text})
    });
    form.reset();
    getItems();
}