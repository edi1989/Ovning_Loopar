var body = document.querySelector("body");

var div = document.createElement("div")

//I din Js-fil skapa en array med minst 5 st saker du tycker är kul.
var array = ['Badminton','Padel','Fotboll','Pingis','Simma']
arraylangd = array.length;

var listaUL = document.createElement("ul");

//Skriv en for loop som skriver ut din array till html-sidan som en lista <ul> med varje element i din array som en <li>
for (let i = 0; i < arraylangd; i++) {
    var listaLI = document.createElement("li");
    listaLI.innerHTML = array[i];
    listaUL.appendChild(listaLI);

    listaUL.appendChild(listaLI)
    div.appendChild(listaUL)
    body.appendChild(div)
}
