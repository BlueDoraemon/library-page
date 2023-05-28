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


//Each card has a header name author pages, a read icon and a remove button
function createCard(i) {
    const card = document.createElement('div');
    card.classList.add('card');
    card.dataset.index = i;

    const name1 = document.createElement('h2');
    const author1 = document.createElement('h3');
    const pages1 = document.createElement('h3');
    const remove1 = document.createElement('button');
    const readPage = document.createElement('div');
    readPage.classList.add('triangle');
    const text = document.createElement('h5');

    name1.textContent = library[i].name;
    author1.textContent = 'by ' + library[i].author;
    pages1.textContent = library[i].pages + ' pages';
    remove1.textContent = 'Delete';
    text.textContent = 'Finished? -->'
    if (library[i].read) {
        card.classList.add('read');
        text.textContent = `You've read it! Undo? -->`;
    }
  

    card.append(name1, author1, pages1, remove1, readPage, text);

    const e = document.querySelector('.main');
    e.appendChild(card);

    //placeholder for svg image for read or not
    remove1.addEventListener('click', () =>{
        e.removeChild(card);
        removeBook(i);
        console.log(library) //test expect less 1
    })

    //add click for read unread;
    readPage.addEventListener('click', (e) =>{
        card.classList.toggle('read');
        if (library[i].read) {
            text.textContent = `Finished? -->`;
            library[i].read = false;
        } 
        else {
            library[i].read = true;
            text.textContent = `You've read it! Undo? -->`;
        }
    })
    //No return value
}

// Form asks for user to input name author pages and a read icon
function createForm(){
    let inputs = [];

    const form = document.createElement('form');
    form.classList.add('forms');

    const nameLabel = document.createElement('label');
    nameLabel.for = 'name';
    nameLabel.textContent = 'Name:';
    const name = document.createElement('input');
    name.id = 'name';
    inputs.push(name);
    // name.required = true;

    const authorLabel = document.createElement('label');
    authorLabel.for = 'author';
    authorLabel.textContent = 'Author:';
    const author = document.createElement('input');
    inputs.push(author);
    author.id = 'author';

    const pagesLabel = document.createElement('label');
    pagesLabel.for = 'pages';
    pagesLabel.textContent = 'No. of Pages:';
    
    const pages = document.createElement('input');
    inputs.push(pages);
    pages.id = 'pages';

    const read = document.createElement('input');
    read.type = 'checkbox';
    read.id = 'read';
    const readLabel = document.createElement('label');
    readLabel.for = 'read';
    readLabel.textContent = 'Have you read this book?';

    const submit = document.createElement('input');
    submit.type = 'submit';
    
    inputs.forEach((input) => {
        input.setAttribute('required', true);
        input.type = 'text';
      });

    form.append(nameLabel, name, authorLabel, author, pagesLabel, pages,readLabel,read, submit);
    const et = document.querySelector('.window'); // change location other
    et.appendChild(form);
    const x = document.createElement('button'); // close button
    et.appendChild(x);
    x.textContent = "X";

    x.addEventListener('click',()=> {
        et.removeChild(form);
        et.removeChild(x);
    })


    form.addEventListener('submit', (e) => {
        e.preventDefault();
        let book = createBook(name.value, author.value, pages.value, read.checked)
        addBookToLibrary(book);
        createCard(library.length-1);
        console.log(library.length);//testing
        et.removeChild(form);
        et.removeChild(x);
    })
}


const add = document.querySelector('#add');
add.addEventListener('click', ()=>createForm());


//Testing===============================
const book1 = new Book(`The Midnight Library`,`Matt Haig`, 304,true);
const book2 = new Book(`Educated: A Memoir`,`Tara Westover`, 400,false);
const book3 = new Book(`The Alchemist`,`Paulo Coelho`, 208,false);

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


//hover over add button
// createForm(); // Expect show a form on window div