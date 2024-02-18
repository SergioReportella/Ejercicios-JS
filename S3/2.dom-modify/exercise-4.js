//Inserta dinamicamente con javascript en un html una p con el texto 'Soy dinámico!'.

const nuevoP = document.createElement('p');
nuevoP.textContent = 'Soy dinámico';

document.body.appendChild(nuevoP);