/*
Dada una matriz de 1s y 0s, encuentre el número máximo de 1s consecutivos en esta matriz. Si
hay algún valor distinto de 1 o 0 en la matriz, es un error y devuelve -1. Los 1s y 0s pueden ser
valores de cadena o enteros, ambos son aceptables y deben considerarse equivalentes.
*/

const matrix: (string | number)[][] = [
    [1, 1, 0, 1],
    [1, 1, 1, 0],
    [1, 0, 1, 1],
    [0, 0, 0, 1],
];

function maxConsecutivos (matrix: (number | string)[][]): number {
    let total: number = 0;
    let totalMax: number = 0;

    for(let i=0; i < matrix.length; i++) {
        for (let j=0; j < matrix[i].length; j++){
            if (matrix[i][j] !== 0 && matrix[i][j] !== 1){
                return -1
            } else if (matrix[i][j] === 1) {
                total++;
                if (total > totalMax){
                    totalMax = total;
                }
            } else {total = 0;}
        } 
    }

    return totalMax
}

export {maxConsecutivos};