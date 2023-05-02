function calcularDiasCrecimiento (velocidadCrecimiento, velocidadDecrecimiento, alturaDeseada) {
    let alturaActual = 0;
    let dias = 0;

    if (velocidadCrecimiento < velocidadDecrecimiento){
        return "No va a crecer.";
    }

    while (alturaActual < alturaDeseada) {
        dias++;
        alturaActual += velocidadCrecimiento;
        if (alturaActual == alturaDeseada){
            break; 
        } else {
            alturaActual -= velocidadDecrecimiento;
        }
    }

    return dias
}

console.log(calcularDiasCrecimiento(3, 1, 10));