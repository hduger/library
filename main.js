// Code to open and close book form
document.querySelector(".bk-btn").addEventListener("click", function(){
    document.querySelector(".add-book-form").classList.add("active");
});


document.querySelector(".close-btn").addEventListener("click", function(){
    document.querySelector(".add-book-form").classList.remove("active");
});

// Code to toggle read 
document.querySelector(".book-read").addEventListener("click", function () {
    if(document.querySelector(".book-read").innerHTML === "Read")
        document.querySelector(".book-read").innerHTML = "Not Read"
    else {
        document.querySelector(".book-read").innerHTML = "Read"
    }
});

// Code to remove book
// const e = document.querySelector(".remove-book").addEventListener("click", function(){
//     document.querySelector("book-grid").removeChild(".new-book");
// })

const bookShelf = document.getElementById("book-grid")


let myLibrary = [];

function Book(title, author, numPages, read) {
    this.title = title;
    this.author = author;
    this.numPages = numPages;
    this.read = false;
    this.info = function() {
        if (read===true){
            return (`${title} by ${author}, ${numPages} pages, has been read`);
        }else {
            return (`${title} by ${author}, ${numPages} pages, has not been read`);
        }
    }
}

// const theHobbit = new Book('The Hobbit', "J.R.R. Tolkien", 295, true)

// console.log(theHobbit.info());

const getBookInfo = () => {
    const title = document.getElementById('title');
    const author = document.getElementById('author');
    const numPages = document.getElementById('num-pages');
    const isRead = document.getElementById('is-read');
    return new Book(title, author, numPages, read);
}

function addBookToLibrary() {
    
}
