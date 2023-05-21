function findPreciousStones (preciousStones: string, stones: string): number {
    let encontradas = 0;

    for (let i = 0; i < preciousStones.length; i++){
        if (stones.includes(preciousStones[i])) {
            for (let j = 0; j < stones.length; j++){
                if (stones[j] === preciousStones[i]){
                    encontradas++;
                }
            }
        }
    }
    return encontradas;
}

export {findPreciousStones};
