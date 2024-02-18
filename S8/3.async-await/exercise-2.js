//Convierte la siguiente función con un fetch utilizando async-await. Recuerda que para usar .fetch() tendrás que probar el ejercicio en el navegador;


async function getCharacters() {
    try {
        const response = await fetch('https://rickandmortyapi.com/api/character');

        if(!response.ok){
            throw new Error('Error al obtener los personajes');
        } 
    
        const characters = await response.json();
        console.log(characters);

    } catch (error) {
        console.error('Error:', error.message);
    }


}

getCharacters();

