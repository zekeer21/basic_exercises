const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const addBook = document.querySelector("#btn-add");
const cancelAdd = document.querySelector(".btn-cacel");

const addBookModal = function(){
    modal.classList.remove("hidden");
    overlay.classList.remove("hidden");
    addBook.classList.add("hidden");
}

addBook.addEventListener("click", addBookModal);