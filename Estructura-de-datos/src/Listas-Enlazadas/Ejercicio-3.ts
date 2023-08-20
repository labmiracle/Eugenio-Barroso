import { Nodo, LinkedList } from "./Ejercicio-1-2";

class DoubleNode<T> extends Nodo<T> {
  value: T;
  prev: DoubleNode<T> | null;
  next: DoubleNode<T> | null;
  constructor(value: T) {
    super(value);
    this.next = null;
    this.prev = null;
  }
}

class DoubleLinkedList<T> extends LinkedList<T> {
  head: DoubleNode<T> | null;
  tail: DoubleNode<T> | null;

  constructor() {
    super();
    this.tail = null;
  }

  add(value: T) {
    const newNode = new DoubleNode(value);

    if (!this.head) {
      this.head = newNode;
    } else {
      let currentNode = this.head;
      while (currentNode.next) {
        currentNode = currentNode.next;
      }
      currentNode.next = newNode;
      newNode.prev = currentNode;
    }
    this.size++;
  }

  remove(): void {}

  invert(): void {
    let temp: DoubleNode<T> | null = null;
    let current: DoubleNode<T> | null = this.head;

    while (current !== null) {
      temp = current.prev;
      current.prev = current.next;
      current.next = temp;
      current = current.prev;
    }
    if (temp !== null) {
      this.head = temp.prev;
    }
  }

  deleteDups(): void {
    let duplicates = new Set<T>();
    let current: DoubleNode<T> | null = this.head;
    if (!current) return;

    while (current) {
      if (duplicates.has(current.value)) {
        if (current.prev) {
          current.prev.next = current.next;
        }
        if (current.next) {
          current.next.prev = current.prev;
        }
        this.size--;
      } else {
        duplicates.add(current.value);
        current.prev = current;
      }
      current = current.next;
    }
  }
}

const DoubleLinkedListExample = new DoubleLinkedList();

DoubleLinkedListExample.add(1);
DoubleLinkedListExample.add(2);
DoubleLinkedListExample.add(2);
DoubleLinkedListExample.add(3);
DoubleLinkedListExample.add(3);
DoubleLinkedListExample.invert();
DoubleLinkedListExample.deleteDups();
console.log("Double Linked List: ", DoubleLinkedListExample);
