
const bookShelf = document.getElementById("book-grid");



let myLibrary = [];


const potter = new Book('Harry', 'JK Rowling', 545, 'Read')

function Book(title, author, numPages, read, position) {
    this.title = title;
    this.author = author;
    this.numPages = numPages;
    this.read = read;
    this.position = position;

    myLibrary.push(this);
}

function rendBooks() {
    myLibrary.forEach(function(book){
    // Book Container
    const bookCard = document.createElement('div');
    // Book Information
    const bookTitle = document.createElement('p');
    const bookAuthor = document.createElement('p');
    const bookPages = document.createElement('p');
    // Buttons for read and remove
    // const btnDiv = document.createElement('div');
    const readBtn = document.createElement('button');
    const removeBtn = document.createElement('button');
    const bookIndex = myLibrary.indexOf(book);
    
    // Class and ID added to book container
    bookCard.classList.add('new-book');
    bookCard.setAttribute("id", bookIndex);
    //Classes added to book information 
    bookTitle.classList.add('title');
    bookAuthor.classList.add('author');
    bookPages.classList.add('pages');
    // Classes added to buttons 
    // btnDiv.classList.add('buttons');
    readBtn.classList.add('book-read');
    removeBtn.classList.add('remove-book');
    
    // Text content set 
    bookTitle.innerText = `Title: ${book.title}`;
    bookAuthor.innerText = `Author: ${book.author}`;
    bookPages.innerText =  `${book.numPages} Pages`;
    removeBtn.innerText = 'Remove Book';
    readBtn.innerText = book.read;
    readBtn.addEventListener('click', readNotRead);
    removeBtn.addEventListener('click', deleteBook);
    // if (book.isRead){
    //     readBtn.innerText = 'Read';
    // } else {
    //     readBtn.innerText = "Not Read";
    // }
    // Code to toggle read 


    bookCard.appendChild(bookTitle);
    bookCard.appendChild(bookAuthor);
    bookCard.appendChild(bookPages);
    // btnDiv.appendChild(readBtn);
    // btnDiv.appendChild(removeBtn);
    // bookCard.appendChild(btnDiv);
    bookCard.appendChild(readBtn);
    bookCard.appendChild(removeBtn);
    bookShelf.appendChild(bookCard);

    });

}
rendBooks();

// Open form to add a new book
function addBookForm() {
    document.querySelector(".add-book-form").classList.add("active");
}

function closeBookForm()  {
    document.querySelector(".add-book-form").classList.remove("active");
}

function makeNewBook(){
    const newtTitle = document.getElementById('title').value;
    const newAuthor = document.getElementById('author').value;
    const newNumPages = document.getElementById('num-pages').value;
    const newRead = document.querySelector('input[name="isReadBtn"]:checked').value;

    while(bookShelf.firstChild){
        bookShelf.removeChild(bookShelf.firstChild);
    }

    new Book(newtTitle, newAuthor, newNumPages, newRead);
    rendBooks();
    closeBookForm();
    document.getElementById("add-book-form").reset();
}

// Close the form using X button on form or esc key
document.querySelector(".close-btn").addEventListener("click", function(){
    document.querySelector(".add-book-form").classList.remove("active");
});

document.addEventListener('keydown', (e) => {
    if(e.key === "Escape")
        document.querySelector(".add-book-form").classList.remove("active");
})

// Code to toggle read 
function readNotRead() {
    this.innerText == "Read"? this.innerText = "Not Read" : this.innerText = "Read";

}

function deleteBook() {
    let bookID = this.parentElement.id;
    myLibrary.forEach(function(i){
        if (bookID == myLibrary.indexOf(i)){
            console.log(myLibrary.indexOf(i))
        myLibrary.splice(bookID, 1);
        }
    });
    this.parentElement.remove();
}
