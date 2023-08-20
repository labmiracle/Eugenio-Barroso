import { useState, ChangeEvent } from "react";

function Exercise2() {
  const [texto, setText] = useState("");

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  };

  return (
    <div>
      <br />
      <h3>Ejercicio 2</h3>
      <input type="text" value={texto} onChange={handleInputChange} />
      <div>{texto}</div>
      <br />
    </div>
  );
}

export default Exercise2;
