export class Cola<T> {
  private items: T[];

  constructor() {
    this.items = [];
  }

  enqueue(item: T): void {
    this.items.push(item);
  }

  Dequeue(): T | undefined {
    return this.items.shift();
  }

  size() {
    return this.items.length;
  }
}
