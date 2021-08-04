"use strict";

function updateDisplay() {
    theLibrary.forEach((book) => {
        titleColumnText += `<p>${book.title}</p>`;
        titleColumn.innerHTML = titleColumnText;

        authorColumnText += `<p>${book.author}</p>`;
        authorColumn.innerHTML = authorColumnText;

        formatColumnText += `<p>${book.format}</p>`;
        formatColumn.innerHTML = formatColumnText;

        pagesColumnText += `<p>${book.pages}</p>`;
        pagesColumn.innerHTML = pagesColumnText;

        readColumnText += `<p>${book.read ? "yes" : "no"}</p>`;
        isReadColumn.innerHTML = readColumnText;

        indexColumnText += `<p>${book.index}</p>`;
        indexColumn.innerHTML = indexColumnText;

        editColumnText += `<div class="edit-button"><p>?</p></div>`;
        editColumn.innerHTML = editColumnText;
    });
    titleColumnText = "";
    authorColumnText = "";
    formatColumnText = "";
    pagesColumnText = "";
    readColumnText = "";
    indexColumnText = "";
    editColumnText = "";
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
    newBookForm.style.display = "block";
    // bookTitle = prompt("Title?");
    // bookAuthor = prompt("Author?");
    // bookFormat = prompt("Format?");
    // bookPages = prompt("Pages?");
    // bookIsRead = prompt("Read? (y/n)");
    // bookIsRead === "y" ? (bookIsRead = true) : (bookIsRead = false);

    const book = new Book(
        indexNumber,
        bookTitle,
        bookAuthor,
        bookFormat,
        bookPages,
        bookIsRead
    );
    theLibrary.push(book);
    indexNumber++;
    updateDisplay();
};

let theLibrary = [
    {
        index: 1,
        title: "Pale Fire",
        author: "Vladimir Nabokov",
        format: "paperback",
        pages: "300",
        read: true,
    },
    {
        index: 2,
        title: "The Bible",
        author: "Miscellaneous",
        format: "paperback",
        pages: "1000",
        read: false,
    },
    {
        index: 3,
        title: "Dreamstate",
        author: "Jed McKenna",
        format: "audio",
        pages: "n/a",
        read: true,
    },
];
let bookTitle;
let bookAuthor;
let bookFormat;
let bookPages;
let bookIsRead;
let indexNumber = 4;
let titleColumnText = "";
let authorColumnText = "";
let formatColumnText = "";
let pagesColumnText = "";
let readColumnText = "";
let indexColumnText = "";
let editColumnText = "";

const newBookBtn = document.querySelector(".new-book-btn");

newBookBtn.addEventListener("click", addNewBook);

const newBookForm = document.querySelector(".new-book-form");
const newBookClose = document.querySelector(".new-close");

newBookClose.addEventListener("click", () => {
    newBookForm.style.display = "none";
});

window.onclick = function (e) {
    if (e.target === newBookForm) newBookForm.style.display = "none";
};

const titleColumn = document.querySelector(".title-column");
const authorColumn = document.querySelector(".author-column");
const formatColumn = document.querySelector(".format-column");
const pagesColumn = document.querySelector(".pages-column");
const isReadColumn = document.querySelector(".read-column");
const indexColumn = document.querySelector(".index-column");
const editColumn = document.querySelector(".edit-column");

updateDisplay();
