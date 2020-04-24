let library = new Array();

function Book(name, author, pages, read) {
  this.name = name;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

const name = document.querySelector("#name");
const author = document.querySelector("#author");
const pages = document.querySelector("#pages");
const read = document.querySelector("#read");
const addbooks = document.querySelector("#submit");
const booktable = document.getElementsByTagName("tbody")[0];

addbooks.addEventListener("click", addBooksToLibrary);

function addBooksToLibrary() {
  console.log("entering ......");
  library = localStorage.getItem("books")
    ? JSON.parse(localStorage.getItem("books"))
    : [];
  if (
    name.value.trim() == "" ||
    author.value.trim() == "" ||
    pages.value.trim() == ""
  ) {
    alert("please don't give empty values...");
  } else {
    //console.log(name.value, author.value, pages.value, read.value);
    console.log(read.checked);
    book = new Book(name.value, author.value, pages.value, read.checked);
    //console.log(book.name);
    library.push(book);
    localStorage.setItem("books", JSON.stringify(library));
    renderBook(book.name, book.author, book.pages, book.read);
  }
}

function renderBook(name, author, pages, read) {
  console.log(applystatus(read));
  const datatag = `
    <tr>
            <td>${name}</td>
            <td>${author}</td>
            <td>${pages}</td>
            <td>${applystatus(read)}</td>
            <td><button class="remove" value=${name}>Delete</button></td>
          </tr>
    `;
  var newRow = booktable.insertRow(booktable.rows.length);
  newRow.innerHTML = datatag;
}

function renderBooks() {
  totalbooks = JSON.parse(localStorage.getItem("books"));

  if (totalbooks) {
    for (let i = 0; i < totalbooks.length; i++) {
      const { name, author, pages, read } = totalbooks[i];
      console.log(name);
      const datatag = `
    <tr>
            <td>${name}</td>
            <td>${author}</td>
            <td>${pages}</td>
            <td>${applystatus(read)}</td>
             <td><button class="remove" value=${name} onclick="removeBook(value)" >Delete</button></td>
          </tr>
    `;
      var newRow = booktable.insertRow(booktable.rows.length);
      newRow.innerHTML = datatag;
    }
  }
}
function removeBook(but) {
  console.log("hello");
}
function applystatus(read) {
  if (read) {
    return "read";
  } else {
    return "unread";
  }
}
console.log(but);
const remove = document.querySelector(".remove");
nam = remove.parentNode.parentNode.children[0].innerText;
console.log(nam);
