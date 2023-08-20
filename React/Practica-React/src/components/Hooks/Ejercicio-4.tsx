import { useState, useEffect } from "react";

export interface ToDos {
  title: string;
  description: string;
  status: string;
  dueDate: string;
}

const TaskList = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((data) => setTasks(data));
  }, []);

  return (
    <div>
      <h1>Tasks</h1>
      <ul>
        {tasks.map((task: ToDos, id) => (
          <li key={id}>
            Title:{task?.title}, Description :{task?.description},{" "}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
