//Inserta dinamicamente en un html un div que contenga una p con javascript.

let nuevoDiv = document.createElement('div');
let nuevoP = document.createElement('p');
let nuevoTexto = document.createTextNode('Nuevo texto');

nuevoP.appendChild(nuevoTexto);
nuevoDiv.appendChild(nuevoP);
document.body.appendChild(nuevoDiv);

 