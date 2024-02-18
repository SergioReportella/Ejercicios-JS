//Añade un botón a tu html con el id btnToClick y en tu javascript añade el evento click que ejecute un console log con la información del evento del click

const button = document.createElement('button');
button.id = 'btnToClick';
button.innerHTML = 'click'

document.body.appendChild(button);

button.addEventListener('click', function(event) {
    console.log('click', event);
});
