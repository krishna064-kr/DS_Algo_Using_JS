import Node from "../../Node/singlyLinkedList.js";

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.nodeCount = 0;
  }

  isEmpty() {
    return !this.head;
  }

  getNodeCount() {
    return this.nodeCount;
  }

  insertAtBegin(val) {
    let newNode = new Node(val);
    newNode.next = this.head;
    this.head = newNode;
    this.nodeCount += 1;
  }

  insertAtEnd(val) {
    if (this.isEmpty()) {
      this.insertAtBegin(val);
      return;
    }
    let newNode = new Node(val);
    let tempNode = this.head;
    while (tempNode.next) tempNode = tempNode.next;
    tempNode.next = newNode;
    this.nodeCount += 1;
  }

  insertAtIndex(val, index) {
    if (index > this.nodeCount || index < 0) {
      console.log(
        `index out of Bound, list only contain ${this.getNodeCount()} nodes.`
      );
      return "index out of Bound";
    }
    if (index === 0) {
      this.insertAtBegin(val);
      return;
    }
    let newNode = new Node(val);
    let tempNode = this.head;
    while (index > 1) {
      tempNode = tempNode.next;
      index -= 1;
    }
    newNode.next = tempNode.next;
    tempNode.next = newNode;
    this.nodeCount += 1;
  }

  deleteFromBegin() {
    if (this.isEmpty()) {
      console.log(`Error: IndexError, can't delete`);
      return `Error: IndexError, can't delete`;
    }
    let deletedNode = this.head.data;
    this.head = this.head.next;
    this.nodeCount -= 1;
    return deletedNode;
  }

  deleteFromEnd() {
    if (this.getNodeCount() <= 1) return this.deleteFromBegin();
    let tempNode = this.head,
      deletedNode;
    while (tempNode.next.next) tempNode = tempNode.next;
    deletedNode = tempNode.next.data;
    tempNode.next = null;
    this.nodeCount -= 1;
    return deletedNode;
  }

  deleteFromIndex(index) {
    if (index > this.getNodeCount()) {
      console.log(`IndexError, can't delete, index: ${index} is out of bound`);
      return `IndexError, can't delete, index: ${index} is out of bound`;
    }
    if (index < 0) {
      console.log(`Error: IndexError, can't delete negative index: ${index}`);
      return `Error: IndexError, can't delete negative index: ${index}`;
    }
    if (index <= 1) return this.deleteFromBegin();
    if (index === this.getNodeCount()) return this.deleteFromEnd();
    let tempNode = this.head,
      deletedNode;
    while (index > 1) {
      tempNode = tempNode.next;
      index -= 1;
    }
    deletedNode = tempNode.next.data;
    tempNode.next = tempNode.next.next;
    console.log({ deletedNode });
    this.nodeCount -= 1;
  }
  display() {
    if (this.isEmpty()) {
      console.log("list is empty");
      return "list is empty";
    }
    let str = "";
    let tempNode = this.head;
    while (tempNode.next) {
      str += tempNode.data + " -> ";
      tempNode = tempNode.next;
    }
    str += tempNode.data;
    console.log(str);
  }
}

export default SinglyLinkedList;
