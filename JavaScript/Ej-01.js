const names = ["Hole-in-one","Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];

function golfScore(par, strokes) {
    let response
    
    if (strokes < 1){
        return "Error: ingrese un nùmero positivo"
    }
    if (strokes == 1) {
        response = names [0];
    } else if (strokes <= par - 2){
        response = names[1];
    } else if (strokes == par - 1){
        response = names[2];
    } else if (strokes == par){
        response = names[3];
    } else if (strokes == par + 1){
        response = names[4];
    } else if (strokes == par + 2){
        response = names[5];
    } else if (strokes >= par + 3){
        response = names[6];
    }
    console.log(response);
    return response
}

golfScore(5, 4);