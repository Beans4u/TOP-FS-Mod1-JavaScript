let myLibrary = [{title: "The Hobbit", author: "JRR Tolkein", pages: "255", haveRead: "true"},{title: "Simarilion", author: "JRR Tolkein", pages: "389", haveRead: "false"}];


class Book {
    constructor (title, author, pages, haveRead){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.haveRead = haveRead;
    }
}

function addBookToLibrary(title, author, pages, haveRead){
    // make new books appear on end of array
       myLibrary.push(new Book(title, author, pages, haveRead)) //something like this?
   }


// DOM ELEMENT VARIABLES
container = document.getElementById('container');
card = document.getElementById('card');
cardTitle = document.getElementById('card-title');
cardAuthor = document.getElementById('card-author');
cardPageCount = document.getElementById('card-page-count');
cardHaveRead = document.getElementById('card-have-read');
cardBookReadToggle = document.getElementById('card-book-read-toggle');
cardDelete = document.getElementById('card-delete');

textPageCountHeader = "Page count: "
textHaveReadHeader = "Completed reading: "

// function addBookToWebApp() {
//create card
let newCard = document.createElement('div');
newCard.setAttribute('id', 'card');
container.appendChild(newCard);


//create title
let newCardTitle = document.createElement('p');
newCardTitle.setAttribute('id', 'card-title');

let newCardTitleText = document.createTextNode(Book.title);

newCardTitle.appendChild(newCardTitleText); // append text to p element
newCard.appendChild(newCardTitle);


//create author
let newCardAuthor = document.createElement('p');
newCardAuthor.setAttribute('id', 'card-author');

let newCardAuthorText = document.createTextNode(Book.author);

newCardAuthor.appendChild(newCardAuthorText);
newCard.appendChild(newCardAuthor);


//create num of pages text
let newCardPageCountHeader = document.createElement('p')
newCardPageCountHeader.setAttribute('id', 'card-page-count-header')

let newCardPageCountHeaderText = document.createTextNode(textPageCountHeader);
newCardPageCountHeader.appendChild(newCardPageCountHeaderText);

let newCardPageCount = document.createElement('p');
newCardPageCount.setAttribute('id', 'card-page-count');

let newCardPageCountText = document.createTextNode(Book.pageCountValue)

newCardPageCount.appendChild(newCardPageCountText);
newCard.appendChild(newCardPageCount);


//create page read text and radio box
let newCard = document.createElement('p');
newCard.appendChild(newCard);

let newCardRadioBox = document.createElement();
newCardRadioBox.setAttribute('type', 'radio');
newCardRadioBox.setAttribute('id', 'card-radio-box');
newCard.appendChild(newCardRadioBox);
// }

// PSEUDOCODE
/* 

loop through myLibrary[]
    // BOOK TITLE
    let cardTitle = document.createElement('div');
    
    //code to change attribute to div="id="card"
    cardTitle.textContent = 'Book.title';
    document.querySelector('ul').appendChild(cardTitle)

    // BOOK AUTHOR
    let cardAuthor = document.createElement('li');
    cardAuthor.textContent = 'Book.author';
    document.querySelector('ul').appendChild(cardAuthor)

    // BOOK PAGES
    let cardPages = document.createElement('li');
    cardPages.textContent = 'Book.pages';
    document.querySelector('ul').appendChild(cardPages)

    // BOOK HAVE READ BOOL
    let cardHaveRead = document.createElement('li');
    cardHaveRead.textContent = 'Book.haveRead';
    document.querySelector('ul').appendChild(cardHaveRead)





*/