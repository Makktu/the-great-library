"use strict";

function editThis() {
    foundIt = e.target.className;
    foundIt = foundIt.substring(16);
    // * OK – grabbed the correct Index number – now match to the book!
    // theLibrary.forEach(index => {

    //     if (index.index === foundIt) {
    //     // ??? what
    //     }
}

function submitClicked(e) {
    e.preventDefault();
    bookTitle = document.querySelector(".title").value;
    bookAuthor = document.querySelector(".author").value;
    bookFormat = document.querySelector("input[name='format']:checked").value;
    bookPages = document.querySelector(".pages").value;
    bookIsRead = document.querySelector("input[name='read-yet']:checked").value;
    bookIsRead === "y" ? (bookIsRead = true) : (bookIsRead = false);

    if (bookTitle && bookAuthor && bookFormat && bookPages && bookIsRead) {
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
        bookTitle = "";
        bookAuthor = "";
        bookFormat = "";
        bookPages = "";
        bookIsRead = "";
        document.getElementById("the-form").reset();

        updateDisplay();
    } else {
        messageArea.textContent = "Not a complete entry!";
        document.getElementById("wrong-form").play(); // plays the Family Fortunes (UK) our survey said: '0' sound effect
    }
}

function cancelClicked() {
    messageArea.textContent = "";
    // document.getElementById("the-form").reset();
}

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

        editColumnText += `<p class="edit-button edit${book.index}">X</p>`;
        editColumn.innerHTML = editColumnText;

        titleColumnText = "";
        authorColumnText = "";
        formatColumnText = "";
        pagesColumnText = "";
        readColumnText = "";
        indexColumnText = "";
        editColumnText = "";
        // addNewBook();
    });
    const editBtns = document.querySelectorAll(".edit-button");
    // * HERE – how to grab the correct book?!
    editBtns.forEach((button) => {
        button.addEventListener("click", editThis);
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
    newBookForm.style.display = "block";
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
let foundIt;
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

const submitBtn = document.querySelector(".submit-btn");
const cancelBtn = document.querySelector(".cancel-btn");

submitBtn.addEventListener("click", submitClicked);
cancelBtn.addEventListener("click", cancelClicked);

const messageArea = document.querySelector(".message-area");

const titleColumn = document.querySelector(".title-column");
const authorColumn = document.querySelector(".author-column");
const formatColumn = document.querySelector(".format-column");
const pagesColumn = document.querySelector(".pages-column");
const isReadColumn = document.querySelector(".read-column");
const indexColumn = document.querySelector(".index-column");
const editColumn = document.querySelector(".edit-column");

updateDisplay();
