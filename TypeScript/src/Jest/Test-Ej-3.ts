/*
Escriba una función que tome una cadena de ADN (por ejemplo, ’CTAGGGTA’) y devuelva
una nueva cadena con cualquier valor base de ADN no canónico eliminado. Los valores base
canónicos son caracteres únicos: ’C’, ’T’, ’A’ y ’G’ únicamente. Haga que la función distinga
entre mayúsculas y minúsculas, lo que significa que ’c’ (minúsculas) debe eliminarse de la cadena, 
pero ’C’ (mayúsculas) es correcto y debe permanecer. Si la cadena de ADN está vacía,
simplemente devuelva una cadena vacía.
*/
const caracteresCanonicos = ['C', 'T', 'A', 'G'];

function eliminaNoCanonicos(adn: string): string {
    let soloCanonicos;

    if (adn.length === 0){
        return '';
    }

    soloCanonicos = adn.split('');
    soloCanonicos = soloCanonicos.filter((caracter) => caracteresCanonicos.includes(caracter.toUpperCase()));
    soloCanonicos = soloCanonicos.join('');

    return soloCanonicos;
}

export {eliminaNoCanonicos};