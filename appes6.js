class Book {
  constructor(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
  }
}

class UI {
  addBookToList(book) {
    const list = document.getElementById("book-list");
    //Create tr element
    const row = document.createElement("tr");
    //Insert cols
    row.innerHTML = `
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.isbn}</td>
        <td><a href="#" class="delete">x</a></td>
        `;

    list.appendChild(row);
  }

  showAlert(message, className) {
    //Create div
    const div = document.createElement("div");
    //Add classes
    div.className = `alert ${className}`;
    //Add text
    div.appendChild(document.createTextNode(message));
    //Get parent
    const container = document.querySelector(".container");
    //Get form
    const form = document.querySelector("#book-form");
    //Insert alert
    container.insertBefore(div, form);

    //Timeout after 2 sec
    setTimeout(function () {
      document.querySelector(".alert").remove();
    }, 2000);
  }

  deleteBook(target) {
    if (target.className === "delete") {
      target.parentElement.parentElement.remove();
    }
  }

  clearFields() {
    document.getElementById("title").value = "";
    document.getElementById("author").value = "";
    document.getElementById("isbn").value = "";
  }
}

//Local Storage Class
class Store {
  static getBooks() {
    let books;
    if (localStorage.getItem('books') === null) {
      books = [];
    } else {
      books = JSON.parse(localStorage.getItem('books'));
    }

    return books;
  }

  static displayBooks() {

  }

  static addBook(book) {
    const books = Store.getBooks();

    books.push(book);

    localStorage.setItem('books', JSON.stringify(books));
  }

  static removeBook() {

  }
}

//Event Listeners for add book
document.getElementById("book-form").addEventListener("submit", function (e) {
  //Get form values
  const title = document.getElementById("title").value;
  const author = document.getElementById("author").value;
  const isbn = document.getElementById("isbn").value;

  //Instantiate book
  const book = new Book(title, author, isbn);

  //Instantiate ui
  const ui = new UI();

  //Validate
  if (title === "" || author === "" || isbn === "") {
    //Error alert
    ui.showAlert("Please, fill in all fields", "error");
  } else {
    //Add book to list
    ui.addBookToList(book);

    //Add book to LS
    Store.addBook(book);

    //Success Alert
    ui.showAlert("Book added!", "success");

    //Clear fields
    ui.clearFields();
  }

  e.preventDefault();
});

//Event listener for delete book
document.getElementById("book-list").addEventListener("click", function (e) {
  //Instantiate ui
  const ui = new UI();

  //Delete book
  ui.deleteBook(e.target);

  //Show Alert
  ui.showAlert("Book deleted!", "success");

});