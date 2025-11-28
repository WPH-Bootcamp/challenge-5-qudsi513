"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addBook = addBook;
exports.listBooks = listBooks;
exports.searchBook = searchBook;
let books = [];
function addBook(title, author, year) {
    const newBook = { title, author, year };
    books.push(newBook);
    console.log(`Book added: "${title}" by ${author} (${year})`);
}
function listBooks() {
    console.log("All Books:");
    books.forEach((book) => {
        console.log(`- ${book.title} by ${book.author} (${book.year})`);
    });
}
function searchBook(title) {
    if (!title) {
        console.log("Please provide a title to search.");
        return;
    }
    console.log(`Search Results for "${title}":`);
    const results = books.filter((book) => book.title.includes(title));
    if (results.length === 0) {
        console.log(`No books found with title containing "${title}".`);
        return;
    }
    results.forEach((book) => {
        console.log(`- ${book.title} by ${book.author} (${book.year})`);
    });
}
