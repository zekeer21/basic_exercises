const myBooks = [];

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const addBook = document.querySelector("#btn-add");
const cancelAdd = document.querySelector(".btn-cancel");
const submit = document.querySelector("#submit");

const title = document.querySelector("#title");
const author = document.querySelector("#author");
const pages = document.querySelector("#pages");
const isRead = document.querySelector("#isRead");


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

const getData = function(){
    const titleValue = title.value;
    const authorValue = author.value;
    const pagesValue = pages.value;
    const isReadValue = isRead.value;
    console.log(titleValue, authorValue,pagesValue,isReadValue);
}

addBook.addEventListener("click", openModal);
cancelAdd.addEventListener("click", closeModal);
console.log(submit.addEventListener("click", getData));
// console.log(getData());

// function Book(title, author, pages, isRead){
//     this.title = title;
//     this.author = author;
//     this.pages = pages;
//     this.isRead = isRead;
// }

