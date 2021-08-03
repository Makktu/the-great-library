"use strict";

// * items in book library:
// * TITLE
// * AUTHOR
// * FORMAT (paperback, digital etc.)
// * PAGES
// * READ

function updateDisplay() {
    theLibrary.forEach((book) => {
        titleColumn.textContent = book.title;
    });
}

function Book(index, title, author, format, pages, read) {
    this.index = index;
    this.title = title;
    this.author = author;
    this.format = format;
    this.pages = pages;
    this.read = read;
}

const addNewBook = () => {
    // newBookForm.style.cssText = "opacity: 1; transition: 1s ease";
    bookTitle = prompt("Title?");
    bookAuthor = prompt("Author?");
    bookFormat = prompt("Format?");
    bookPages = prompt("Pages?");
    bookIsRead = prompt("Read? (y/n)");

    const book = new Book(
        indexNumber,
        bookTitle,
        bookAuthor,
        bookFormat,
        bookPages,
        bookIsRead
    );
    theLibrary.push(book);
    console.log(theLibrary);
    indexNumber++;
    updateDisplay();
};

let theLibrary = [
    {
        index: 1,
        title: "Pale Fire",
        author: "V. V. Nabokov",
        format: "paperback",
        pages: "300",
    },
    {
        index: 2,
        title: "The Bible",
        author: "Miscellaneous",
        format: "paperback",
        pages: "1000",
    },
    {
        index: 3,
        title: "Dreamstate",
        author: "Jed McKenna",
        format: "audio",
        pages: "n/a",
    },
];
let bookTitle;
let bookAuthor;
let bookFormat;
let bookPages;
let bookIsRead;
let indexNumber = 4;

const newBookBtn = document.querySelector(".new-book-btn");

newBookBtn.addEventListener("click", addNewBook);

// const newBookForm = document.querySelector(".new-book-input");

const titleColumn = document.querySelector(".title-column");
const authorColumn = document.querySelector(".book-author");
const formatColumn = document.querySelector(".book-format");
const pagesColumn = document.querySelector(".book-pages");
const isReadColumn = document.querySelector(".book-read");

// function addBookToLibrary() {
//     // stuff
// }
