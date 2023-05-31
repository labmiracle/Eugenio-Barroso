/*
Dada una cadena, encuentre el primer carácter que se repite consecutivamente en ella y devuelva
su índice. Si no hay caracteres repetidos, devuelve -1. Esta función debe ignorar cualquier
espacio y no debe distinguir entre mayúsculas y minúsculas: trate ’a’ como equivalente a ’A’
*/
function primerConsecutivo (cadena: string): number{
    let cadenaCI = cadena.replace(/\s/g, '');
    cadenaCI = cadenaCI.toUpperCase();
    
    for (let i = 0; i < cadenaCI.length; i++) {
        if (cadenaCI[i] === cadenaCI[i+1]) {
            return i;
        }
    }
    return -1;
}


export {primerConsecutivo};