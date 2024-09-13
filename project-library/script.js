const myBooks = [
    {
    title: "Book Title",
    author: "The Author",
    pages: "123",
    isRead: true,
    },
    {
        title: "Book2",
        author: "Author2",
        pages: 100,
        isRead: false,
    }
];

class Library{
    constructor(title, author, pages, isRead){
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.isRead = isRead;
    }
}

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const addBook = document.querySelector("#btn-add");
const cancelBtn = document.querySelector(".btn-cancel");
const submit = document.querySelector("#submit");
const form = document.querySelector("form");
const title = document.querySelector("#title");
const author = document.querySelector("#author");
const pages = document.querySelector("#pages");
const isRead = document.querySelector("#isRead");
const cardContainer = document.querySelector("#bookContainer");


const openModal = function(){
    modal.classList.remove("hidden");
    overlay.classList.remove("hidden");
    addBook.classList.add("hidden");
}

const closeModal = function(){
    modal.classList.add("hidden");
    overlay.classList.add("hidden");
    addBook.classList.remove("hidden");
}

overlay.addEventListener("click", ()=>{
    closeModal();
    form.reset();
})

addBook.addEventListener("click", function(e){
    e.preventDefault();
    openModal();
})

form.addEventListener("submit", function(e){
    e.preventDefault();
    let newBook = new Library(title, author, pages, isRead);
    myBooks.push({
        title: newBook.title.value,
        author: newBook.author.value,
        pages: newBook.pages.value,
        isRead: newBook.isRead.checked,
    });
    
    bookCards();
    console.log(myBooks);
    form.reset();
    closeModal();
})

const bookCards = () =>{
    cardContainer.innerHTML = "";
    cardContainer.classList.add("cardDiv");
    myBooks.map((book, index) =>{
        let cardDiv = document.createElement("div");
        cardDiv.classList.add("bookCard");
        cardDiv.innerHTML = `
            <p>Title: ${book.title}<p>
            <p>Author: ${book.author}</p>
            <p>Pages: ${book.pages}</p>
            <div class="btn-group">
                <button id="isReadBtn" class="btn">${book.isRead ? "Read" : "Not Read"}</button>
                <button id="remove" class="btn">Remove</button>
            </div>
        `;
        cardContainer.appendChild(cardDiv);
        const readBtn = cardDiv.querySelector("#isReadBtn");

        if (book.isRead) {
            readBtn.style.backgroundColor = "green"; // Set color to green for Read
        } else {
            readBtn.style.backgroundColor = "red"; // Set color to red for Not Read
        }

        readBtn.addEventListener("click", function() {
            if (readBtn.textContent === "Not Read") {
                readBtn.textContent = "Read";
                readBtn.style.backgroundColor = "green"; // Set color to green
            } else {
                readBtn.textContent = "Not Read";
                readBtn.style.backgroundColor = "red"; // Set color to red
            }
        });

        const removeBtn = cardDiv.querySelector("#remove");
        removeBtn.addEventListener("click", function() {
            myBooks.splice(index, 1); // Remove the book from the array
            bookCards(); // Re-render the book cards
        });
    })
    
}

bookCards();