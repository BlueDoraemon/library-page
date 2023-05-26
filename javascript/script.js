let library = []; // array of books

function Book(name, author, pages, read){
    this.name = name;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.hasRead() = () => {
        (read) ? alert(`You've read it`) : alert(`You haven't read it`);
    };

};

function addBookToLibrary(book) {
    library.push(this);
    console.log(library);
}

function removeBook(int) {
    library.splice(int,1);
}


function createBook(name, author, pages, read){
    const book = new Book(name, author, pages, read);
}
const book1 = new Book(`The Guest List: A Reese's Book Club Pick`,`Lucy Foley`, 336,false);
const book2 = new Book(`The Guest List: A Reese's Book Club Pick`,`Lucy Foley`, 336,false);
const book3 = new Book(`The Guest List: A Reese's Book Club Pick`,`Lucy Foley`, 336,false);
//make a function that creates a book



//testing
addBookToLibrary(book1);
addBookToLibrary(book2);
addBookToLibrary(book3);

console.log(library);