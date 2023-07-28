/*
Debemos escribir una función, fizzBuzz, que acepte un número y devuelva una cadena:
• si el número es divisible por 3, devuelve Fizz
• si el número es divisible por 5, devuelve Buzz
• si el número es divisible por 3 y 5, devuelve FizzBuzz
• si el número no cumple ninguna de las condiciones anteriores, devuelve el número
A medida que crea escribimos la función en fizzbuzz.js, también debemos escribir las pruebas
en index.test.js. Debemos ir creando nuestros propios casos de prueba.
Casos extremos a considerar:
• ¿Qué debería devolver fizzbuzz(0)?
• ¿Qué debería pasar si a la función se le pasa una cadena?
*/

function fizzBuzz(num: number | string): string {
    let cadena: string;

    if (typeof num === "string"){
        num = parseInt(num) 
    };

    if(num === 0){
        return num.toString();
    }
    if (num % 3 === 0 && num % 5 === 0){
        cadena = "FizzBuzz";
    } else if (num % 5 === 0) {
        cadena = "Buzz";
    } else if (num % 3 === 0){
        cadena = "Fizz";
    } else {
        cadena = num.toString();
    }
    return cadena;
}

fizzBuzz(3);
fizzBuzz(5);
fizzBuzz(0);
fizzBuzz("5");
fizzBuzz(15);

export {fizzBuzz};