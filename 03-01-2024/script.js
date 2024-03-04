document.addEventListener('DOMContentLoaded', () => {
    const bookList = document.getElementById('bookList');
    const addBookForm = document.getElementById('addBookForm');
    
    const fetchBooks = () => {
        fetch('/books')
            .then(response => response.json())
            .then(books => {
                bookList.innerHTML = '';
                books.forEach(book => {
                    const bookDiv = document.createElement('div');
                    bookDiv.classList.add('book');
                    bookDiv.innerHTML = `<strong>${book.title}</strong> by ${book.author} - ${book.isBorrowed ? 'Borrowed' : 'Available'}`;
                    bookList.appendChild(bookDiv);
                });
            });
    };
    
    fetchBooks();
    
    addBookForm.addEventListener('submit', event => {
        event.preventDefault();
        const title = document.getElementById('title').value;
        const author = document.getElementById('author').value;
        fetch('/books', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ title, author })
        })
        .then(() => {
            fetchBooks();
            document.getElementById('title').value = '';
            document.getElementById('author').value = '';
        });
    });
});
