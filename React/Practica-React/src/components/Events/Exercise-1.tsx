import { useState } from "react";

function Exersice1() {
  const [call, setCall] = useState("");

  const callApi = async () => {
    try {
      const response = await fetch(
        " https://jsonplaceholder.typicode.com/todos/1"
      );
      const data = await response.json();
      const json = JSON.stringify(data);
      setCall(json);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div>
      <h3>Ejercicio 1</h3>
      <div>{call}</div>
      <button onClick={callApi}>Ver Json</button>
    </div>
  );
}

export default Exersice1;