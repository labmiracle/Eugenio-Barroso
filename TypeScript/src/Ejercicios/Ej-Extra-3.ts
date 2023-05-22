/*
Vamos a crear un juego de cartas en el cual cada jugador saca una carta del mazo y el que
obtiene el número más alto gana.
1. Tener en cuenta que al sacar una carta del mazo, no puede salir la misma carta, por lo
menos mientras se este utilizando ese mazo
2. Las cartas que saca cada jugador deben salir en orden aleatorio
*/
import { ReadLine } from "readline";
const prompt = require('prompt-sync')
({sigint:true})


const deck = [
    { type: "Spades", rank: "Ace", value: 1 },
    { type: "Spades", rank: "2", value: 2 },
    { type: "Spades", rank: "3", value: 3 },
    { type: "Spades", rank: "4", value: 4 },
    { type: "Spades", rank: "5", value: 5 },
    { type: "Spades", rank: "6", value: 6 },
    { type: "Spades", rank: "7", value: 7 },
    { type: "Spades", rank: "8", value: 8 },
    { type: "Spades", rank: "9", value: 9 },
    { type: "Spades", rank: "10", value: 10 },
    { type: "Spades", rank: "Jack", value: 11 },
    { type: "Spades", rank: "Queen", value: 12 },
    { type: "Spades", rank: "King", value: 13 },
    { type: "Hearts", rank: "Ace", value: 1 },
    { type: "Hearts", rank: "2", value: 2 },
    { type: "Hearts", rank: "3", value: 3 },
    { type: "Hearts", rank: "4", value: 4 },
    { type: "Hearts", rank: "5", value: 5 },
    { type: "Hearts", rank: "6", value: 6 },
    { type: "Hearts", rank: "7", value: 7 },
    { type: "Hearts", rank: "8", value: 8 },
    { type: "Hearts", rank: "9", value: 9 },
    { type: "Hearts", rank: "10", value: 10 },
    { type: "Hearts", rank: "Jack", value: 11 },
    { type: "Hearts", rank: "Queen", value: 12 },
    { type: "Hearts", rank: "King", value: 13 },
    { type: "Diamonds", rank: "Ace", value: 1 },
    { type: "Diamonds", rank: "2", value: 2 },
    { type: "Diamonds", rank: "3", value: 3 },
    { type: "Diamonds", rank: "4", value: 4 },
    { type: "Diamonds", rank: "5", value: 5 },
    { type: "Diamonds", rank: "6", value: 6 },
    { type: "Diamonds", rank: "7", value: 7 },
    { type: "Diamonds", rank: "8", value: 8 },
    { type: "Diamonds", rank: "9", value: 9 },
    { type: "Diamonds", rank: "10", value: 10 },
    { type: "Diamonds", rank: "Jack", value: 11 },
    { type: "Diamonds", rank: "Queen", value: 12 },
    { type: "Diamonds", rank: "King", value: 13 },
    { type: "Clubs", rank: "Ace", value: 1 },
    { type: "Clubs", rank: "2", value: 2 },
    { type: "Clubs", rank: "3", value: 3 },
    { type: "Clubs", rank: "4", value: 4 },
    { type: "Clubs", rank: "5", value: 5 },
    { type: "Clubs", rank: "6", value: 6 },
    { type: "Clubs", rank: "7", value: 7 },
    { type: "Clubs", rank: "8", value: 8 },
    { type: "Clubs", rank: "9", value: 9 },
    { type: "Clubs", rank: "10", value: 10 },
    { type: "Clubs", rank: "Jack", value: 11 },
    { type: "Clubs", rank: "Queen", value: 12 },
    { type: "Clubs", rank: "King", value: 13}
]

let playAgain: string | null = "Y";

function drawCard(currentDeck: {type: string, rank: string, value: number}[]): {type: string, rank: string, value: number} {
    const i : number = Math.floor(Math.random() * currentDeck.length)
    const card = currentDeck[i]
    currentDeck.splice(i, 1);
    return card;
}

function play(): void {
    let currentDeck: {type: string, rank: string, value: number}[] = deck.slice();
    let playerCard: {type: string, rank: string, value: number};
    let enemyCard: {type: string, rank: string, value: number};
    let playerPoints: number = 0;
    let enemyPoints: number = 0;

    while (currentDeck.length > 0) {
        enemyCard = drawCard(currentDeck);
        playerCard = drawCard(currentDeck);

        if (playerCard.value > enemyCard.value) {
            playerPoints++;
        } else {
            enemyPoints++;
        }
        
        console.log(`Your card is ${playerCard.rank} of ${playerCard.type} and your enemy card is ${enemyCard.rank} of ${enemyCard.type}`);
        console.log(`playerPoints: ${playerPoints}`);
        console.log(`enemyPoints ${enemyPoints}`);
        console.log(`cards left: ${currentDeck.length}`);
    }

    if(playerPoints > enemyPoints) {
        console.log('You Win!');
    } else {
        console.log('You Lose!');
    }


    playAgain = prompt("restart? Y/N").toUpperCase();
    while (playAgain?.toString() !== "Y" && playAgain?.toString() !== "N"){
        playAgain = prompt("restart? Y/N").toUpperCase();
        console.log("playagain es", playAgain)
    }
}

while (playAgain === "Y"){
    playAgain = "N";
    play();
}
