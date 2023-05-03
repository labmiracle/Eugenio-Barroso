function onlyUniques(...args){
    let soloUnicos = [];
    let repetido = false; 
    for (let i = 0; i < args.length; i++) {
        repetido = false;
        for (let j = 0; j < i; j++){
            if (args[j] === args[i]) {
                repetido = true;
            } 
        }
        if (!repetido){
            soloUnicos.push(args[i]);
        }
    }

    return soloUnicos;
}

console.log(onlyUniques(1, 1, 2, 3, 4));
console.assert(onlyUniques(1, 1, 2, 3, 4) === [1, 2, 3, 4])