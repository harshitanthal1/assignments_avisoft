function Book(id, title, author) {
    this.id = id;
    this.title = title;
    this.author = author;
    this.isBorrowed = false; 
}

let library = [];

function addBook(id, title, author) {
    const newBook = new Book(id, title, author);
    library.push(newBook);
}

function borrowBook(id) {
    const book = library.find(book => book.id === id);
    if (book) {
        if (!book.isBorrowed) {
            book.isBorrowed = true;
            console.log(`${book.title} by ${book.author} has been borrowed.`);
        } else {
            console.log(`${book.title} by ${book.author} is already borrowed.`);
        }
    } else {
        console.log('Book not found.');
    }
}

function returnBook(id) {
    const book = library.find(book => book.id === id);
    if (book) {
        book.isBorrowed = false;
        console.log(`${book.title} by ${book.author} has been returned.`);
    } else {
        console.log('Book not found.');
    }
}

function listAvailableBooks() {
    console.log('Available Books:');
    library.forEach(book => {
        if (!book.isBorrowed) {
            console.log(`${book.title} by ${book.author}`);
        }
    });
}

function searchBook(title) {
    return library.find(book => book.title === title) || null;
}

addBook(1, 'Introduction to Automata Languages & Computation', 'A.V. AHO, J. E. Hopcreft & J.D. Ullman');
addBook(2, 'Fundamentals of Computer Algorithms.', 'Ellis Horowitz, Sartaj Sahni.');
addBook(3, ' Data Communication', 'William L. Schweber');

borrowBook(1);
borrowBook(1); 
returnBook(1); 
borrowBook(2); 

listAvailableBooks(); 

console.log(searchBook('1984')); 
console.log(searchBook('Moby Dick'));
