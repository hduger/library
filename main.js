const bookShelf = document.getElementById("book-grid")


let myLibrary = [
    {
        title: "Book",
        author: "author",
        numPages: 123,
        isRead: true,
    },
];

function Book(title, author, numPages, read) {
    this.title = title;
    this.author = author;
    this.numPages = numPages;
    this.read = false;
}

function rendBooks() {
    bookShelf.textContent = "";
    myLibrary.map((book, index) => {
        createActualBook(book, index)
    })

}

function saveBooks() {
    localStorage.setItem('library', JSON.stringify(myLibrary));
    rendBooks();
}

function addToLocalStorage() {
    myLibrary = JSON.parse(localStorage.getItem("library")) || [];
    saveBooks();
}

function addBookToLibrary(title, author, numPages, isRead) {
    myLibrary.push(new Book(title, author, numPages, isRead));
    saveBooks();
}

function deleteBook(index) {
    myLibrary.splice(index,1);
    saveBooks();
}

rendBooks(); 
// Code to open and close book form
document.querySelector(".bk-btn").addEventListener("click", function(){
    document.querySelector(".add-book-form").classList.add("active");
});


document.querySelector(".close-btn").addEventListener("click", function(){
    document.querySelector(".add-book-form").classList.remove("active");
});

document.addEventListener('keydown', (e) => {
    if(e.key === "Escape")
        document.querySelector(".add-book-form").classList.remove("active");
})

// Code to toggle read 
document.querySelector(".book-read").addEventListener("click", function () {
    if(document.querySelector(".book-read").innerHTML === "Read")
        document.querySelector(".book-read").innerHTML = "Not Read"
    else {
        document.querySelector(".book-read").innerHTML = "Read"
    }
});

// Code to remove book
document.querySelector(".remove-book").addEventListener("click", () =>{
    deleteBook();
})


function getBookInfo(){
    var title = document.getElementById('title').value;
    var author = document.getElementById('author').value;
    var numPages = document.getElementById('num-pages').value;
    var isRead = document.getElementById('is-read').checked;
    return new Book(title, author, numPages, isRead);
}

// Create the book card that goes in grid
function createActualBook(book, index){
    const bookCard = document.createElement('div');
    const bookTitle = document.createElement('p');
    const bookAuthor = document.createElement('p');
    const bookPages = document.createElement('p');
    const btnDiv = document.createElement('div');
    const readBtn = document.createElement('button');
    const removeBtn = document.createElement('button');
    

    bookCard.classList.add('new-book');
    bookCard.setAttribute("id", index);
    bookCard.setAttribute("key", index);
    bookTitle.classList.add('title');
    bookAuthor.classList.add('author');
    bookPages.classList.add('pages');
    btnDiv.classList.add('buttons');
    readBtn.classList.add('book-read');
    removeBtn.classList.add('remove-book');

    bookTitle.textContent = book.title;
    bookAuthor.textContent = book.author;
    bookPages.textContent =  `${book.numPages} Pages`;
    removeBtn.textContent = 'Remove Book';

    if (book.isRead){
        readBtn.textContent = 'Read';
    } else {
        readBtn.textContent = "Not Read";
    }

    bookCard.appendChild(bookTitle);
    bookCard.appendChild(bookAuthor);
    bookCard.appendChild(bookPages);
    btnDiv.appendChild(readBtn);
    btnDiv.appendChild(removeBtn);
    bookCard.appendChild(btnDiv);
    bookShelf.insertAdjacentElement("afterbegin" ,bookCard);

}



document.querySelector(".submit-book").addEventListener("click", () => {
    // getBookInfo(Book);
    // createBookEl();
    myLibrary.push(addBookToLibrary());
    
});

const updateGrid = () => {
    for (let book of myLibrary){
        createActualBook(book)
    }
}

