//Basandote en el ejercicio anterior. Crea un botón para cada uno de los elementos de las listas que elimine ese mismo elemento del html.

const countries = [
    {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1'}, 
    {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2'},
    {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3'},
    {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4'},
    {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5'}
];

for(let country of countries) {
        const div = document.createElement('div');

        const h4 = document.createElement('h4');
        h4.textContent = country.title;

        const img = document.createElement('img');
        img.src = country.imgUrl;

        const buttonInterno = document.createElement('button');
        buttonInterno.textContent = 'Eliminar';

        div.appendChild(h4);
        div.appendChild(img);
        div.appendChild(buttonInterno);

        buttonInterno.addEventListener('click', () => {
            document.body.removeChild(div);
        });

        document.body.appendChild(div);
};


const button = document.querySelector('button');
button.addEventListener('click', () => {
    const divs = document.querySelectorAll('div');

    if(divs.length === 0) {
        return;
    }

    const divAEliminar = divs[divs.length -1];
    document.body.removeChild(divAEliminar);
});