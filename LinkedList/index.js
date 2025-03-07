import DoubllyLinkedlist from "./DoublyList/doublyLinkedList.js";
import SinglyLinkedList from "./SinglyList/singlyLinkedList.js";


// let dll = new DoubllyLinkedlist();
// dll.insertAtBegin(9);
// dll.insertAtBegin(78);
// dll.insertAtEnd(3);
// dll.insertAtEnd(30);
// dll.insertAtBegin(18);
// dll.insertAtIndex(20,7)
// console.log(dll.print())
// dll.deleteFromIndex(4);
// console.log(dll.print())

let sll = new SinglyLinkedList();
sll.insertAtBegin(23);
sll.insertAtBegin(3);
sll.insertAtBegin(2);
sll.insertAtEnd(45);
sll.insertAtIndex(89,3);
sll.display();
sll.deleteFromBegin();
sll.deleteFromEnd();
sll.deleteFromIndex(2);
sll.display();