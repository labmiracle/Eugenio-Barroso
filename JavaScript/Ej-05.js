function camelize(str) {
    const palabras = str.split(' ');
    
    const palabrasCamelizadas = palabras.map((palabra, i) => {
        if (i === 0) {
            return palabra.toLowerCase();
        } else {
            return palabra.charAt(0).toUpperCase() + palabra.slice(1).toLowerCase();
        }
    })

    return palabrasCamelizadas.join('');
}
console.assert(camelize('Hola a todos que tal') === 'holaATodosQueTal');
