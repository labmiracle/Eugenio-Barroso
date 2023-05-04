const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});



function adivinarNumero(nivel) {
    let numeroAleatorio;
    let rango;
    let intentosMax = 0;
    
    switch(nivel) {
      case 'facil':
        rango = 10;
        intentosMax = 4;
        break;
      case 'dificil':
        rango = 50;
        intentosMax = 5;
        break;
      case 'experto':
        rango = 100;
        intentosMax = 6;
        break;
      default:
        console.log('Nivel de dificultad no válido');
        return;
    }
    
    numeroAleatorio = Math.floor(Math.random() * rango) + 1;
    
    let intentos = 0;
    let adivinado = false;
    console.log(`Dificultad ${nivel} elegida: Adivina el numero entre 1 y ${rango} en ${intentosMax} intentos`);
    for (let i = 1; i <= intentosMax; i++) {
        let numeroIngresado = 'number';

        rl.question(`Ingresa un número entre 1 y ${rango}:`, (num) => {
            numeroIngresado = num;
        
        });
    
        if (numeroIngresado === numeroAleatorio) {
            adivinado = true;
            console.log(`¡Felicidades, adivinaste el número en ${intentos} intentos!`);
            rl.close();
            return;
        } else if (numeroIngresado < numeroAleatorio) {
            console.log('El número es mayor.');
        } else {
            console.log('El número es menor.');
        }
        if (intentos === intentosMax){
            console.log('Perdiste, te quedaste sin intentos');
            console.log(`El número era ${numeroAleatorio}.`);
            rl.close();
            return;
        }

        console.log(`Te quedan ${intentosMax - i} intentos.`);
    }
  }

console.log('\x1b[32m%s\x1b[0m', 'Bienvenido al juego de adivinar');
console.log("\x1b[32m%s\x1b[0m", "facil: numero maximo 10 y 4 intentos");
console.log("\x1b[33m%s\x1b[0m", "dificil: numero maximo 50 y 5 intentos");
console.log("\x1b[31m%s\x1b[0m", "experto: numero maximo 100 y 6 intentos");

rl.question('Seleccione la dificultad: ', (modo) => {
    adivinarNumero(modo);
    rl.close();
});

