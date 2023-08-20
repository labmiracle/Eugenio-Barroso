import { Pila } from "./Ejercicio-1";

function decimalToBinary(decimal: number, base: number): string {
  if (decimal === 0) {
    return "0";
  }

  if (base < 2 || base > 36) {
    throw new Error("Base debe estar entre [2 - 36]");
  }

  const stack = new Pila<number>();

  while (decimal > 0) {
    const remainder = decimal % base;
    stack.push(remainder);
    decimal = Math.floor(decimal / base);
  }

  let BaseNumber = "";

  while (stack.size() > 0) {
    BaseNumber += stack.pop();
  }

  return BaseNumber;
}
