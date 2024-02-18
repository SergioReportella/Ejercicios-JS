/*Vamos a usar de nuevo JSON SERVER para crear un listado de personajes de la serie Dragon Ball.

Para ello, ejecutemos `json-server --watch exercise-4.json`. En este caso el endpoint con los personajes es `http://localhost:3000/characters`.

La idea es crear una galería con los planetas, que podemos obtener del endpoint `http://localhost:3000/planets` y, que si el usuario hace click en alguno de los planetas, salga debajo los personajes que están asociados por el .idPlanet a ese planeta en cuestión, mostrando tanto sus imágenes .avatar como sus nombres .name. Para poder obtener la información de los personajes podemos hacer un filtro de los personajes llamando a la url, por ejemplo `http://localhost:3000/characters?idPlanet=1` y, teniendo en cuenta que el idPlanet variará dependiendo del planeta seleccionado.
 
Además de esto, agrega un buscador para poder filtrar los personajes por nombre una vez que has seleccionado el planeta. Por lo tanto, deberemos incluir el input debajo del planeta y encima de los personajes listados.

Como extra podríamos hacer que si haces click a un personaje salga la descripción debajo. Como extra del extra haz que la descripción se oculte si vuelves a hacer click en el mismo personaje.*/

const planetsUrl = 'http://localhost:3000/planets';
const charactersUrl = 'http://localhost:3000/characters';
const planetsContainer = document.querySelector('[data-function="planets"]');
const charactersContainer = document.querySelector('[data-function="characters"]');
const searchContainer = document.querySelector('[data-function="search"]');

const fetchData = async (url) => {
    try {
        const response = await fetch(url);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error);
    }
};

const renderPlanets = async () => {
    const planets = await fetchData(planetsUrl);
    planetsContainer.innerHTML = '';

    planets.forEach((planet) => {
        const planetElement = document.createElement('div');
        planetElement.classList.add('planet');
        planetElement.textContent = planet.name;
        planetElement.addEventListener('click', () => renderCharacters(planet.id));
        planetsContainer.appendChild(planetElement);
    });
};

const renderCharacters = async (idPlanet) => {
    const characters = await fetchData(`${charactersUrl}?idPlanet=${idPlanet}`);
    charactersContainer.innerHTML = '';

    characters.forEach((character) => {
        const characterElement = document.createElement('div');
        characterElement.classList.add('character');
        characterElement.setAttribute('data-id', character.id);
        characterElement.innerHTML = `
            <img src="${character.avatar}" alt="${character.name}">
            <p>${character.name}</p>
        `;
        characterElement.addEventListener('click', () => toggleDescription(character));
        charactersContainer.appendChild(characterElement);
    });
    renderSearch();
};

const toggleDescription = (character) => {
    const characterElement = document.querySelector(`.character[data-id="${character.id}"]`);
    const descriptionElement = document.createElement('p');
    descriptionElement.textContent = character.description || 'No hay descripción disponible.';

    if (!characterElement.contains(descriptionElement)) {
        characterElement.appendChild(descriptionElement);
    } else {
        characterElement.removeChild(descriptionElement);
    }
};

const renderSearch = () => {
    searchContainer.innerHTML = '';

    const searchInput = document.createElement('input');
    searchInput.type = 'text';
    searchInput.placeholder = 'Buscar por nombre';
    searchInput.addEventListener('input', () => filterCharacters(searchInput.value.toLowerCase()));
    searchContainer.appendChild(searchInput);
};

const filterCharacters = (searchTerm) => {
    const characterElements = document.querySelectorAll('.character p');
    
    characterElements.forEach((characterElement) => {
        const characterName = characterElement.textContent.toLowerCase();
        const shouldShow = characterName.includes(searchTerm);
        characterElement.closest('.character').style.display = shouldShow ? 'block' : 'none';
    });
};

renderPlanets();