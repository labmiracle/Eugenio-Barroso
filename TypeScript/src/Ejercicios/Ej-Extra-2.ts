/*
1. Vamos a implementar el juego de Code Breaker. El juego comienza generando un número
al azar de cuatro dígitos. Cada dígito puede tener un valor entre 0 y 6.
2. El usuario ingresa un número intentando adivina el número secreto
3. Si alguno de los números concuerda en la posición original, se muestra una X
4. Si alguno de los números no concuerda con la posición original, pero esta en el número
secreto en otra posición, muestra un -
5. El orden en que se muestran es el siguiente: XX- (primero las X y luego los -)
6. Ejemplo:
Número secreto: 2561
Primer intento: 1334
Salida: -
Segundo intento: 4251
Salida: X--
Tercer intento: 6521
Salida: XX--
*/
import { ReadLine } from "readline";
const prompt = require('prompt-sync')
({sigint:true})

let gameOver: string | null = "Y";

function getSecretCode(): string {
    const secretCode = [Math.floor(Math.random() * 10), Math.floor(Math.random() * 10), Math.floor(Math.random() * 10), Math.floor(Math.random() * 10)];
    return secretCode.join("");
    
}



function getGuess(): string {
    let guess: string | null = prompt("Enter 4 digit numbers");
    while (guess?.length !== 4) {
        guess = prompt("Enter 4 digit number from 0-9");
    }

    return guess.toString();
};

function getFeedback(guess: string  , secretCode: string): string[] {
    const feedback = [];

    for (let i = 0; i < guess.length; i++) {
        if (guess[i] === secretCode[i]) {
            feedback.push("X");
        } else if (secretCode.includes(guess[i])) {
            feedback.push("-");
        } else {
            feedback.push("*");
        }
    }

    return feedback;
};

function playGame(): void {
    let guesses = 0;
    
    const secretCode = getSecretCode();

    while (guesses < 10) {
        const guess = getGuess();
        const feedback = getFeedback(guess, secretCode);
        console.log(feedback);
        if (feedback.every((symbol) => symbol === "X")) {
            console.log("Congratulations, you guessed the code!");
            return;
        }
        guesses++;
    }

    console.log("You ran out of guesses. The secret code was:", secretCode);
    gameOver = prompt("Restart game? Y/N").toUpperCase();
    
    while (gameOver?.toString() !== "Y" && gameOver?.toString() !== "N") { 
        gameOver = prompt("Restart game? Y/N").toUpperCase();
    }
};

while (gameOver === "Y") {
    gameOver = "N";
    playGame();
}
