const array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const array2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

function ArrayOnlyUnique(array1: number[], array2: number[]) {
  const uniqueArray = new Set([...array1, ...array2]);
  return uniqueArray;
}
