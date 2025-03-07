class ArrayStack {
  constructor(len) {
    this.stack = [];
    this.maxSize = len;
  }
  push(val){
    if(this.isFull()) {
      console.log('stack over flow');
      return 'stack over flow';
    }
    this.stack.push(val);
  }
  pop(){
    if(this.isEmpty()){
      console.log('stack under flow');
      return 'stack under flow';
    }
    this.stack.pop();
  }
  getTop() {
    return this.stack[this.stack.length];
  }
  isEmpty() {
    return this.stack.length === 0;
  }
  isFull() {
    return this.stack.length === this.maxSize;
  }
  print() {
    console.log(this.stack);
  }
}

export default ArrayStack;
