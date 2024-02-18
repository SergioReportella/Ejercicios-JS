//Utiliza esta url de la api Agify 'https://api.agify.io?name=michael' para hacer un .fetch() y recibir los datos que devuelve. Imprimelo mediante un console.log(). Para ello, es necesario que crees un .html y un .js

async function tarerAgify() {
    const apiUrl = 'https://api.agify.io?name=michael';

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        console.log('datos de Agify:', data);
        pintarAgify(data);
    } catch (error) {
        console.error('error al obtener los datos de Agify:', error);
    }
}

function pintarAgify(data){
    const agifyData = document.querySelector('#datos');

    const h2 = document.createElement('h2');
    h2.textContent = data.name;
    agifyData.appendChild(h2);

    const age = document.createElement('p');
    age.classList.add('age');
    age.textContent = `Edad: ${data.age}`;
    agifyData.appendChild(age);

    const count = document.createElement('p');
    count.classList.add('count');
    count.textContent = `Data: ${data.count}`;
    agifyData.appendChild(count);
}

const button$$ = document.querySelector('#fetchButton').addEventListener('click', tarerAgify);