import { useState } from "react";

function ConditionalRender() {
  const [isLoanding, setIsLoading] = useState(true);

  const logIn = () => {
    setIsLoading(true);
  };

  const logOut = () => {
    setIsLoading(false);
  };

  return (
    <div>
      {isLoanding ? (
        <>
          <p>Esta página solo puedo verla por que estoy logueado</p>
          <button onClick={logOut}>Log Out</button>
        </>
      ) : (
        <div>
          <p>Inicia sesión para ver contenido privado</p>
          <button onClick={logIn}>Log In</button>
        </div>
      )}
    </div>
  );
}

export default ConditionalRender;
