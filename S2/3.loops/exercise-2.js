//Usa un forin para imprimir por consola los datos del alienigena.

const alien = {
    name: 'Wormuck',
    race: 'Cucusumusu',
    planet: 'Eden',
    weight: '259kg'
}

for ( const datos in alien){
    const value = alien[datos];
    console.log(`${datos}: ${value}`);
};