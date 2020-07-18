let myLibrary = [];
let prop = ["title", "author", "pages", "read"]

//main form
const statusButton = document.querySelector(".mainForm");
statusButton.style.display = "none";

// add button
const addBook = document.querySelector(".btn");

const table = document.querySelector(".table");





// Book constructor
function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;

}

Book.prototype.info = function(){
    return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read}`;
    
};
// Add book to the Library
function addBookToLibrary(a,b,c,d="not read"){

    let toAdd = new Book(a,b,c,d);
    myLibrary.push(toAdd);
    render();
}
// show/hide form
function editForm(){
    
    
    if(statusButton.style.display === "none"){
        statusButton.style.display = "block";
        addBook.textContent = "Done";
        
        
    }else{
        statusButton.style.display = "none";
        addBook.textContent = "Add Book";
    }

}

// Remove all tr and td nodes
function removeAll(){

    
        while(table.firstChild){
            table.removeChild(table.firstChild);
        }
    
}

//creates table data based off library data
function render(){
    removeAll();
    
        addBook.addEventListener("click", editForm);
    let subButton = document.querySelector(".subot");
        subButton.addEventListener("click", submitForm);
   
    
    for (let i = 0; i < myLibrary.length; i++) {
        
        let row = document.createElement("tr")
        row.classList.add(`row${i}`)
        
        for (let j = 0; j < 4; j++) {
            
            let tableData = document.createElement("td");
            tableData.textContent = myLibrary[i][prop[j]];
            tableData.classList.add(`data${j}`)
            tableData.classList.add(`status${i}`)
            row.appendChild(tableData);
        }
        let readTd = document.createElement("td");
        let buttonRead = document.createElement("button");
        buttonRead.textContent = "O";
        buttonRead.classList.add(`status${i}`);
        buttonRead.classList.add("status");
        buttonRead.addEventListener("click", update);
        readTd.appendChild(buttonRead);
        
        let delTd = document.createElement("td");
        let buttonDelete = document.createElement("button");
        buttonDelete.textContent = "X";
        buttonDelete.classList.add(`del${i}`);
        buttonDelete.classList.add("delete");
        buttonDelete.addEventListener("click", remove);
        delTd.appendChild(buttonDelete);

        row.appendChild(readTd);
        row.appendChild(delTd);
        table.appendChild(row);
        
        
        
    }
    
        
    
}

// update read status
function update(){
    let status = this.classList[0];
    let index = status.slice(-1);
    index *= 1;

    if(myLibrary[index].read === "read"){
        myLibrary[index].read = "not read";
    }else{
        myLibrary[index].read = "read";
    }
    let node = document.querySelectorAll(`.${status}`);
   render();

}
// removes a book from table/library
function remove(){
    let del = this.classList[0];
    let index = del.slice(-1);
    index *= 1;
    myLibrary.splice(index, 1);
    render();


}

// what happens when form is submitted
function submitForm(){


   

    let author = document.querySelector("#name").value;
    let title = document.querySelector("#title").value;
    let pg = document.querySelector("#pages").value;
    let read = document.querySelector("#read").value;
    


   
addBookToLibrary(title, author, pg, read);

clearForm();

    
}
// clears the form
function clearForm(){
    document.querySelector("#name").value = "";
    document.querySelector("#title").value = "";
    document.querySelector("#pages").value = "";
    document.querySelector("#read").value = "";
    }

//test
let Harry = new Book("Harry Potter", "JK", "400", "read");
myLibrary.push(Harry);

let Lotr = new Book("Lotr", "Tolken", "400", "read");
myLibrary.push(Lotr);

let Lotr2 = new Book("Lotr2", "Tolken", "450", "not read");
myLibrary.push(Lotr2);

let Lotr3 = new Book("Lotr3", "Tolken", "600", "not read");
myLibrary.push(Lotr3);

window.onload = function () { 
    render();
  };