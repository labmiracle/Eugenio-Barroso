import { useState } from "react";
import AddTaskButton from "./AddTaskButton";

interface InputTextProps {
  value: string;
  onSubmit: (value: string) => void;
}

const InputText: React.FC<InputTextProps> = ({ onSubmit }) => {
  const [value, setValue] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (value.trim() !== "") {
      onSubmit(value);
      setValue("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={value}
        onChange={handleChange}
        placeholder="Agregar tarea..."
      />
      <AddTaskButton onClick={() => handleSubmit} />
    </form>
  );
};

export default InputText;
