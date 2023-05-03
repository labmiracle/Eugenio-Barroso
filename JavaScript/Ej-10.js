function combineTwoArrays(array1, array2){
    return [...array1, ...array2]
}

const array1 = [1, 2, 3, 4];
const array2 = [5, 6, 7, 8];

console.log(combineTwoArrays(array1, array2));
