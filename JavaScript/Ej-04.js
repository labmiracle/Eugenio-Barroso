




function palabraMasLarga(str) {
    const palabras = str.split(' ');
    let palabraLarga = palabras[0];

    for (let i = 1; i < palabras.length; i++) {
        if (palabras[i].length > palabraLarga.length) {
            palabraLarga = palabras[i];
        }
    }

    return palabraLarga;
}

function primeraMayuscula(str) {
    const palabras = str.split(' ');
    const PalabrasMayusculas = palabras.map((palabra) => {
        const primeraLetra = palabra.slice(0, 1).toUpperCase();
        const restoPalabra = palabra.slice(1);
        return primeraLetra + restoPalabra;
    })

    return PalabrasMayusculas.join(' ');
}


console.assert(primeraMayuscula('En un lugar de la Mancha') === 'En Un Lugar De La Mancha');
console.assert(palabraMasLarga('Erase una vez que se era') === 'Erase');
