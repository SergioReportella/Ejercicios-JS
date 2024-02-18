//En base al siguiente javascript, usa destructuring para crear las variables name y itv con sus respectivos valores. Posteriormente crea 3 variables usando igualmente el destructuring para cada uno de los años y comprueba que todo esta bien imprimiendolo.

const car = {name: 'Mazda 6', itv: [2015, 2011, 2020] }

const {name, itv} = car;
const [año2015, año2011, año2020] = itv;

console.log(`name: ${name}`);
console.log(`itv: ${itv}`);

console.log(`itv año: ${año2015}`);
console.log(`itv año: ${año2011}`);
console.log(`itv año: ${año2020}`);