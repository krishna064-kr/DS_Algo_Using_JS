import Node from "../../Node/doublyLinkedList.js";

class DoubllyLinkedlist{
    constructor(){
      this.root = null;
    }
    
    insertAtBegin(val){
      let newNode = new Node(val)
      if(!this.root) this.root = newNode;
      else{
        newNode.right = this.root;
        this.root.left = newNode;
        this.root = newNode;
      }
    }
    
    insertAtEnd(val){
      if(!this.root || !this.root.right) this.insertAtBegin(val);
      let newNode = new Node(val);
      let tempNode = this.root;
      while(tempNode.right) tempNode = tempNode.right;
      tempNode.right = newNode;
      newNode.left = tempNode;
    }
    
    insertAtIndex(val, index){
      if(index < 0) return `can't insert at negative index`;
      else if(index < 1 ) return this.insertAtBegin(val);
      else {
        let newNode = new Node(val), tempNode = this.root;
        while(index>1 && tempNode.right){
          tempNode = tempNode.right;
          index -= 1;
        }
        newNode.right = tempNode.right;
        tempNode.right = newNode;
        newNode.left = tempNode;
      }
    }
    
    deleteFromBegin(){
      if(!this.root) return `nothing in the list, can't delete.`;
      else if(!this.root.right) return this.root = null;
      else{
        this.root = this.root.right;
        this.root.left = null;
      }
    }
    
    deleteFromEnd(){
      if(!this.root) return `nothing in the list, can't delete.`;
      else if(!this.root.right) return this.root = null;
      else {
        let tempNode = this.root;
        while(tempNode.right.right){
          tempNode = tempNode.right;
        }
        tempNode.right.left = null;
        tempNode.right = null;
      }
    }
    
    deleteFromIndex(index){
      if(index<0) return `can't delete negative at index`;
      if(index<1) return this.deleteFromBegin();
      else {
        let tempNode = this.root;
        while(index>1 && tempNode.right){
          tempNode = tempNode.right;
          index -= 1;
        }
        if(!tempNode.right){
          tempNode.left.right = null;
          tempNode.right = null;
        }
        else{
          tempNode.right.left = null;
          tempNode.right = tempNode.right.right;
        }
      }
    }
    
    print(currNode = this.root){
      if(!this.root) return 'Empty List';
      if(!currNode) return '';
      let str = ''
      if(!currNode.right) return currNode.data;
      str += currNode.data + ' <=> ' + this.print(currNode.right) ;
      return str;
    }
  }
  

export default DoubllyLinkedlist;