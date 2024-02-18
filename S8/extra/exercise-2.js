const url = 'http://localhost:3000/diary'
const divContainer = document.querySelector('#diario-container');

const obtenerDatosdiario = async() => {
    try { 
        const response = await fetch(url);
        const data = await response.json();
        const sortedData = dateComparator(data);
        createElements(sortedData);

    } catch (error) {
        console.log(error);
    }
}

function dateComparator(data){
    return data.sort((a,b) => new Date(a.date) - new Date(b.date));
};

function createElements(data){
    for( const datum of data){
        const nota = document.createElement('div');
        nota.classList.add(datum.id);
        divContainer.appendChild(nota);

        const title = document.createElement('h3');
        title.textContent = datum.title;
        nota.appendChild(title);

        const dataNota = document.createElement('h5');
        dataNota.textContent = datum.date;
        nota.appendChild(dataNota);

        const description = document.createElement('p');
        description.textContent = datum.description;
        nota.appendChild(description);

        const button = document.createElement('button');
        button.textContent = 'Eliminar';
        button.addEventListener('click', () => eliminarNota(nota));
        nota.appendChild(button);
    }

};

function eliminarNota(notaElement){
    notaElement.remove();
}

obtenerDatosdiario();
