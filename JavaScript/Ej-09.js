function addOnlyNums(...args){
    let total = 0;

    for (let i = 0; i < args.length; i++) {
        if(typeof args[i] === 'number') {
            total += args[i];
        }
    }
    return total
}


console.assert(addOnlyNums(0, 1, 2, 3, 4, '5', '6', '7', '8') === 10);