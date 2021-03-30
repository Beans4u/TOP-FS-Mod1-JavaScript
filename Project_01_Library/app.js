
// Make-believe database
let myLibrary = [
    {
        title: 'The Wizard Blew his Horn', 
        author: 'Stephen Garrity', 
        pages: 412, 
        haveRead: true
    },
    {
        title: 'The War of Art', 
        author: 'Stephen Pressfield', 
        pages: 389, 
        haveRead: true
    },
    {
        title: 'Hitchhikers Guide to the Galaxy', 
        author: 'Douglas Adams', 
        pages: 215, 
        haveRead: false
    },
];

//Book class and constructor
class Book {
    constructor(title, author, pages, haveRead){
        this.title = title;
        this.author = author;
        this.pages = parseInt(pages);
        this.haveRead = haveRead;
    }
}

// UI class
class UI {
    static displayBooks() {
        
        let libraryDisplay = myLibrary;

        libraryDisplay.forEach((book) => UI.addBookToDOM(book));

    }

    static addBookToDOM(book){
        const cardColumns = document.querySelector('#card-columns');
        
        //create card
        const card = document.createElement('div');
        card.setAttribute('class', 'card p-3');
        
        //create display text
        card.innerHTML += `
            <div class='card-block'>
                <h5 class='card-title'>${book.title}</h5>
                <h6 class='card-subtitle mb-2 text-muted'>${book.author}</h6>
                <p class='text-info'>${book.pages} pages</p>
                <p class='card-text'>Completed reading? ${book.haveRead}</p>
                <button value='${book.title}' id='delete' class='card-link btn btn-sm btn-outline-danger delete'>delete</button>
            </div>
        `;
        cardColumns.appendChild(card);
    }

    static clearFields(){
        document.querySelector('#title').value = '';
        document.querySelector('#author').value = '';
        document.querySelector('#page-count').value = '';
        document.querySelector('#flexCheckDefault').checked = false;
    }

    static deleteBook(el) {
        if(el.classList.contains('delete')) {
            //DOM
            const removeBook = el.parentElement.parentElement;
            console.log(`removeBook ${removeBook}`);

            removeBook.remove();
        
            // delete array book object
            myLibrary.forEach((book, index) => {
                if (book.title === el.value){
                    myLibrary.splice(index, 1);
                };
            });
        }
    }

    static addBookToArray(book){
        const new_book = new Book(book.title, book.author, book.pages, book.haveRead);
        myLibrary.push(new_book);
        console.log(myLibrary);
    }

    static summonForm(buttonPress){
        if (buttonPress){
            const form = document.querySelector('#hidden-form-container');
            const newBookButton = document.querySelector('#button-new-book');

            let isItHidden = form.hasAttribute('hidden');
            console.log(` ${isItHidden}`);

            if (isItHidden === false){
                form.setAttribute('hidden', '');
            }
            else {
            form.removeAttribute('hidden');
            isItHidden = false;
            }
        }
    }

    static dismissForm(formSubmitted){
        if (formSubmitted){
            const form = document.querySelector('#hidden-form-container');
            form.setAttribute('hidden', '');
        }
    }

}

// EVENTS:

// Event: display
document.addEventListener('DOMContentLoaded', UI.displayBooks);

// Event: add to new book object, publish to DOM, push to myLibrary array
document.querySelector('#new-book-form').addEventListener('submit', (e) => {

    const title = document.querySelector('#title').value;
    const author = document.querySelector('#author').value;
    const pageCount = document.querySelector('#page-count').value;
    const haveRead = document.querySelector('#flexCheckDefault').checked;

    const book = new Book(title, author, pageCount, haveRead)


    UI.addBookToDOM(book);

    UI.addBookToArray(book);

    UI.clearFields();

    UI.dismissForm(e);
});

// Event: remove from Dom
document.querySelector('#card-columns').addEventListener('click', (e) => {
    UI.deleteBook(e.target);
});


// Event: show / hide new book form
document.querySelector('#button-new-book').addEventListener('click', (e) => {
    UI.summonForm(e.target);
});