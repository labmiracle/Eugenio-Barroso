import Ejercicio1 from "../Hooks/Ejercicio-1";
import Ejercicio2 from "../Hooks/Ejercicio-2";
import Ejercicio3 from "../Hooks/Ejercicio-3";
import Ejercicio4 from "../Hooks/Ejercicio-4";
import Ejercicio5 from "../Hooks/Ejercicio-5/ListContainer";

function Loading({ show }: { show: boolean }) {
  if (show) {
    return (
      <>
        <Ejercicio1 />
        <Ejercicio2 />
        <Ejercicio3 />
        <Ejercicio4 />
        <Ejercicio5 />
      </>
    );
  } else {
    return <p>Loading ...</p>;
  }
}
export default Loading;
