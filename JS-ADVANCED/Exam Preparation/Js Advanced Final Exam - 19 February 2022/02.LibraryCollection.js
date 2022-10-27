class LibraryCollection {
    constructor(capacity) {
        this.capacity = capacity;
        this.books = [];
    }

    addBook(bookName, bookAuthor) {
        if (this.capacity <= 0) {
            throw new Error("Not enough space in the collection.");
        }

        let book = {
            bookName,
            bookAuthor,
            payad: false
        };
        this.books.push(book);
        this.capacity--;
        return `The ${bookName}, with an author ${bookAuthor}, collect.`;
    }

    payBook(bookName) {
        let book = this.books.find(b => b.bookName === bookName);
        if (!book) {
            throw new Error(`${bookName} is not in the collection.`);
        }

        if (book.payad) {
            throw new Error(`${bookName} has already been paid.`);
        }

        book.payad = true;

        return `${bookName} has been successfully paid.`;
    }

    removeBook(bookName) {
        let book = this.books.find(b => b.bookName === bookName);
        if (!book) {
            throw new Error(`The book, you're looking for, is not found.`);
        }

        if (!book.payad) {
            throw new Error(`${bookName} need to be paid before removing from the collection.`);
        }

        let index = this.books.indexOf(book);
        this.books.splice(index, 1);
        this.capacity++;

        return `${bookName} remove from the collection.`;
    }

    getStatistics(bookAuthor) {
        let res = "";
        if (!bookAuthor) {
            res += `The book collection has ${this.capacity} empty spots left.\n`;
            this.books.sort((a, b) => a.bookName.localeCompare(b.bookName));
            this.books
                .forEach(b => res += `${b.bookName} == ${b.bookAuthor} - ${b.payad ? 'Has Paid' : 'Not Paid'}.\n`);
            res = res.substring(0, res.length - 1);
        } else {
            let authorBooks = this.books.filter(b => b.bookAuthor === bookAuthor);
            if (!authorBooks.length) {
                throw new Error(`${bookAuthor} is not in the collection.`);
            } else {
                authorBooks
                    .forEach(b => res += `${b.bookName} == ${b.bookAuthor} - ${b.payad ? 'Has Paid' : 'Not Paid'}.\n`);
                res = res.substring(0, res.length - 1);
            }
        }

        return res;
    }
}

const library = new LibraryCollection(5)
library.addBook('Don Quixote', 'Miguel de Cervantes');
library.payBook('Don Quixote');
library.addBook('In Search of Lost Time', 'Marcel Proust');
library.addBook('Ulysses', 'James Joyce');
console.log(library.getStatistics("ss"));