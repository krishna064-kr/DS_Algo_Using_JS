class LinkedListStack {
  constructor(len) {
    this.top = null;
    this.stackSize = len;
    this.currSize = 0;
  }
  push(val) {
    if (this.isFull()) return { error: `can't push data, Stack overflow` };

    let newNode = new Node(val);
    newNode.next = this.top;
    this.top = newNode;
    this.currSize += 1;
  }
  pop() {
    if (this.isEmpty()) return { error: `can't pop data, Stack underflow` };
    this.top = this.top.next;
    this.currSize -= 1;
  }
  getTop() {
    if (this.isEmpty()) {
      console.log("Empty Stack");
      return;
    }
    console.log(`top: ${this.top.data}`);
    return `top -> ${this.top.data}`;
  }
  isEmpty() {
    return !this.top;
  }
  isFull() {
    return this.currSize === this.stackSize;
  }
  print() {
    if (this.isEmpty()) {
      console.log("Empty Stack");
      return "Empty Stack";
    }
    let str = "";
    let tempNode = this.top;
    while (tempNode.next) {
      str += tempNode.data + " => ";
      tempNode = tempNode.next;
    }
    str += tempNode.data;
    console.log(str);
  }
  increaseLengthBy(size) {
    this.stackSize += size;
  }
  decreaseLengthBy(size) {
    if (this.stackSize - size > this.currSize) this.currSize -= size;
    else
      return {
        error: `Data leakage, stack's length exceeds its expected length To decrease the size, apply the pop() method.`,
      };
  }
}

export default LinkedListStack;
