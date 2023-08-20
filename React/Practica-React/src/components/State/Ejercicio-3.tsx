import { useState } from "react";
import Buttons from "./Buttons";
import Text from "./Text";

function Ejercicio3() {
  const [char, setChar] = useState("");
  const charRandom = (): string => {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    const randomChar = Math.floor(Math.random() * chars.length);
    return chars[randomChar];
  };

  const addChar = (): void => {
    setChar(char + charRandom());
  };

  const removeChar = (): void => {
    setChar(char.slice(0, -1));
  };

  return (
    <>
      <br />
      <h3>Ejercicio-3</h3>
      <Text text={char} />
      <Buttons accion={addChar}>Increment</Buttons>
      <Buttons accion={removeChar}>Decrement</Buttons>
    </>
  );
}

export default Ejercicio3;
