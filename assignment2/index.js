const Library = require('./Library.js');


const library = new Library();

// Add bookshelves
library.addBookshelf("Fantasy");
library.addBookshelf("Science");

// Add books to bookshelves
library.addBookToBookshelf("Fantasy", "The Hobbit", "Y");

library.addBookToBookshelf(
  "Fantasy",
  "Barbie",
  "xXxxX"
);


// Display library
library.displayLibrary();

library.removeBookFromBookshelf('Fantasy', 'Barbie');

library.displayLibrary();

//library.removeBookshelf('Fantasy');

library.displayLibrary();