const list = document.getElementById('list');
const title = document.getElementById('title');
const author = document.getElementById('author');
let books = [];
if(localStorage.getItem("note")){
  books = JSON.parse(localStorage.getItem("note"));
  displayBooks();
}
button.addEventListener("click", function() {
  const booklist = {
    titleName: title.value,
    authorName: author.value
  };
  books.push(booklist);
  title.value = '';
  author.value = '';
  displayBooks();
  storedData();
});
function displayBooks() {
  list.innerHTML = ''; 
  for (let i = 0; i < books.length; i++) {
    const bookContainer = document.createElement('div');
    bookContainer.id="container";
    bookContainer.classList.add('book-item');
    const titleElement = document.createElement('h3');
    titleElement.textContent = books[i].titleName;
    const authorElement = document.createElement('h3');
    authorElement.textContent = books[i].authorName;
    const removeButton = document.createElement('button');
    removeButton.textContent = 'Remove';
    removeButton.id = "reset";
    removeButton.addEventListener('click', function() {
     removeBook(i);
    });
    bookContainer.appendChild(titleElement);
    bookContainer.appendChild(authorElement);
    bookContainer.appendChild(removeButton);
    list.appendChild(bookContainer);
  }
  applyAlternateColors();
}
function applyAlternateColors() {
  const bookItems = document.querySelectorAll('.book-item');
  bookItems.forEach((item, index) => {
    item.classList.remove('alternate-color'); 

    if (index % 2 !== 0) {
      item.classList.add('alternate-color'); 
    }
  });
}
function removeBook(index) {
  books.splice(index, 1);
    displayBooks();
    storedData();
}
function storedData(){
  const getData = JSON.stringify(books);
localStorage.setItem("note",getData);
}

