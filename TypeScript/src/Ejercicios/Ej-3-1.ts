function add(x: number, y: number):number {
    return x + y;
}
    
function sumArray(numbers: number[]):number {
    return numbers.reduce(add, 0);
}
    
const someSum = sumArray([3, 6, 9]);
    

export {someSum};