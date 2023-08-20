import ListItem from "./ListItem";

interface Task {
  id: number;
  text: string;
}

interface ListProps {
  tasks: Task[];
  onDelete: (taskId: number) => void;
  onUpdate: (taskId: number, newText: string) => void;
}

function List(props: ListProps) {
  return (
    <ul>
      {props.tasks.map((task) => (
        <ListItem
          key={task.id}
          task={task}
          onDelete={props.onDelete}
          onUpdate={props.onUpdate}
        />
      ))}
    </ul>
  );
}
export default List;
