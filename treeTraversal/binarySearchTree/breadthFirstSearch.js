import {
  BinarySearchTree,
  Node,
} from "../../dataStructures/binarySearchTree.js";

class BSTBfs extends BinarySearchTree {
  constructor() {
    super();
  }
}

const binarySearchTree = new BSTBfs();

binarySearchTree.insert(10);
binarySearchTree.insert(6);
binarySearchTree.insert(3);
binarySearchTree.insert(8);
binarySearchTree.insert(15);
binarySearchTree.insert(20);

// -->          10
// -->       6      15
// -->     3   8        20

//result [10, 6, 15, 3, 8, 20]
