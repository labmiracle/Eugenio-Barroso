import { useState, ChangeEvent } from "react";

function Exersice3() {
  const [option, setOption] = useState("");

  const select = (event: ChangeEvent<HTMLSelectElement>) => {
    setOption(event.target.value);
  };

  return (
    <div>
      <h3>Ejercicio 3</h3>
      <select value={option} onChange={select} defaultValue="">
        <option value="" disabled>
          Seleccione una opción
        </option>
        <option value="">Seleccione una opcion</option>
        <option value="Option 1">Option 1</option>
        <option value="Option 2">Option 2</option>
        <option value="Option 3">Option 3</option>
      </select>
      <div>{option ? "Opción seleccionada: " + option : ""}</div>
    </div>
  );
}

export default Exersice3;
