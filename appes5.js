//Book Constructor
function Book(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
}

//UI Constructor, add, delete, show alert...
function UI() { }

//Event Listeners
document.getElementById('book-form').addEventListener('submit',
    function (e) {
        //Get form values
        const title = document.getElementById('title').value;
        const author = document.getElementById('author').value;
        const isbn = document.getElementById('isbn').value;

        console.log(title, author, isbn);

        e.preventDefault();
    });