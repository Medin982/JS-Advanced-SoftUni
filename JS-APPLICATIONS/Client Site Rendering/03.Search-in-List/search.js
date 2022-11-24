import { html, render } from "../node_modules/lit-html/lit-html.js"
import { towns } from "./towns.js";

document.querySelector('button').addEventListener('click', search);
const townsEle = document.getElementById('towns');

update();

function townsList(town, match) {
   return html`
   <ul>
      ${town.map(t => html`
      <li class=${t.toLowerCase().includes(match) ? 'active' : ''}>${t}</li>`)}
   </ul>`;
}

function update(match) {
   const res = townsList(towns, match);
   render(res, townsEle);
   const count = document.getElementsByClassName('active').length;
   const countMatches = document.getElementById('result');
    render(html`<p>${count} matches found</p>`, countMatches);
}

function search() {
   const text = document.getElementById('searchText');
   update(text.value.toLowerCase());
   text.value = '';
}

