import { Pila } from "./Ejercicio-1";

function decimalToBinary(decimal: number): string {
  if (decimal === 0) {
    return "0";
  }

  const stack = new Pila<number>();

  while (decimal > 0) {
    const remainder = decimal % 2;
    stack.push(remainder);
    decimal = Math.floor(decimal / 2);
  }

  let binary = "";

  while (stack.size() > 0) {
    binary += stack.pop();
  }

  return binary;
}
