/*
Vamos a crear un juego de cartas en el cual cada jugador saca una carta del mazo y el que
obtiene el número más alto gana.
1. Tener en cuenta que al sacar una carta del mazo, no puede salir la misma carta, por lo
menos mientras se este utilizando ese mazo
2. Las cartas que saca cada jugador deben salir en orden aleatorio
*/
const deck = [
    { type: "Spades", rank: "Ace" },
    { type: "Spades", rank: "2" },
    { type: "Spades", rank: "3" },
    { type: "Spades", rank: "4" },
    { type: "Spades", rank: "5" },
    { type: "Spades", rank: "6" },
    { type: "Spades", rank: "7" },
    { type: "Spades", rank: "8" },
    { type: "Spades", rank: "9" },
    { type: "Spades", rank: "10" },
    { type: "Spades", rank: "Jack" },
    { type: "Spades", rank: "Queen" },
    { type: "Spades", rank: "King" },
    { type: "Hearts", rank: "Ace" },
    { type: "Hearts", rank: "2" },
    { type: "Hearts", rank: "3" },
    { type: "Hearts", rank: "4" },
    { type: "Hearts", rank: "5" },
    { type: "Hearts", rank: "6" },
    { type: "Hearts", rank: "7" },
    { type: "Hearts", rank: "8" },
    { type: "Hearts", rank: "9" },
    { type: "Hearts", rank: "10" },
    { type: "Hearts", rank: "Jack" },
    { type: "Hearts", rank: "Queen" },
    { type: "Hearts", rank: "King" },
    { type: "Diamonds", rank: "Ace" },
    { type: "Diamonds", rank: "2" },
    { type: "Diamonds", rank: "3" },
    { type: "Diamonds", rank: "4" },
    { type: "Diamonds", rank: "5" },
    { type: "Diamonds", rank: "6" },
    { type: "Diamonds", rank: "7" },
    { type: "Diamonds", rank: "8" },
    { type: "Diamonds", rank: "9" },
    { type: "Diamonds", rank: "10" },
    { type: "Diamonds", rank: "Jack" },
    { type: "Diamonds", rank: "Queen" },
    { type: "Diamonds", rank: "King" },
    { type: "Clubs", rank: "Ace" },
    { type: "Clubs", rank: "2" },
    { type: "Clubs", rank: "3" },
    { type: "Clubs", rank: "4" },
    { type: "Clubs", rank: "5" },
    { type: "Clubs", rank: "6" },
    { type: "Clubs", rank: "7" },
    { type: "Clubs", rank: "8" },
    { type: "Clubs", rank: "9" },
    { type: "Clubs", rank: "10" },
    { type: "Clubs", rank: "Jack" },
    { type: "Clubs", rank: "Queen" },
    { type: "Clubs", rank: "King" },
]

let currentDeck: {type: string, rank: string}[] = deck;
let playAgain: string | null = 'Y';

function drawCard(): {type: string, rank: string} {
    const i : number = Math.floor(Math.random() * currentDeck.length)
    const card = currentDeck[i]
    currentDeck.splice(i, 1);
    return card;
}

function play(): void {

    let playerCard: {type: string, rank: string};
    let enemyCard: {type: string, rank: string};
    let playerPoints: number = 0;
    let enemyPoints: number = 0;

    for (let i = 0; i < currentDeck.length; i++) {
        enemyCard = drawCard();
        playerCard = drawCard();

        if (playerCard > enemyCard) {
            playerPoints++;
        } else {
            enemyPoints++;
        }

        console.log('playerPoints: ${playerPoints}');
        console.log('enemyPoints ${enemyPoints}');
        console.log('cards left: ${currentdeck.length}');
    }

    if(playerPoints > enemyPoints) {
        console.log('You Win!');
    } else {
        console.log('You Lose!');
    }


    playAgain = prompt("restart? Y/N");
    while (playAgain?.toString() !== 'N' || playAgain?.toString() !== 'Y'){
        playAgain = prompt("restart? Y/N");
    }
}

while (playAgain === 'Y'){
    playAgain = 'N';
    play();
}
