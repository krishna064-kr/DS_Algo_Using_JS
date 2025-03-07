import Bst from "./BinaryTree/binaryTree.js";
const bst = new Bst();

bst.insert(20);
bst.insert(15);
bst.insert(30);
bst.insert(10);
bst.insert(17);
bst.insert(25);
bst.insert(2);
bst.insert(12);
bst.insert(16);
bst.insert(19);
bst.insert(27);
bst.insert(40);

bst.delete(17)

console.log('inOrder: ',bst.inOrderTraversal().slice(0,-4))
console.log("PreOrder: ",bst.preOrderTraversal().slice(0,-4))
// console.log(bst.countFullNode());