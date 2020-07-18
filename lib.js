let myLibrary = [];
let prop = ["title", "author", "pages", "read"]






function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;

}

Book.prototype.info = function(){
    return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read}`;
    
};

function addBookToLibrary(){

    let toAdd = prompt().trim();
    myLibrary.push(toAdd);
}

function render(){
    
    let table = document.querySelector(".table");
    
    for (let i = 0; i < myLibrary.length; i++) {
        
        let row = document.createElement("tr")
        row.classList.add(`row${i}`)
        
        for (let j = 0; j < 4; j++) {
            
            let data = document.createElement("td");
            data.textContent = myLibrary[i][prop[j]];
            data.classList.add(`data${j}`)
            row.appendChild(data);
        }
        let readtd = document.createElement("td");
        let buttd = document.createElement("button");
        buttd.textContent = "Status";
        buttd.classList.add(`status${i}`);
        buttd.classList.add("status");
        readtd.appendChild(buttd);
        
        let deltd = document.createElement("td");
        let butdel = document.createElement("button");
        butdel.textContent = "X";
        butdel.classList.add(`del${i}`);
        butdel.classList.add("delete");
        deltd.appendChild(butdel);

        row.appendChild(readtd);
        row.appendChild(deltd);
        table.appendChild(row);
        
    }
}

//test
let Harry = new Book("Harry Potter", "JK", "400", "read");
myLibrary.push(Harry);

let Lotr = new Book("Lotr", "Tolken", "400", "read");
myLibrary.push(Lotr);

render();