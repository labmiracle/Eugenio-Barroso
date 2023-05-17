function add(x: number , y: number):number {

    return +x + +y;
}
    
function sumArray(numbers: (number | string)[]):number {
    let onlyNumbers = [];
    for(let number of numbers){
        if (typeof number === "string") {
            number = +number;
            onlyNumbers.push(number);
        }
    }
    return onlyNumbers.reduce(add, 0);
    
}
    
const someSum = sumArray([3, "6", 9]);
    

export {someSum};