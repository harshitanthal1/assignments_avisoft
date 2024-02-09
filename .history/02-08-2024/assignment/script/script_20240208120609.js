// Book object constructor
function Book(id, title, author) {
    this.id = id;
    this.title = title;
    this.author = author;
    this.isBorrowed = false; // Initially, book is available
}

// Library array to store all book objects
let library = [];

// Function to add a book to the library
function addBook(id, title, author) {
    const newBook = new Book(id, title, author);
    library.push(newBook);
}

// Function to borrow a book
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

// Function to return a borrowed book
function returnBook(id) {
    const book = library.find(book => book.id === id);
    if (book) {
        book.isBorrowed = false;
        console.log(`${book.title} by ${book.author} has been returned.`);
    } else {
        console.log('Book not found.');
    }
}

// Function to list available books
function listAvailableBooks() {
    console.log('Available Books:');
    library.forEach(book => {
        if (!book.isBorrowed) {
            console.log(`${book.title} by ${book.author}`);
        }
    });
}

// Function to search for a book by its title
function searchBook(title) {
    return library.find(book => book.title === title) || null;
}

// Example usage:
addBook(1, 'The Great Gatsby', 'F. Scott Fitzgerald');
addBook(2, 'To Kill a Mockingbird', 'Harper Lee');
addBook(3, '1984', 'George Orwell');

borrowBook(1); // Borrowing a book
borrowBook(1); // Trying to borrow the same book again
returnBook(1); // Returning the borrowed book
borrowBook(2); // Borrowing another book

listAvailableBooks(); // Listing available books

console.log(searchBook('1984')); // Searching for a book
console.log(searchBook('Moby Dick')); // Searching for a non-existent book
