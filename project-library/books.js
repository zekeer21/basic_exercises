const myBooks = [];
const booksObj = {};

function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function (){
        console.log(`${this.title}, ${this.author}, ${this.pages}, ${this.read}`);
    }
}

const newBook = new Book("This Book", "This Author", "100 pages", "not read");
const book2 = new Book("The Hobbit", "The Author", "120 pages", "have read");

function addBook(book){
    booksObj["Title"] = book.title;
    booksObj["Author"] = book.author;
    booksObj["Pages"] = book.pages;
    booksObj["isRead"] = book.read;
    myBooks.push(booksObj);
}

// addBook(newBook);
// addBook(book2);
// console.log(myBooks);
// console.log(book2);