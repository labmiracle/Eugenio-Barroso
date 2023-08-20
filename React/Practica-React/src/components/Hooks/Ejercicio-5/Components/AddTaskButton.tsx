interface AddTaskButtonProps {
  onClick: () => void;
}

function AddTaskButton(props: AddTaskButtonProps) {
  return <button onClick={props.onClick}>Add Task</button>;
}
export default AddTaskButton;
