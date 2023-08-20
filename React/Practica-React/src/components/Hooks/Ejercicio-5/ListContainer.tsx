import { useState } from "react";
import List from "./Components/List";
import InputText from "./Components/InputText";
import AddTaskButton from "./Components/AddTaskButton";

interface Task {
  id: number;
  text: string;
}

export function ListContainer() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTaskText, setNewTaskText] = useState("");

  function addTask() {
    if (newTaskText.trim() !== "") {
      const newTask: Task = {
        id: new Date().getTime(),
        text: newTaskText,
      };
      setTasks((prevTasks) => [...prevTasks, newTask]);
      setNewTaskText("");
    }
  }

  function deleteTask(taskId: number) {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
  }

  function updateTask(taskId: number, newText: string) {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, text: newText } : task
      )
    );
  }

  return (
    <div>
      <List tasks={tasks} onDelete={deleteTask} onUpdate={updateTask} />
      <InputText
        value={newTaskText}
        onChange={(event) => {
          setNewTaskText(event.target.value);
        }}
      />
      <AddTaskButton onClick={addTask} />
    </div>
  );
}
