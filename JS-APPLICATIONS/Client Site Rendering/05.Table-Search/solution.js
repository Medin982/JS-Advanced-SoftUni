import { html, render } from '../node_modules/lit-html/lit-html.js';


solve();

function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   async function onClick() {
      const input = document.getElementById('searchField');
      const text = input.value.toLowerCase();
      const response = await fetch('http://localhost:3030/jsonstore/advanced/table');
      const data = await response.json();
      const dataArr = Object.values(data);

      render(createTable(dataArr, text ? text : undefined), document.querySelector('tbody'));
      input.value = '';
   }

   function createTable(dataArr, match) {
      return html`
      ${dataArr.map(d => html`
      <tr class=${matchText(d, match) ? 'select' : ''}>
         <td>${d.firstName + ' ' + d.lastName}</td>
         <td> ${d.email} </td>
         <td>${d.course}</td>
      </tr>`)}`;
   }

   function matchText(data, match) {
      if (data.firstName.toLowerCase().startsWith(match) ||
         data.lastName.toLowerCase().startsWith(match) ||
         data.email.toLowerCase().startsWith(match) ||
         data.course.toLowerCase().startsWith(match)) {

         return true;
      }

      return false;
   }
}