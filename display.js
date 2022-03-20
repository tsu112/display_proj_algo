// Display
// Create display() that returns a string containing all list values. Build what you wish console.log(myList) did!

class Node {
  constructor(data) {
    this.value = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  frontValue() {
    return this.head.value;
  }

  removeFront() {
    if (this.head == null) {
      return this.head;
    }
    var temp = this.head; // Temp will capture the head value
    this.head = temp.next; // Moving head to the next one in line
    temp.next = null; // Breaks and gets rid of the temp
    return this.head;
  }

  display() {
    var listStr = "";
    if (this.head == null) {
      return "Empty List";
    }
    listStr += this.head.value;
    var runner = this.head.next;
    while (runner != null) {
      listStr += ", " + runner.value;
      runner = runner.next;
    }
    return listStr;
  }
}

let sll1 = new LinkedList();

let node1 = new Node(8);
let node2 = new Node(5);

node1.next = node2;
sll1.head = node1;

console.log(sll1.display());
