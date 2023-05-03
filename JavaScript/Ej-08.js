function sumaArgs(){
    let args = Array.from(arguments);
    return args.reduce((total, argActual) => total + argActual, 0);
}

function sumaArgs2(...args){
    return args.reduce((total, argActual) => total + argActual, 0);
}

console.assert(sumaArgs(0, 1, 2, 3, 4) === 10);
console.assert(sumaArgs2(0, 1, 2, 3, 4) === 10);