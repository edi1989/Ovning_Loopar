var body = document.querySelector("body");

var div = document.createElement("div")
var array = ['Badminton','Padel','Fotboll','Pingis','Simma']
arraylangd = array.length;
var listaUL = document.createElement("ul");

for (let i = 0; i < arraylangd; i++) {
    var listaLI = document.createElement("li");
    listaLI.innerHTML = array[i];
    listaUL.appendChild(listaLI);

    listaUL.appendChild(listaLI)
    body.appendChild(listaUL)
}