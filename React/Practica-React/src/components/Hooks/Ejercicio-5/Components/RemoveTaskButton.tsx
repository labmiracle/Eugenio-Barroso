interface RemoveTaskButtonProps {
  onClick: () => void;
}

function RemoveTaskButton(props: RemoveTaskButtonProps) {
  return <button onClick={props.onClick}>Remove Task</button>;
}

export default RemoveTaskButton;
