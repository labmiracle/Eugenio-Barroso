function Buttons({
  children,
  accion,
}: {
  children: string;
  accion: () => void;
}) {
  return <button onClick={accion}>{children}</button>;
}

export default Buttons;
