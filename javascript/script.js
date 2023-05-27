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


//Each card has a header name author pages and a read icon
function createCard(i) {
    const card = document.createElement('div');
    card.classList.add('card');
    card.dataset.index = library.length - 1;

    const name1 = document.createElement('h2');
    const author1 = document.createElement('h3');
    const pages1 = document.createElement('h3');
    const remove1 = document.createElement('button');

    name1.textContent = library[i].name;
    author1.textContent = 'by ' + library[i].author;
    pages1.textContent = library[i].pages + ' pages';
    remove1.textContent = 'Delete'

    card.append(name1, author1, pages1, remove1);

    const e = document.querySelector('.main');
    e.append(card);
    //placeholder for svg image for read or not

    //No return value
}

// Form asks for user to input name author pages and a read icon
function createForm(){
    const form = document.createElement('form');
    form.classList.add('forms');

    const nameLabel = document.createElement('label');
    nameLabel.for = 'name';
    nameLabel.textContent = 'Name:';
    const name = document.createElement('input');
    name.type = 'text';
    name.id = 'name';

    const authorLabel = document.createElement('label');
    nameLabel.for = 'author';
    nameLabel.textContent = 'Author:';
    const author = document.createElement('input');
    author.type = 'text';
    author.id = 'author';

    const pagesLabel = document.createElement('label');
    nameLabel.for = 'pages';
    nameLabel.textContent = 'No. of Pages:';
    
    const pages = document.createElement('input');
    pages.type = 'text';
    pages.id = 'pages';

    const read = document.createElement('input');
    read.type = 'checkbox';
    read.id = 'read';
    const readLabel = document.createElement('label');
    nameLabel.for = 'read';
    nameLabel.textContent = 'Have you read this book?';

    const submit = document.createElement('input');
    submit.type = 'submit';
    
    // submit.textContent = ''

    form.append(nameLabel, name, authorLabel, author, pagesLabel, pages,read,readLabel, submit);
    const e = document.querySelector('.window'); // change location other
    e.append(form);

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        let book = createBook(name.value, author.value, pages.value)
        addBookToLibrary(book);
        createCard(library.length-1);
        console.log(library.length);
    })
}

//Testing===============================
const book1 = new Book(`The Guest List: A Reese's Book Club Pick`,`Lucy Foley`, 336,true);
const book2 = new Book(`The Guest List: A Reese's Book Club Pick`,`Lucy Foley`, 336,false);
const book3 = new Book(`The Guest List: A Reese's Book Club Pick`,`Lucy Foley`, 336,false);

addBookToLibrary(book1);
addBookToLibrary(book2);
addBookToLibrary(book3);


addBookToLibrary(createBook(`naming`, `authoring`, 223, false));

console.log(library.length);
console.log(book1.name);
console.log(library[3]); // Expect naming authoring 223  false

removeBook(3);
console.log(library); // Expect 3 books


createCard(0); 
createCard(1);
createCard(2);//Expect show cards on main div

// book1.hasRead(); // Alert youve read it

createForm(); // Expect show a form on window div