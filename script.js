const myLibrary = [];

function Book(name, author, pageCount, read) {
  this.name = name;
  this.author = author;
  this.pageCount = pageCount;
  this.read = read;
  this.id = crypto.randomUUID();
}

function addBookToLibrary(name, author, pageCount, read) {
  const book = new Book(name, author, pageCount, read);
  myLibrary.pop(book);
}
