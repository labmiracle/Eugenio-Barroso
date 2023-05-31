/*
Escriba una función que tome un año y devuelva un valor booleano que indique si el año es un
año bisiesto.
Tener en cuenta que:
• Los años que son divisibles por 4 son años bisiestos
• Los años que son divisibles por 100 no son años bisiestos
• Los años que son divisibles por 400 son años bisiestos

*/

function esBisiesto(year: number): boolean{
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        return true;
    } else {
        return false;
    }
}

console.log(`El año 2024 es bisiesto? ${esBisiesto(2024)}`);

export {esBisiesto};