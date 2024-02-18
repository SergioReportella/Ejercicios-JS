//En base al ejercicio anterior. Crea dinamicamente un elemento <p> por cada petición a la api que diga...'El nombre X tiene un Y porciento de ser de Z' etc etc.

//EJ: El nombre Abel tiene un 22 porciento de ser de ET y un 6 porciento de ser de MZ.

const baseUrl = 'https://api.nationalize.io?name=';

document.getElementById('consultButton').addEventListener('click', async () => {
    const inputValue = document.getElementById('nameInput').value;

    try {
        const response = await fetch(baseUrl + inputValue);

        if (response.ok) {
            const data = await response.json();
            console.log('Respuesta de la API:', data);

            const resultContainer = document.getElementById('resultContainer');
            resultContainer.innerHTML = '';

            data.country.forEach(({ country_id, probability }) => {
                const paragraph = document.createElement('p');
                paragraph.textContent = `El nombre ${inputValue} tiene un ${(probability * 100)} porciento de ser de ${country_id}.`;
                resultContainer.appendChild(paragraph);
            });
        } else {
            throw new Error('La respuesta de la red no fue válida');
        }
    } catch (error) {
        console.error('Error al obtener los datos:', error);
    }
});
