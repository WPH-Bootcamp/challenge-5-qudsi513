// Don't delete code bellow and this code must be at the bottom of the file
type Book = {
  title: string;
  author: string;
  year: number;
};

let books: Book[] = [];

function addBook(title: string, author: string, year: number): void {
  const newBook: Book = { title, author, year };
  books.push(newBook);
  console.log(`Book added: "${title}" by ${author} (${year})`);
}

function listBooks(): void {
  console.log("All Books:");
  books.forEach((book) => {
    console.log(`- ${book.title} by ${book.author} (${book.year})`);
  });
}

function searchBook(title?: string): void {
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

export { addBook, listBooks, searchBook };
