//Dado el siguiente javascript y html. Añade la funcionalidad necesaria usando fetch() para hacer una consulta a la api cuando se haga click en el botón, pasando como parametro de la api, el valor del input.

/*```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <input type="text">
    <button>Consultar</button>
</body>
</html>
```*/

const baseUrl = 'https://api.nationalize.io?name=';

document.getElementById('consultButton').addEventListener('click', async () => {
    const inputValue = document.getElementById('nameInput').value;

    try {
        const response = await fetch(baseUrl + inputValue);

        if (response.ok) {
            const data = await response.json();
            console.log('Respuesta de la API:', data);
        } else {
            throw new Error('La respuesta de la red no fue válida');
        }
    } catch (error) {
        console.error('Error al obtener los datos:', error);
    }
});