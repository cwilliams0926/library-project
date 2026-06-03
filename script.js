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
  myLibrary.push(book);
}

addBookToLibrary("test", "test", 92, true);
addBookToLibrary("test2", "test2", 102, false);
addBookToLibrary("test3", "test3", 112, true);

function displayBooks() {
  const tableBody = document.querySelector("#table-body");
  myLibrary.forEach((book) => {
    const tableRow = document.createElement("tr");
    for (const key in book) {
      if (Object.hasOwn(book, key)) {
        const tableCell = document.createElement("td");
        tableCell.textContent = book[key];
        tableRow.appendChild(tableCell);
      }
    }
    tableBody.appendChild(tableRow);
  });
}

displayBooks();

const dialog = document.querySelector("dialog");
const openButton = document.querySelector("#open-button");
const closeButton = document.querySelector("#close-button");
openButton.addEventListener("click", () => {
  dialog.showModal();
});
closeButton.addEventListener("click", () => {
  dialog.close();
});
