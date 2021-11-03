//push() timecomplexity: log(1)
//pop() timecomplexity: log(n)
//shift() timecomplexity: log(1)
//unshift() timecomplexity: log(1)
//get() timecomplexity: log(1)
//set() timecomplexity: log(1)
//insert() timecomplexity: log(n)
//remove() timecomplexity: log(n)

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(value) {
    const newNode = new Node(value);

    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }

    this.length++;
    return this;
  }

  pop() {
    let previousNode;
    let currentNode = this.head;

    if (this.length === 0) {
      return null;
    }

    while (currentNode.next) {
      const nextNode = currentNode.next;
      previousNode = currentNode;
      currentNode = nextNode;
    }

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = previousNode;
      this.tail.next = null;
    }

    this.length--;
    return currentNode;
  }

  shift() {
    if (this.length === 0) {
      return null;
    }

    if (this.length === 1) {
      const temp = this.head;
      this.head = null;
      this.tail = null;
      this.length--;
      return temp;
    }

    const currentHead = this.head;
    const newHead = currentHead.next;

    currentHead.next = null;
    this.head = newHead;
    this.length--;

    return currentHead;
  }

  unshift(value) {
    const newNode = new Node(value);
    const currentHead = this.head;

    this.head = newNode;
    this.head.next = currentHead;
    if (this.length === 0) {
      this.tail = newNode;
    }
    this.length++;
  }

  get(index) {
    if (index < 0 || index > this.length - 1) {
      return null;
    }

    if (index === 0) {
      return this.head;
    }

    if (index === this.length - 1) {
      return this.tail;
    }

    let currentNode = this.head;
    let counter = 0;
    while (counter < index) {
      currentNode = currentNode.next;
      counter++;
    }

    return currentNode;
  }

  set(index, value) {
    const node = this.get(index);
    if (node) {
      node.value = value;
      return true;
    }
    return false;
  }

  insert(index, value) {
    if (index < 0 || index > this.length - 1) {
      return null;
    }

    if (index === 0) {
      return this.unshift(value);
    }

    if (index === this.length - 1) {
      return this.push(value);
    }

    const newNode = new Node(value);
    const previousNode = this.get(index - 1);
    const currentNode = previousNode.next;

    previousNode.next = newNode;
    newNode.next = currentNode;
    this.length++;
    return this;
  }

  remove(index) {
    if (this.length === 0) {
      return null;
    }

    if (index < 0 || index > this.length - 1) {
      return null;
    }

    if (index === this.length - 1) {
      return this.pop();
    }

    if (index === 0) {
      return this.shift();
    }

    const previousNode = this.get(index - 1);
    const currentNode = previousNode.next;
    const nextNode = currentNode.next;

    previousNode.next = nextNode;
    currentNode.next = null;
    this.length--;

    return this;
  }

  reverse() {
    if (this.length === 0) {
      return null;
    }

    if (this.length === 1) {
      return this;
    }

    let previousNode = this.head;
    let currentNode = previousNode.next;

    while (currentNode) {
      const nextNode = currentNode.next;
      currentNode.next = previousNode;
      previousNode = currentNode;
      currentNode = nextNode;
    }

    const temp = this.head;
    this.head.next = null;
    this.head = this.tail;
    this.tail = temp;
    this.length--;
    return this;
  }
}

const sl = new SinglyLinkedList();

sl.push(0);
sl.push(1);
sl.push(2);
sl.push(3);
sl.push(4);
sl.push(5);

sl.reverse(1);
