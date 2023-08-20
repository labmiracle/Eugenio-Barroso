import { useEffect } from "react";

function Refreshed() {
  useEffect(() => {
    const handleVisibilityChange = () => {
      console.log("Refreshed!");
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  return (
    <>
      <h3>Ejercicio 2</h3>
      <Refreshed />
      <hr />
    </>
  );
}

export default Refreshed;
