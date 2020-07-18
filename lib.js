let myLibrary = [];
let prop = ["title", "author", "pages", "read"]

//main form
const statusButton = document.querySelector(".mainForm");
statusButton.style.display = "none";

// add button
const addBook = document.querySelector(".btn");




function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;

}

Book.prototype.info = function(){
    return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read}`;
    
};

function addBookToLibrary(a,b,c,d="not read"){

    let toAdd = new Book(a,b,c,d);
    myLibrary.push(toAdd);
    render();
}

function editForm(){
    
    
    if(statusButton.style.display === "none"){
        statusButton.style.display = "block";
        addBook.textContent = "Done";
        
        
    }else{
        statusButton.style.display = "none";
        addBook.textContent = "Add Book";
    }

}

function removeAll(){

    let table = document.querySelector(".table");
        while(table.firstChild){
            table.removeChild(table.firstChild);
        }
    
}

function render(){
    removeAll();
    let formButton = document.querySelector(".btn");
        formButton.addEventListener("click", editForm);
    let subButton = document.querySelector(".subot");
        subButton.addEventListener("click", submitForm);
    let table = document.querySelector(".table");
    
    for (let i = 0; i < myLibrary.length; i++) {
        
        let row = document.createElement("tr")
        row.classList.add(`row${i}`)
        
        for (let j = 0; j < 4; j++) {
            
            let data = document.createElement("td");
            data.textContent = myLibrary[i][prop[j]];
            data.classList.add(`data${j}`)
            data.classList.add(`status${i}`)
            row.appendChild(data);
        }
        let readtd = document.createElement("td");
        let buttd = document.createElement("button");
        buttd.textContent = "O";
        buttd.classList.add(`status${i}`);
        buttd.classList.add("status");
        buttd.addEventListener("click", update);
        readtd.appendChild(buttd);
        
        let deltd = document.createElement("td");
        let butdel = document.createElement("button");
        butdel.textContent = "X";
        butdel.classList.add(`del${i}`);
        butdel.classList.add("delete");
        butdel.addEventListener("click", remove);
        deltd.appendChild(butdel);

        row.appendChild(readtd);
        row.appendChild(deltd);
        table.appendChild(row);
        
        
        
    }
    
        
    //add book 
}

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

function remove(){
    let del = this.classList[0];
    let index = del.slice(-1);
    index *= 1;
    myLibrary.splice(index, 1);
    render();


}


function submitForm(){


   

    let author = document.querySelector("#name").value;
    let title = document.querySelector("#title").value;
    let pg = document.querySelector("#pages").value;
    let read = document.querySelector("#read").value;
    


   
addBookToLibrary(title, author, pg, read);

clearForm();

    
}

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