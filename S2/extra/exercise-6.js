/*Crea una función llamada ``swap`` que reciba un array y dos parametros que sean indices del array. La función deberá 
intercambiar la posición de los valores de los indices que hayamos enviado como parametro. Retorna el array 
resultante.

Sugerencia de array:*/

const array = ['Mesirve', 'Cristiano Romualdo', 'Fernando Muralla', 'Ronalguiño'];


function swap(array, indice1, indice2) {
    if (indice1 >= 0 && indice1 < array.length && indice2 >= 0 && indice2 < array.length) {
        const temp = array[indice1];
        array[indice1] = array[indice2];
        array[indice2] = temp;
    }

    return array;
}


/*const nuevoArray = swap(array, 1, 2);
console.log(nuevoArray);*/