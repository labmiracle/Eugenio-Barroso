class Nodo<T> {
  public value: T;
  public next: Nodo<T> | null;
  constructor(value: T) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList<T> {
  head: Nodo<T> | null;
  size: number;
  constructor() {
    this.head = null;
    this.size = 0;
  }

  add(value: T): void {
    const newNode = new Nodo(value);
    if (this.head === null) {
      this.head = newNode;
    } else {
      let currentNode = this.head;
      while (currentNode.next) {
        currentNode = currentNode.next;
      }
      currentNode.next = newNode;
    }
    this.size++;
  }

  remove(value: T) {
    let current: Nodo<T> | null = this.head;
    if (!current) {
      return;
    }
    let previous;
    while (current && current.value !== value) {
      previous = current;
      current = current.next;
    }
    if (!current) {
      return;
    }
    if (!previous) {
      this.head = current.next;
    } else {
      previous.next = current.next;
    }
    this.size--;
  }

  ListSize() {
    return this.size;
  }

  find(value: T) {
    if (this.head === null) {
      return null;
    }
    let currentNode: Nodo<T> | null = this.head;
    while (currentNode && currentNode.value !== value) {
      if (currentNode.value === value) {
        return currentNode;
      }
      currentNode = currentNode.next;
    }
    return null;
  }

  invert() {
    let current: Nodo<T> | null = this.head;
    let prev: Nodo<T> | null = null;
    let next: Nodo<T> | null = null;

    while (current !== null) {
      next = current.next;
      current.next = prev;
      prev = current;
      current = next;
    }

    this.head = prev;
  }
}

export { LinkedList, Nodo };

const linkedList = new LinkedList<number>();

linkedList.add(1);
linkedList.add(2);
linkedList.add(6);
console.log(linkedList.ListSize());
console.log(linkedList.find(6));
console.log(linkedList.remove(6));
linkedList.invert();
