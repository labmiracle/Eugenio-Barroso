import { useState } from "react";
import InputText from "./InputText";
import RemoveTaskButton from "./RemoveTaskButton";

interface Task {
  id: number;
  text: string;
}

interface ListItemProps {
  task: Task;
  onDelete: (taskId: number) => void;
  onUpdate: (taskId: number, newText: string) => void;
}

function ListItem(props: ListItemProps) {
  const [isEditing, setEditing] = useState(false);
  const [editedTask, setEditedTask] = useState(props.task.text);

  function handleEditClick() {
    setEditing(true);
  }

  function handleCancelClick() {
    setEditing(false);
    setEditedTask(props.task.text);
  }

  function handleSaveClick() {
    if (editedTask.trim() !== "") {
      props.onUpdate(props.task.id, editedTask);
      setEditing(false);
    }
  }

  function handleDeleteClick() {
    props.onDelete(props.task.id);
  }

  function handleTextChange(value: string) {
    setEditedTask(value);
  }

  const editItem = (
    <>
      <InputText value={editedTask} onChange={handleTextChange} />
      <button onClick={handleSaveClick}>Save</button>
      <button onClick={handleCancelClick}>Cancel</button>
    </>
  );

  const shownItem = (
    <>
      <span style={{ margin: 5 }}>{props.task.text}</span>
      <button onClick={handleEditClick}>Edit</button>
      <RemoveTaskButton onClick={handleDeleteClick} />
    </>
  );

  return <li>{isEditing ? editItem : shownItem}</li>;
}
export default ListItem;
