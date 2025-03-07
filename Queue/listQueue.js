import Node from "../Node/singlyLinkedList.js";


class ListQueue {
  constructor(len) {
    this.front = null;
    this.rear = null;
    this.queueMaxSize = len;
    this.currSize = 0;
  }

  enqueue(val) {
    if (this.isFull()) {
      console.log(`Queue is full, can't perform enqueue`);
      return `Queue is full, can't perform enqueue`;
    }
    let newNode = new Node(val);
    if (this.isEmpty()) {
      this.front = newNode;
      this.rear = newNode;
    } else {
      this.rear.next = newNode;
      this.rear = newNode;
    }
    this.currSize += 1;
  }

  dequeue() {
    if (this.isEmpty()) {
      console.log(`Queue is empty, can't perform dequeue`);
      return `Queue is empty, can't perform dequeue`;
    }
    let deletdNode;
    deletdNode = this.front;
    if (this.currSize === 1) {
      this.front = null;
      this.rear = null;
    } else {
      this.front = this.front.next;
      this.currSize -= 1;
    }
    return deletdNode
  }

  getFront() {
    return this.front.data;
  }

  isEmpty() {
    return this.front === null;
  }
  isFull() {
    return this.queueMaxSize === this.currSize;
  }
  print() {
    if (this.isEmpty()) {
      console.log(`Queue is empty`);
      return `Queue is empty`;
    }
    let str = "";
    let tempNode = this.front;
    str = tempNode.data + str;
    tempNode = tempNode.next;
    while (tempNode) {
      str = tempNode.data + " => " + str;
      tempNode = tempNode.next;
    }
    console.log(str);
  }
}

export default ListQueue;
