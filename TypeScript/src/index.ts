import { padLeft } from "./Ejercicios/Ej-2-2";
import { flattenedNumbers } from "./Ejercicios/Ej-2-3";
import { interrogateAnimal } from "./Ejercicios/Ej-2-4";
import { someSum } from "./Ejercicios/Ej-3-1";

//Ejercicio 2.1
console.log('[Ejercicio 2.1]');

//Ejercicio 2.2
console.log('[Ejercicio 2.2]', `
${padLeft('', 0)}
${padLeft('', '')}
${padLeft('', '')}
${padLeft('', '')}
${padLeft('', '')}
`);

//Ejercicio 2.3
console.log('[Ejercicio 2.3]', flattenedNumbers);

//Ejercicio 2.4
console.log('[Ejercicio 2.4]',
`Tenemos un ${interrogateAnimal()} en nuestras manos!`);

//Ejercicio 3.1
console.log('[Ejercicio 3.1]', `3 + 6 + 9 === ${someSum}`);