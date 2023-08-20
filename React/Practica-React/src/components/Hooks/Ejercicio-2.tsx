import { useEffect } from "react";

function Demolished() {
  useEffect(() => {
    const handleVisibilityChange = () => {
      console.log("Demolished!");
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  return (
    <>
      <h3>Ejercicio 2</h3>
      <Demolished />
      <hr />
    </>
  );
}

export default Demolished;
