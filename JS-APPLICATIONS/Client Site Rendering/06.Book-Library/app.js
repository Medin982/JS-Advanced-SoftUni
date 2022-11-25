import { html, render } from '../node_modules/lit-html/lit-html.js';

const body = document.getElementsByTagName('body')[0];

update();

function loadPage() { 
    return html`
    <button id="loadBooks" @click=${showBooks}>LOAD ALL BOOKS</button>
    <table>
        <thead>
            <tr>
                <th>Title</th>
                <th>Author</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody>
    
        </tbody>
    </table>
    
    <form id="add-form">
        <h3>Add book</h3>
        <label>TITLE</label>
        <input type="text" name="title" placeholder="Title...">
        <label>AUTHOR</label>
        <input type="text" name="author" placeholder="Author...">
        <input type="submit" value="Submit">
    </form>`;
}

function update() {
    render(loadPage(), body);
}

async function showBooks() {
    const data = await getBooks();
    
}

function loadBooks(books) {
    return html`
    `
}

async function getBooks() {
    const response = await fetch(' http://localhost:3030/jsonstore/collections/books');
    const data = await response.json();
}
