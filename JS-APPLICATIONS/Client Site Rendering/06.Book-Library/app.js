import { html, render } from '../node_modules/lit-html/lit-html.js';

const body = document.getElementsByTagName('body')[0];

function loadPage() {
    return html`
    <button id="loadBooks" @click=${update}>LOAD ALL BOOKS</button>
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
    
    <form id="add-form" @submit=${onSubmit}>
        <h3>Add book</h3>
        <label>TITLE</label>
        <input type="text" name="title" placeholder="Title...">
        <label>AUTHOR</label>
        <input type="text" name="author" placeholder="Author...">
        <input type="submit" value="Submit">
    </form>`;
}
render(loadPage(), body);

async function update() {
    const data = await getBooks();
    const result = loadBooks(data);
    render(result, document.querySelector('tbody'));
}

function onSubmit(e) {
    e.preventDefault();
    const { title, author } = Object.fromEntries(new FormData(e.target));

    if (!title || !author) {
        return;
    }

    addBook({ title, author });
    e.target.reset();
}

async function addBook(data) {
    const response = await fetch('http://localhost:3030/jsonstore/collections/books', {
        method: 'POST',
        headers: { 'Content-Type': 'application.json' },
        body: JSON.stringify(data)
    });

    update();
}

function loadBooks(books) {
    return html`
    ${books.map(book => html`
    <tr>
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>
            <button data-id=${book._id} @click=${editBook}>Edit</button>
            <button data-id=${book._id} @click=${deleteBook}>Delete</button>
        </td>
    </tr>`)}`;
}

async function deleteBook(e) {
    const bookId = e.target.dataset.id;
    const response = await fetch(`http://localhost:3030/jsonstore/collections/books/${bookId}`, {
        method: 'DELETE'
        //Now work, but for better we need to add authorization.
    });
    update();
}

async function editBook(e) {
    const bookId = e.target.dataset.id;
    const response = await fetch(`http://localhost:3030/jsonstore/collections/books/${bookId}`);
    const book = await response.json();

    loadEditForm(book);
}

function loadEditForm(book) {
    const editForm = html`
    <form id="edit-form">
        <input type="hidden" name="id">
        <h3>Edit book</h3>
        <label>TITLE</label>
        <input type="text" name="title" value=${book.title} placeholder="Title...">
        <label>AUTHOR</label>
        <input type="text" name="author" value="${book.author}" placeholder="Author...">
        <input type="submit" value="Save">
    </form>`;
    render(editForm, body);
}

async function getBooks() {
    const response = await fetch(' http://localhost:3030/jsonstore/collections/books');
    const data = await response.json();
    return Object.values(data);
}
