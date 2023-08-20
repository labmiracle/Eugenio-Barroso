class CircularQueue<T> {
  private items: T[];
  private front: number;
  private rear: number;
  private size: number;

  constructor(size: number) {
    this.items = new Array(size);
    this.front = -1;
    this.rear = -1;
    this.size = size;
  }

  enqueue(item: T): void {
    if (this.isFull()) {
      throw new Error("Queue is full");
    }

    if (this.front == -1) {
      this.front = 0;
      this.rear = 0;
      this.items[this.rear] = item;
    }

    this.rear = (this.rear + 1) % this.size;
    this.items[this.rear] = item;
  }

  dequeue(): T | undefined {
    if (this.isEmpty()) {
      throw new Error("Queue is empty");
    }

    const item = this.items[this.front];

    if (this.front === this.rear) {
      this.front = -1;
      this.rear = -1;
    } else {
      this.front = (this.front + 1) % this.size;
    }

    return item;
  }

  isFull(): boolean {
    return (
      (this.front === 0 && this.rear === this.size - 1) ||
      this.front === this.rear + 1
    );
  }

  isEmpty(): boolean {
    return this.front === -1 && this.rear === -1;
  }
  length(): number {
    if (this.front == -1) {
      return 0;
    }

    if (this.rear >= this.front) {
      return this.rear - this.front + 1;
    }

    return this.size - (this.front - this.rear - 1);
  }
}

function juegoPapaCaliente(participantes: string[]): string {
  const colaCircular = new CircularQueue<string>(participantes.length);

  for (const participante of participantes) {
    colaCircular.enqueue(participante);
  }

  while (colaCircular.length() > 1) {
    for (let i = 0; i < Math.floor(Math.random() * 10); i++) {
      const jugador = colaCircular.dequeue();
      if (jugador !== undefined) {
        colaCircular.enqueue(jugador);
      }
    }

    const jugadorEliminado = colaCircular.dequeue();
    if (jugadorEliminado !== undefined) {
      console.log(`¡${jugadorEliminado} ha sido eliminado!`);
    }
  }

  return colaCircular.dequeue() || "";
}

const participantes = [
  "Jugador1",
  "Jugador2",
  "Jugador3",
  "Jugador4",
  "Jugador5",
];
const ganador = juegoPapaCaliente(participantes);
console.log(`El ganador es ${ganador}`);
