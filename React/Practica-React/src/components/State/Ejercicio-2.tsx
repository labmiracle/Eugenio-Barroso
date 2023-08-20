import { useState } from "react";

function Ejercicio2() {
  const [letra, setLetra] = useState("");
  const letraRandom = (): string => {
    const caracteres = "ALMNBCVIGWFGakamclovyetwbalacbayKLFDEP";
    const cualquierLetra = Math.floor(Math.random() * caracteres.length);
    return caracteres[cualquierLetra];
  };

  const agregarLetra = (): void => {
    setLetra(letra + letraRandom());
  };

  const sacarLetra = (): void => {
    setLetra(letra.slice(0, -1));
  };

  return (
    <>
      <br />
      <h3>Ejercicio 2</h3>
      <p>{letra}</p>
      <button onClick={agregarLetra}>Agregar</button>
      <button onClick={sacarLetra}>Sacar</button>
      <br />
    </>
  );
}

export default Ejercicio2;
