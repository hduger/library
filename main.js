
document.querySelector(".bk-btn").addEventListener("click", function(){
    document.querySelector(".add-book-form").classList.add("active");
});


document.querySelector(".close-btn").addEventListener("click", function(){
    document.querySelector(".add-book-form").classList.remove("active");
});



let myLibrary = [];

function Book(title, author, numPages, read) {
    this.title = title;
    this.author = author;
    this.numPages = numPages;
    this.read = read;
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

function addBookToLibrary() {
    document.querySelector(".book-grid").add(FormData)
}
