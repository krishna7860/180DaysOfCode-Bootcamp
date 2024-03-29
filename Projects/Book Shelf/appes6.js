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
    // create element
    const row = document.createElement("tr");
    row.innerHTML = `<td>${book.title}</td>
                     <td>${book.author}</td>
                     <td>${book.isbn}</td>
                     <td><i></i><a href="#" class="delete">X</a></td>`;
    list.appendChild(row);
  }
  showAlert(message, className) {
    //   Create Div
    const div = document.createElement("div");
    // Add Classes
    div.className = `alert ${className}`;
    //   Add text
    div.appendChild(document.createTextNode(message));
    //   Get Parent
    const container = document.querySelector(".container");
    //   Get Form
    const form = document.querySelector("#book-form");
    //   Insert alert
    container.insertBefore(div, form);
    //   Timeout
    setTimeout(function() {
      document.querySelector(".alert").remove();
    }, 3000);
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

// Local Storage Class
class Store {
  static getBooks() {
    let books;
    if (localStorage.getItem("books") === null) {
      books = [];
    } else {
      books = JSON.parse(localStorage.getItem("books"));
    }
    return books;
  }
  static displayBooks() {
    const books = Store.getBooks();

    books.forEach(function(book) {
      const ui = new UI();
      ui.addBookToList(book);
    });
  }
  static addBook(book) {
    const books = Store.getBooks();
    books.push(book);

    localStorage.setItem("books", JSON.stringify(books));
  }
  static removeBook(isbn) {
    const books = Store.getBooks();
    books.forEach(function(book, index) {
      if (book.isbn === isbn) {
        books.splice(index, 1);
      }
    });
    localStorage.setItem("books", JSON.stringify(books));
  }
}
document.addEventListener("DOMContentLoaded", function() {
  Store.displayBooks();
});
document.getElementById("book-form").addEventListener("submit", function(e) {
  // Get Form Values
  const title = document.getElementById("title").value,
    author = document.getElementById("author").value,
    isbn = document.getElementById("isbn").value;
  //Instanciate Book
  const book = new Book(title, author, isbn);
  //Instanciate UI
  const ui = new UI();

  //Validate
  if (title === "" || author === "" || isbn === "") {
    ui.showAlert("Please Fill in the Fields ", "error");
  } else {
    ui.addBookToList(book);
    ui.showAlert("Book Added Successfully", "success");
    // Add to local Storage
    Store.addBook(book);
    //   Clear fields
    ui.clearFields();
  }

  e.preventDefault();
});

// Event Listener For Delete
document.getElementById("book-list").addEventListener("click", function(e) {
  const ui = new UI();
  // Delete Book
  ui.deleteBook(e.target);
  // Remove from localstorage
  Store.removeBook(e.target.parentElement.previousElementSibling.innerText);
  // Show Message
  ui.showAlert("Book Removed", "success");
  e.preventDefault();
});
