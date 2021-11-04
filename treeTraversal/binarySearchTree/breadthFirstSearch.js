import BinarySearchTree from "../../dataStructures/binarySearchTree.js";
import Queue from "../../dataStructures/queue.js";

class BSTBFS extends BinarySearchTree {
  constructor() {
    super();
  }

  BFS() {
    const queue = new Queue();
    const result = [];
    let currentNode = this.root;

    queue.enqueue(currentNode);

    while (queue.length !== 0) {
      currentNode = queue.dequeue();
      result.push(currentNode.value);

      if (currentNode.left) {
        queue.enqueue(currentNode.left);
      }

      if (currentNode.right) {
        queue.enqueue(currentNode.right);
      }
    }

    return result;
  }
}

const binarySearchTree = new BSTBFS();

binarySearchTree.insert(10);
binarySearchTree.insert(6);
binarySearchTree.insert(3);
binarySearchTree.insert(8);
binarySearchTree.insert(15);
binarySearchTree.insert(20);

console.log(binarySearchTree.BFS());

// -->          10
// -->       6      15
// -->     3   8        20

//result [10, 6, 15, 3, 8, 20]
