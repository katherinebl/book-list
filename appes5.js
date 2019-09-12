//Book Constructor
function Book(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
}

//UI Constructor, add, delete, show alert...
function UI() { }

//Add book to list
UI.prototype.addBookToList = function (book) {
    const list = document.getElementById('book-list');
    //Create tr element
    const row = document.createElement('tr');
    //Insert cols
    row.innerHTML = `
    <td>${book.title}</td>
    <td>${book.author}</td>
    <td>${book.isbn}</td>
    <td><a href="#" class="delete">x</a></td>
    `;

    list.appendChild(row);
}

//Event Listeners
document.getElementById('book-form').addEventListener('submit',
    function (e) {
        //Get form values
        const title = document.getElementById('title').value;
        const author = document.getElementById('author').value;
        const isbn = document.getElementById('isbn').value;

        //Instantiate book
        const book = new Book(title, author, isbn);

        //Instantiate ui
        const ui = new UI();

        //Add book to list 
        ui.addBookToList(book);

        e.preventDefault();
    });