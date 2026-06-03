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
  tableBody.replaceChildren();
  myLibrary.forEach((book) => {
    const tableRow = document.createElement("tr");
    tableRow.dataset.id = book.id;
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

const submitButton = document.querySelector("#submit-button");
submitButton.addEventListener("click", (event) => {
  event.preventDefault();
  const name = document.forms["book-form"]["name"].value;
  const author = document.forms["book-form"]["author"].value;
  const pageCount = document.forms["book-form"]["pageCount"].value;
  const read = document.forms["book-form"]["read"].value;
  addBookToLibrary(name, author, pageCount, read);
  displayBooks();
  dialog.close();
});
