import Ejercicio1 from "../Hooks/Ejercicio-1";
import Ejercicio2 from "../Hooks/Ejercicio-2";
import Ejercicio3 from "../Hooks/Ejercicio-3";
import Ejercicio4 from "../Hooks/Ejercicio-4";

function Loading({ show }: { show: boolean }) {
  if (show) {
    return (
      <>
        <Ejercicio1 />
        <Ejercicio2 />
        <Ejercicio3 />
        <Ejercicio4 />
      </>
    );
  } else {
    return <p>Loading ...</p>;
  }
}
export default Loading;
