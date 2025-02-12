
import Node from '../../Node/doublyLinkedList.js'

class Bst{
    constructor(){
      this.root = null;
    }
    
    isEmpty(){
      return !this.root;
    }
    
    insert(val, currNode = this.root){
      let newNode = new Node(val);
      if(this.isEmpty()) this.root = newNode;
      else if(val < currNode.data){
        if(!currNode.left) currNode.left = newNode;
        else insert(val, currNode.left)
      }
      else {
        if(!currNode.right) currNode.right = newNode;
        else insert(val, currNode.right);
      }
    }
    
    inOrderTraversal(currNode = this.root){
      if(this.isEmpty()) return 'tree has no data';
      if(!currNode) return '';
      let str = '';
      str += this.inOrderTraversal(currNode.left);
      str += currNode.data + ' -> ';
      str += this.inOrderTraversal(currNode.right);
      return str;
    }
    
    preOrderTraversal(currNode = this.root){
      if(this.isEmpty()) return 'Tree has no data';
      if(!currNode) return '';
      let str = '';
      str += currNode.data + ' -> ';
      str += this.preOrderTraversal(currNode.left);
      str += this.preOrderTraversal(currNode.right);
      return str;
    }
    
    postorderTraversal(currNode = this.root){
      if(this.isEmpty()) return 'tree has no data';
      if(!currNode) return '';
      str = '';
      str += this.postorderTraversal(currNode.left);
      str += this.postorderTraversal(currNode.right);
      str += currNode.data + ' -> ';
      return str;
    }
    
    countAllNode(currNode = this.root){
      return !currNode ? 0 : 1 + this.countNode(currNode.left) + this.countNode(currNode.right);
    }
    
    countLeafNode(currNode = this.root){
      if(!currNode) return 0;
      return !currNode.left && !currNode.right ? 1 : this.countLeafNode(currNode.left) + this.countLeafNode(currNode.right);
    }
    
    countNonLeafNode(currNode = this.root){
      return !currNode || (!currNode.left && !currNode.right) ? 0 : 1 + this.countNonLeafNode(currNode.left) + this.countNonLeafNode(currNode.right);
    }
    
    countFullNode(currNode = this.root){
      return currNode.left && currNode .right ? 1 : 0;
    }
    
    findMax(currNode = this.root){
      return !currNode.right ? currNode.data : this.findMax(currNode.right);
    }
    findMin(currNode = this.root){
      return !currNode.left ? currNode.data : this.findMin(currNode.left);
    }
    
    searchEle(val, currNode = this.root){
        if(!currNode) return 'Not Found';
        else if(val === currNode.data) return currNode.data;
        else if(val < currNode.data) searchEle(val, currNode.left);
        else searchEle(val, currNode.right);
    }
    
  }
  