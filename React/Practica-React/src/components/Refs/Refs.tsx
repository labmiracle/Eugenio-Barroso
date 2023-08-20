import { useRef } from "react";

function Refs() {
  const input1Ref = useRef<HTMLInputElement>(null);
  const input2Ref = useRef<HTMLInputElement>(null);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("Input 1:", input1Ref.current?.value);
    console.log("Input 2:", input2Ref.current?.value);
    event.currentTarget.reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Mensaje 1:</label>
      <input type="text" id="input1" ref={input1Ref} />
      <label>Mensaje 2:</label>
      <input type="text" id="input2" ref={input2Ref} />
      <button type="submit">Submit</button>
    </form>
  );
}

export default Refs;
