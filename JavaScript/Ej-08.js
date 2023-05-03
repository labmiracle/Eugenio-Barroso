function sumaArgs(){
    let args = Array.from(arguments);
    return args.reduce((total, argActual) => total + argActual, 0);
}

console.assert(sumaArgs(0, 1, 2, 3, 4) === 10);