class ArrayQueue {
  constructor(len) {
    this.queue = [];
    this.queueMaxSize = len;
    this.front = -1;
    this.rear = -1;
    this.currSize = 0;
  }

  enqueue(val) {
    if (this.isFull()) {
      console.log(`Queue is full, can't perform enqueue`);
      return `Queue is full, can't perform enqueue`;
    }
    if (this.front === -1) {
      this.front = 0;
    }
    this.rear = (this.rear + 1) % this.queueMaxSize;
    this.queue[this.rear] = val;
    this.currSize += 1;
  }

  dequeue() {
    if (this.isEmpty()) {
      console.log(`Queue is empty, can't perform dequeue`);
      return `Queue is empty, can't perform dequeue`;
    }
    let dequeuedElement = this.queue[this.front];
    if (this.front === this.rear) {
      this.front = -1;
      this.rear = -1;
    } else {
      this.front = (this.front + 1) % this.queueMaxSize;
    }
    this.currSize -= 1;
    return dequeuedElement;
  }

  isEmpty() {
    // return this.currSize === 0;
    console.log("kl");
    return this.front === this.rear;
  }

  isFull() {
    // return this.currSize === this.queueMaxSize;
    return (this.rear + 1) % this.queueMaxSize === this.front;
  }

  getFront() {
    if (this.isEmpty()) {
      console.log(`Queue is empty`);
      return `Queue is empty`;
    }
    return this.queue[this.front];
  }

  print() {
    if (this.isEmpty()) {
      console.log(`Queue is empty`);
      return;
    }

    let str = "";
    let tempPtr = this.front;

    while (tempPtr !== this.rear) {
      str += this.queue[tempPtr] + " -> ";
      tempPtr = (tempPtr + 1) % this.queueMaxSize;
    }

    str += this.queue[this.rear];
    console.log(str);
    console.log(this.queue);
  }
}


export default ArrayQueue;