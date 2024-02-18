/*Crea una función llamada `findArrayIndex` que reciba como parametros un array de textos y un texto y devuelve la 
posición del array cuando el valor del array sea igual al valor del texto que enviaste como parametro.

Haz varios ejemplos y compruebalos.

Sugerencia de función:

```js
function findArrayIndex(array, text) {}
```

Ej array:*/

const array = ['Caracol', 'Mosquito', 'Salamandra', 'Ajolote'];

function findArrayIndex(array, text) {
    for (let i = 0; i < array.length; i++) {
        if(array[i] === text){
            return i;
        }       
    }

    return -1;
}



/*const indiceSalamandra = findArrayIndex(array, 'Salamandra');
console.log(`El índice de 'Salamandra' es: ${indiceSalamandra}`);*/

/*const indicePerro = findArrayIndex(array, 'Perro');
console.log(`El índice de 'Perro' es: ${indicePerro}`);*/