const books = [];
const bookBtn = document.querySelector(".bookBtn");
const display = document.querySelector(".display");
const container = document.querySelector(".container");
function Book() {}

Book.prototype.addBook = function (title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.id = crypto.randomUUID();
};

Book.prototype.toogleRead = function () {
  if (this.read === "Yes") {
    this.read = "No";
  } else {
    this.read = "Yes";
  }
};

Book.prototype.info = function info() {
  return `${this.title} by ${this.author}, ${this.pages}, ${this.read}`;
};

const displayBooks = () => {
  display.innerHTML = "";
  books.forEach((item) => {
    const div = document.createElement("div");
    const ul = document.createElement("ul");
    const del = document.createElement("button");
    const readBtn = document.createElement("button");
    del.textContent = "Delete";
    readBtn.textContent = "Read";
    div.setAttribute("data-id", item.id);
    ul.innerHTML = `
        <li>Title: ${item.title}</li>
      <li>Author: ${item.author}</li>
      <li>No. of Pages: ${item.pages}</li>
      <li>Read: ${item.read}</li>
    `;

    div.appendChild(ul);
    div.appendChild(del);
    div.appendChild(readBtn);
    div.classList.add("innerDiv");
    display.appendChild(div);

    del.addEventListener("click", () => {
      const bookIndex = books.findIndex((book) => book.id === item.id);

      books.splice(bookIndex, 1);

      displayBooks();
    });
    readBtn.addEventListener("click", () => {
      item.toogleRead();
      displayBooks();
    });
  });
};

bookBtn.addEventListener("click", (event) => {
  event.preventDefault();
  const form = document.createElement("form");
  const title = document.createElement("input");
  const author = document.createElement("input");
  const pages = document.createElement("input");
  const read = document.createElement("input");
  const createBookBtn = document.createElement("button");
  form.classList.add("form");
  createBookBtn.textContent = "Create";
  form.appendChild(title);
  form.appendChild(author);
  form.appendChild(pages);
  form.appendChild(read);
  form.appendChild(createBookBtn);

  container.appendChild(form);

  createBookBtn.addEventListener("click", (event) => {
    event.preventDefault();
    const newBook = new Book();
    newBook.addBook(title.value, author.value, pages.value, read.value);
    books.push(newBook);
    displayBooks();
    const formDiv = document.querySelector(".form");
    formDiv.parentNode.removeChild(formDiv);
  });
});
