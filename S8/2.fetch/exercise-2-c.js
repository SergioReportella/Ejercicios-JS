//En base al ejercicio anterior, crea un botón con el texto 'X' para cada uno de los p que hayas insertado y que si el usuario hace click en este botón eliminemos el parrafo asociado.

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

                const deleteButton = document.createElement('button');
                deleteButton.textContent = 'X';
                deleteButton.addEventListener('click', () => {
                    resultContainer.removeChild(paragraph);
                });

                paragraph.appendChild(deleteButton);
                resultContainer.appendChild(paragraph);
            });
        } else {
            throw new Error('La respuesta de la red no fue válida');
        }
    } catch (error) {
        console.error('Error al obtener los datos:', error);
    }
});