const books=[];
const bookBtn=document.querySelector("bookBtn");
const display= document.querySelector(".display");
function Book(){
  
}

Book.prototype.addBook=function(title,author,pages,read){
    this.title=title;
    this.author=author;
    this.pages=pages;
    this.read=read;
    let obj ={
        Title: this.title,
        Author:  this.author,
        "No. of Pages": this.pages,
        read : this.read,
        id : crypto.randomUUID(),
    }
        books.push(obj);
}

const displayObj= obj =>{
   
};

const displayBooks=()=>{
  books.forEach(item=>{
    const div = document.createElement("div");
    const ul = document.createElement("ul");
    
     for(let x in item){
        const li= document.createElement("li");
        li.textContent=`${x}:${item[x]}`;
         ul.appendChild(li);
    }
   
    div.appendChild(ul);
    div.classList.add("innerDiv");
    display.appendChild(div);
  })
};

Book.prototype.info= function info(){
    return `${this.title} by ${this.author}, ${this.pages}, ${this.read}`;
}


const book1= new Book();
const book2= new Book();
const book3= new Book();
book1.addBook("harry puttar","jj bowling",285,"not read");
book2.addBook("garry puttar","jj bowling",285,"not read");
book3.addBook("garry puttar","jj bowling",285,"not read");

console.log(books);
displayBooks();


bookBtn.addEventListener("click",()=>{
    
})