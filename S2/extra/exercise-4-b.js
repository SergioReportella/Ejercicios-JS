/*Usando la función anterior beneficiate de poder conocer el indice del array para crear una función llamada 
`removeItem` que pasandole un array y un texto como parametros (los mismos parametros que en el anterior ejercicio) 
llame a la función anteriormente creada ``findArrayIndex`` y obten el indice para posteriormente usar la función de 
javascript ``.splice()`` para eliminar el elemento del array. Finalmente retorna el array.

De nuevo haz varios ejemplos para practicar y comprueba que funcionan correctamente.*/

const array = ['Caracol', 'Mosquito', 'Salamandra', 'Ajolote'];

function findArrayIndex(array, text) {
    for (let i = 0; i < array.length; i++) {
        if(array[i] === text){
            return i;
        }       
    }

    return -1;
}

function removeItem(array, text) {
    const indice = findArrayIndex(array, text);

    if( indice !== -1) {
        array.splice(indice,1);
    }

    return array;
};

/*const newArray1 = removeItem(array, 'Ajolote');
console.log('Nuevo array:', newArray1);*/

/*const newArray2 = removeItem(array, 'Perro');
console.log('Nuevo array:', newArray2);*/