"use strict";

function editThis(e) {
    foundIt = e.target.className;
    foundIt = foundIt.substring(16);
    // * OK – grabbed the correct Index number – now match to the book!
    const bookEdited = theLibrary[foundIt - 1];

    newBookForm.style.display = "block";

    // * below is what I need to work with to fulfil this part of the project
    document.querySelector(".title").value = bookEdited.title;
    document.querySelector(".author").value = bookEdited.author;
    document.querySelector(".radio-section-1").innerHTML = `<input
    type="radio"
    id="print"
    name="format"
    value="Print"
    ${bookEdited.format === "Print" ? "checked" : null}
/>
<label for="print">Print</label>
<input
    type="radio"
    id="digital"
    name="format"
    value="Digital"
    ${bookEdited.format === "Digital" ? "checked" : null}

/>
<label for="digital">Digital</label>
<input
    type="radio"
    id="audio"
    name="format"
    value="Audio"
    ${bookEdited.format === "Audio" ? "checked" : null}

/>
<label for="audio">Audio</label>
<br />`;
    document.querySelector(".pages").value = bookEdited.pages;
    document.querySelector(".radio-section-2").innerHTML = `<input
    type="radio"
    class="been-read"
    id="been-read"
    name="read-yet"
    value="y"
    ${bookEdited.read ? "checked" : null}

/>
<label for="been-read">Yes</label>

<br />
<input
    type="radio"
    class="not-read"
    id="not-read"
    name="read-yet"
    value="n"
    ${!bookEdited.read ? "checked" : null}
/>
<label for="not-read">No</label>

<br />`;
    editEntry = true;
}

function submitClicked(e) {
    e.preventDefault();
    bookTitle = document.querySelector(".title").value;
    bookAuthor = document.querySelector(".author").value;
    bookFormat = document.querySelector("input[name='format']:checked").value;
    bookPages = document.querySelector(".pages").value;
    bookIsRead = document.querySelector("input[name='read-yet']:checked").value;
    bookIsRead === "y" ? (bookIsRead = true) : (bookIsRead = false);

    if (editEntry) {
        if (bookTitle && bookAuthor && bookPages) {
            theLibrary[foundIt - 1].title = bookTitle;
            theLibrary[foundIt - 1].author = bookAuthor;
            theLibrary[foundIt - 1].format = bookIsRead;
            theLibrary[foundIt - 1].pages = bookPages;
            theLibrary[foundIt - 1].read = bookIsRead;
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

        editEntry = false;
        return;
    }

    if (bookTitle && bookAuthor && bookPages) {
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

function cancelClicked(e) {
    e.preventDefault();
    editEntry = false;
    messageArea.textContent = "";
    document.querySelector(".title").value = "";
    document.querySelector(".author").value = "";
    // document.querySelector(".title") = "";
    document.querySelector(".pages").value = "";
    // document.querySelector(".title") = "";
}

function updateDisplay() {
    if (editEntry) {
        theLibrary[foundIt].title = document.querySelector(".title").value;
        theLibrary[foundIt].author = document.querySelector(".author").value;
        theLibrary[foundIt].format = document.querySelector(
            "input[name='format']:checked"
        ).value;
        theLibrary[foundIt].pages = document.querySelector(".pages").value;
        bookIsRead = document.querySelector(
            "input[name='read-yet']:checked"
        ).value;
        bookIsRead === "y"
            ? (theLibrary[foundIt].read = true)
            : (theLibrary[foundIt].read = false);

        editEntry = false;
        updateDisplay();
    }

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
    });
    titleColumnText = "";
    authorColumnText = "";
    formatColumnText = "";
    pagesColumnText = "";
    readColumnText = "";
    indexColumnText = "";
    editColumnText = "";
    const editBtns = document.querySelectorAll(".edit-button");
    // * HERE – how to grab the correct book?!
    editBtns.forEach((button) => {
        button.addEventListener("click", (e) => {
            editThis(e);
        });
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
        format: "Print",
        pages: "300",
        read: true,
    },
    {
        index: 2,
        title: "The Bible",
        author: "Miscellaneous",
        format: "Print",
        pages: "1000",
        read: false,
    },
    {
        index: 3,
        title: "Dreamstate",
        author: "Jed McKenna",
        format: "Audio",
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
let editEntry = false;
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
cancelBtn.addEventListener("click", (e) => {
    cancelClicked(e);
});

const messageArea = document.querySelector(".message-area");

const titleColumn = document.querySelector(".title-column");
const authorColumn = document.querySelector(".author-column");
const formatColumn = document.querySelector(".format-column");
const pagesColumn = document.querySelector(".pages-column");
const isReadColumn = document.querySelector(".read-column");
const indexColumn = document.querySelector(".index-column");
const editColumn = document.querySelector(".edit-column");

updateDisplay();
