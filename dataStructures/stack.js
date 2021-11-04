//stack can be also implemented with linked list as below.
//In this case its time complexity is O(1) for both push and pop

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(value) {
    //unshift in linked list
    const newNode = new Node(value);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      const currentHead = this.head;
      newNode.next = currentHead;
      this.head = newNode;
    }

    this.length++;
    return this;
  }

  pop() {
    //shift in linked list
    if (this.length === 0) {
      return null;
    }

    const poppedNode = this.head;

    if (this.length === 1) {
      this.tail = null;
    }
    this.head = poppedNode.next;
    this.length--;

    return poppedNode.value;
  }
}

const stack = new Stack();
stack.push(0);
stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);

stack.pop();
stack.pop();
stack.pop();
stack.pop();
stack.pop();
