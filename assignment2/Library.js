const Bookshelf = require('./Bookshelf');

class Library {
  constructor() {
    this.bookshelves = [];
  }

  addBookshelf(name) {
    const bookshelf = new Bookshelf(name);
    this.bookshelves.push(bookshelf);
  }

  removeBookshelf(name) {
    this.bookshelves = this.bookshelves.filter(
      bookshelf => bookshelf.name !== name
    );
  }

  addBookToBookshelf(name, title, author) {
    const bookshelf = this.bookshelves.find(
      bookshelf => bookshelf.name === name
    );
    if (bookshelf) {
      bookshelf.addBook(title, author);
    }
  }

  removeBookFromBookshelf(name, title) {
    const bookshelf = this.bookshelves.find(
      bookshelf => bookshelf.name === name
    );
    if (bookshelf) {
      bookshelf.removeBook(title);
    }
  }

  displayLibrary() {
    if (this.bookshelves.length === 0) {
      console.log(`The library is empty.`);
    } else {
      console.log(`Library contents:`);
      this.bookshelves.forEach(bookshelf => {
        console.log(`Bookshelf: ${bookshelf.name}`);
        bookshelf.displayBooks();
        console.log();
      });
    }
  }
}

module.exports = Library;
