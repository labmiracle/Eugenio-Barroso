import { useState } from "react";

function Ejercicio1() {
  const [count, setCount] = useState(0);

  const increment = (): void => {
    setCount(count + 1);
  };

  const decrement = (): void => {
    setCount(count - 1);
  };

  return (
    <>
      <h3>Ejercicio 1</h3>
      <div>{count}</div>
      <div>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
      </div>
    </>
  );
}

export default Ejercicio1;
