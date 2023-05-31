/* 
Escriba una función que tome una arreglo y devuelva la suma de todos los números positivos
del arreglo. Los valores que se pueden convertir en números deben convertirse e incluirse en la
suma si son positivos. Si la matriz está vacía, devuelve cero.
*/

function sumaPositivos(arr: any[]): number {
    let total: number = 0;

    for (let i = 0; i < arr.length; i++){
        const number = Number(arr[i]);
        if (typeof number === "number" && arr[i] > 0) {
            total = total + arr[i];
        }
    }

    return total;
}

export {sumaPositivos};