class Book {
  static books = [];

  addBook(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.id = crypto.randomUUID();
  }
  toogleRead() {
    if (this.read === "Yes") {
      this.read = "No";
    } else {
      this.read = "Yes";
    }
  }
  info() {
    return `${this.title} by ${this.author}, ${this.pages}, ${this.read}`;
  }
}

const bookDisplay = (function () {
  const bookBtn = document.querySelector(".bookBtn");
  const display = document.querySelector(".display");
  const booksCopy = Book.books;
  
  const displayBooks = () => {
    display.innerHTML = "";
    booksCopy.forEach((item) => {
      const div = document.createElement("div");
      const ul = document.createElement("ul");
      const del = document.createElement("button");
      const readBtn = document.createElement("button");
      const btnDiv = document.createElement("div");
      btnDiv.classList.add("btnDiv");
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
      btnDiv.appendChild(del);
      btnDiv.appendChild(readBtn);
      div.appendChild(btnDiv);
      div.classList.add("innerDiv");
      display.appendChild(div);

      del.addEventListener("click", () => {
        const bookIndex = booksCopy.findIndex((book) => book.id === item.id);
        booksCopy.splice(bookIndex, 1);
        displayBooks();
      });
      
      readBtn.addEventListener("click", () => {
        item.toogleRead();
        displayBooks();
      });
    });
  };

  bookBtn.addEventListener("click", () => {
    
    const dialog = document.createElement("dialog");
    dialog.classList.add("bookDialog");
    
  
    const form = document.createElement("form");
    form.method = "dialog";
    form.classList.add("form");
    
    
    const formTitle = document.createElement("h2");
    formTitle.textContent = "Add New Book";
    form.appendChild(formTitle);
    
   
    const title = document.createElement("input");
    title.placeholder = "Enter Book Name";
    title.required = true;
    title.id = "title";
    title.name = "Book Title";
    
    const author = document.createElement("input");
    author.placeholder = "Enter Author Name";
    author.required = true;
    author.id = "author";
    author.name = "Author Name";
    
    const pages = document.createElement("input");
    pages.placeholder = "Enter No. Of Pages";
    pages.required = true;
    pages.id = "pages";
    pages.type = "number";
    pages.name = "No. of Pages";
    
    const read = document.createElement("input");
    read.placeholder = "Read Status: Yes/No";
    read.id = "read";
    
  
    const buttonContainer = document.createElement("div");
    buttonContainer.classList.add("dialogButtons");
    
    const createBookBtn = document.createElement("button");
    createBookBtn.type = "submit";
    createBookBtn.textContent = "Create";
    
    const cancelBtn = document.createElement("button");
    cancelBtn.type = "button";
    cancelBtn.textContent = "Cancel";
    cancelBtn.classList.add("cancelBtn");
    
    
    form.appendChild(title);
    form.appendChild(author);
    form.appendChild(pages);
    form.appendChild(read);
    buttonContainer.appendChild(cancelBtn);
    buttonContainer.appendChild(createBookBtn);
    form.appendChild(buttonContainer);
    dialog.appendChild(form);
    document.body.appendChild(dialog);
    
    
    function validateInput(input) {
      input.addEventListener("invalid", () => {
        if (input.validity.valueMissing) {
          input.setCustomValidity(`The ${input.name} must be filled!`);
        } else {
          input.setCustomValidity("");
        }
      });
      input.addEventListener("input", () => {
        input.setCustomValidity("");
      });
    }
    
    validateInput(title);
    validateInput(author);
    validateInput(pages);
    
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const newBook = new Book();
      newBook.addBook(title.value, author.value, pages.value, read.value || "No");
      booksCopy.push(newBook);
      displayBooks();
      dialog.close();
      dialog.remove();
    });
    
    
    cancelBtn.addEventListener("click", () => {
      dialog.close();
      dialog.remove();
    });
    
    
    dialog.addEventListener("click", (e) => {
      if (e.target === dialog) {
        dialog.close();
        dialog.remove();
      }
    });
    
    
    dialog.showModal();
  });
})();