//Basandote en el ejercicio anterior. Crea un botón que elimine el último elemento de la lista.

const countries = [
    {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1'}, 
    {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2'},
    {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3'},
    {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4'},
    {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5'}
];

for(let country of countries){
        const div = document.createElement('div');

        const h4 = document.createElement('h4');
        h4.textContent = country.title;

        const img = document.createElement('img');
        img.src = country.imgUrl;

        div.appendChild(h4);
        div.appendChild(img);

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