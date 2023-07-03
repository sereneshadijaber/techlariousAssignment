const Book = require('./Book.js')

class Bookshelf {
  constructor(name) {
    this.name = name;
    this.books = [];
  }

  addBook(title, author) {
    const book = new Book(title, author);
    this.books.push(book);
  }

  removeBook(title) {
    this.books = this.books.filter(book => book.title !== title);
  }

  displayBooks() {
    if (this.books.length === 0) {
      console.log(`No books in this bookshelf.`);
    } else {
      console.log(`Books in ${this.name} bookshelf:`);
      this.books.forEach(book => {
        console.log(`- Title: ${book.title} Author: ${book.author}`);
      });
    }
  }
}

module.exports = Bookshelf;
