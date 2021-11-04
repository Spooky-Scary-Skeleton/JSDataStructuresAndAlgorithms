class Node {
  constructor(value) {
    this.value = value;
    this.previous = null;
    this.next = null;
  }
}

class DoublyLinkedList {
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
      newNode.previous = this.tail;
      this.tail = newNode;
    }

    this.length++;
    return this;
  }

  pop() {
    if (this.length === 0) {
      return null;
    }

    const poppedTail = this.tail;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = poppedTail.previous;
      this.tail.next = null;
      poppedTail.previous = null;
    }

    this.length--;
    return poppedTail;
  }

  shift() {
    if (this.length === 0) {
      return null;
    }
    const poppedHead = this.head;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = poppedHead.next;
      this.head.previous = null;
      poppedHead.next = null;
    }

    this.length--;
  }

  unshift(value) {
    const newNode = new Node(value);

    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.head.previous = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }

    this.length++;
    return this;
  }

  get(index) {
    if (this.length === 0) {
      return null;
    }

    if (index < 0 || index > this.length - 1) {
      return null;
    }

    if (this.length === 1) {
      return this.head;
    }

    let count = 0;
    let currentNode = this.head;

    while (count < index) {
      currentNode = currentNode.next;
      count++;
    }

    return currentNode;
  }

  set(index, value) {
    if (index < 0 || index > this.length - 1) {
      return false;
    }

    if (this.length === 0) {
      return false;
    }

    let currentNode = this.get(index);
    currentNode.value = value;
    return true;
  }

  insert(index, value) {
    if (index < 0 || index > this.length - 1) {
      return false;
    }

    if (index === 0) {
      this.unshift(value);
    }

    if (index === this.length - 1) {
      this.push(value);
    }

    const newNode = new Node(value);
    const previousNode = this.get(index - 1);
    const currentNode = previousNode.next;

    previousNode.next = newNode;
    newNode.previous = previousNode;
    newNode.next = currentNode;
    currentNode.previous = newNode;

    this.length++;
    return true;
  }
  remove(index) {
    const currentNode = this.get(index);
    if (currentNode) {
      const previousNode = currentNode.previous;
      const nextNode = currentNode.next;

      previousNode.next = nextNode;
      nextNode.previous = previousNode;
      currentNode.next = null;
      currentNode.previous = null;

      return currentNode;
    }
  }
}

const dl = new DoublyLinkedList();

dl.push(0);
dl.push(1);
dl.push(2);
dl.push(3);
dl.push(4);

dl.set(0, 4);
dl.set(1, 3);
dl.set(2, 2);
dl.set(3, 1);
dl.set(4, 0);
