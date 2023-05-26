let library = []; // array of books

function Book(name, author, pages, read){
    this.name = name;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.hasRead = () => {
        (read) ? alert(`You've read it`) : alert(`You haven't read it`);
    };

};

function addBookToLibrary(book) {
    library.push(book);
}

function removeBook(int) {
    library.splice(int,1);
}


function createBook(name, author, pages, read){
    const book = new Book(name, author, pages, read);
    return book;
}
const book1 = new Book(`The Guest List: A Reese's Book Club Pick`,`Lucy Foley`, 336,false);
const book2 = new Book(`The Guest List: A Reese's Book Club Pick`,`Lucy Foley`, 336,false);
const book3 = new Book(`The Guest List: A Reese's Book Club Pick`,`Lucy Foley`, 336,false);
//make a function that creates a book







//Each card has a header name author pages and a read icon
function createCard() {
    const card = document.createElement('div');
    card.classList.add('card');
    card.dataset.index = library.length - 1;

    const name = document.createElement('h2');
    const author = document.createElement('h3');
    const pages = document.createElement('h3');

    name.textContent = 'Name: test';
    author.textContent = 'Author: test';
    pages.textContent = 'pages';

    card.append(name, author, pages);

    const e = document.querySelector('.main');
    e.append(card);
    //placeholder for svg image for read or not

    //No return value
}

//Testing===============================
addBookToLibrary(book1);
addBookToLibrary(book2);
addBookToLibrary(book3);


addBookToLibrary(createBook(`naming`, `authoring`, 223, false));

console.log(library.length);
console.log(book1.name);
console.log(library[3]); // Expect naming authoring 223  false

removeBook(3);
console.log(library); // Expect 3 books


const b = createCard();
