import BinarySearchTree from "../../dataStructures/binarySearchTree.js";

class BSTDFS extends BinarySearchTree {
  constructor() {
    super();
  }

  DFSPreOrder() {
    let currentNode = this.root;
    const result = [];

    function traverse(startingNode) {
      let currentNode = startingNode;

      while (true) {
        result.push(currentNode.value);
        if (currentNode.left) {
          traverse(currentNode.left, result);
        }
        if (currentNode.right) {
          traverse(currentNode.right, result);
        }
        break;
      }
    }

    traverse(currentNode, result);

    return result;
  }

  DFSPostOrder() {
    let currentNode = this.root;
    const result = [];

    function traverse(startingNode) {
      let currentNode = startingNode;

      while (true) {
        if (currentNode.left) {
          traverse(currentNode.left, result);
        }
        if (currentNode.right) {
          traverse(currentNode.right, result);
        }
        result.push(currentNode.value);
        break;
      }
    }

    traverse(currentNode, result);

    return result;
  }

  DFSInOrder() {
    let currentNode = this.root;
    const result = [];

    function traverse(startingNode) {
      let currentNode = startingNode;

      while (true) {
        if (currentNode.left) {
          traverse(currentNode.left, result);
        }
        result.push(currentNode.value);
        if (currentNode.right) {
          traverse(currentNode.right, result);
        }
        break;
      }
    }

    traverse(currentNode, result);

    return result;
  }
}

const binarySearchTree = new BSTDFS();

binarySearchTree.insert(10);
binarySearchTree.insert(6);
binarySearchTree.insert(15);
binarySearchTree.insert(3);
binarySearchTree.insert(8);
binarySearchTree.insert(20);

console.log(binarySearchTree.DFSPreOrder());
console.log(binarySearchTree.DFSPostOrder());
console.log(binarySearchTree.DFSInOrder());

//           10
//        6      15
//      3   8        20

//PreOrder [10, 6, 3, 8, 15, 20]
//PostOrder [3, 8, 6, 20, 15, 10]
//InOrder [3, 6, 8, 10, 15, 20]
