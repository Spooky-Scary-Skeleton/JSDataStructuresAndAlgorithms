//queue can be also implemented with linked list as below.
//In this case its time complexity is O(1) for both push and pop
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  enqueue(value) {
    //push in linked list
    const newNode = new Node(value);
    if (this.length === 0) {
      this.head = newNode;
    } else {
      const currentTail = this.tail;
      currentTail.next = newNode;
    }
    this.tail = newNode;
    this.length++;
  }

  dequeue() {
    //shift in linked list
    if (this.length === 0) {
      return null;
    }

    const poppedHead = this.head;

    if (this.length === 1) {
      this.tail = null;
    }
    this.head = poppedHead.next;
    this.length--;
  }
}

const queue = new Queue();

queue.enqueue(0);
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);

queue.dequeue();
queue.dequeue();
queue.dequeue();
queue.dequeue();
queue.dequeue();
