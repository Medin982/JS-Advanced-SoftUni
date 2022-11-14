document.getElementById('loadBooks').addEventListener("click", loadAllBooks);
const form = document.querySelector('form');
form.addEventListener('submit', getBookData);


function getBookData(e) {
    e.preventDefault();
    debugger;
    const bookData = new FormData(form);
    const title = bookData.get('title');
    const auhtor = bookData.get('author');

    if (!title || !auhtor) {
        return;
    }

    const bookForm = {
        "author": auhtor,
        "title": title
    };
    createBook(bookForm);
    form.reset();
}

function editBook(e) {
    const bookHTMLEle = e.target.parentElement.parentElement;
    const bookId = bookHTMLEle.id;
    form.innerHTML = `<h3>Edit FORM</h3>
    <label>TITLE</label>
    <input type="text" name="title" placeholder="Title...">
    <label>AUTHOR</label>
    <input type="text" name="author" placeholder="Author...">
    <button>Save</button>`;
    let book = getBook(bookId)
        .then(b => {
            const title = form.querySelector('input[name=title]');
            title.value = b.title;
            const author = form.querySelector('input[name=author]');
            author.value = b.author;
        });
    form.removeEventListener;

    if (form.querySelector('button').clicked == true) {
        sendBook(new FormData(form), bookId);
    }
}

async function sendBook(body, bookId) {
    //TODO 'body' and 'bookId' are undefined and request not working!!!

   const response = await fetch(`http://localhost:3030/jsonstore/collections/books/${bookId}`, {
    method: 'PUT',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(body.FormData)
   });

   const data = response.json();

}

async function deleteBook(e) {

}

async function getBook(id) {
    const response = await fetch(`http://localhost:3030/jsonstore/collections/books/${id}`);
    const data = await response.json();
    return data;
}

async function createBook(body) {
    const response = await fetch('http://localhost:3030/jsonstore/collections/books', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body)
    });

    const data = await response.json();
    loadAllBooks();
}

async function loadAllBooks() {
    const response = await fetch('http://localhost:3030/jsonstore/collections/books');
    const data = await response.json();

    const body = document.querySelector('tbody');
    body.innerHTML = "";
    Object.entries(data)
        .forEach(book => {
            const bookId = book[0];
            const bookData = book[1];
            const tr = document.createElement('tr');
            tr.setAttribute("id", bookId);
            const authorTd = document.createElement('td');
            authorTd.textContent = bookData.author;
            const nameBookTd = document.createElement('td');
            nameBookTd.textContent = bookData.title;
            const buttonsTd = document.createElement('td');
            const editBtn = document.createElement('button');
            editBtn.textContent = "Edit";
            editBtn.addEventListener("click", editBook);
            const deleteBtn = document.createElement('button');
            deleteBtn.textContent = "Delete";
            deleteBtn.addEventListener("click", deleteBook);
            buttonsTd.appendChild(editBtn);
            buttonsTd.appendChild(deleteBtn);
            tr.appendChild(nameBookTd);
            tr.appendChild(authorTd);
            tr.appendChild(buttonsTd);
            body.appendChild(tr);
        });
}