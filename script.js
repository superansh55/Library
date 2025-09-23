const books = [];
const bookBtn = document.querySelector(".bookBtn");
const display = document.querySelector(".display");
const container = document.querySelector(".container");
function Book() {}


const displayBooks = () => {
    display.innerHTML="";
  books.forEach((item) => {
    const div = document.createElement("div");
    const ul = document.createElement("ul");
    const del = document.createElement("button");
    del.textContent="Delete";
    div.setAttribute("data-id", item.id);
    for (let x in item) {
      const li = document.createElement("li");
      li.textContent = `${x}:${item[x]}`;
      ul.appendChild(li);
    }

    div.appendChild(ul);
    div.appendChild(del);
    div.classList.add("innerDiv");
    display.appendChild(div);

    del.addEventListener("click",()=>{
        const newDiv= document.querySelector(`[data-id="${item.id}"]`);

        newDiv.remove();
       
    
        

        })
       

     
    
  });
};


Book.prototype.addBook = function (title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  let obj = {
    Title: this.title,
    Author: this.author,
    "No. of Pages": this.pages,
    read: this.read,
    id: crypto.randomUUID(),
  };
  books.push(obj);
   displayBooks();
   console.log(books);
};




Book.prototype.info = function info() {
  return `${this.title} by ${this.author}, ${this.pages}, ${this.read}`;
};

const book1 = new Book();
const book2 = new Book();
const book3 = new Book();
const book4 = new Book();
book1.addBook("harry puttar", "jj bowling", 285, "not read");
book2.addBook("garry puttar", "jj bowling", 285, "not read");
book3.addBook("garry puttar", "jj bowling", 285, "not read");
book4.addBook("garry puttar", "jj bowling", 285, "not read");




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

  createBookBtn.addEventListener("click",(event)=>{
    event.preventDefault();
    const newBook= new Book();
    newBook.addBook(title.value,author.value,pages.value,read.value);
   const formDiv= document.querySelector(".form");
    formDiv.parentNode.removeChild(formDiv);
       

  })
});

