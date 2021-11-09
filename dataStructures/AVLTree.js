class AVLTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new Node(value);
    const callStack = [];
    let currentNode = this.root;
    let direction;
    let directionString = "";

    if (currentNode === null) {
      this.root = newNode;
      return;
    }

    while (currentNode) {
      callStack.push([currentNode, direction]);
      if (currentNode.data > data) {
        direction = "l";
        if (currentNode.left === null) {
          currentNode.left = newNode;
          callStack.push([newNode, direction]);
          return;
        }
        currentNode = currentNode.left;
      } else {
        direction = "r";
        if (currentNode.right === null) {
          currentNode.right = newNode;
          callStack.push([newNode, direction]);
          return;
        }
        currentNode = currentNode.right;
      }
    }

    while (callStack.length) {
      const currentStack = callStack.pop()[0];
      const currentNode = currentStack[0];
      directionString += currentStack[1];
      let balanceFactor;
      let leftHeight;
      let rightHeight;

      if (currentNode.left) {
        leftHeight = currentNode.left.height + 1;
      } else {
        leftHeight = 0;
      }

      if (currentNode.right) {
        rightHeight = currentNode.right.height + 1;
      } else {
        leftHeight = 0;
      }

      currentNode.height = Math.max(leftHeight, rightHeight);
      balanceFactor = Math.abs(leftHeight - rightHeight);
      if (balanceFactor > 1) {
        const insertDirection = directionString[-1] + directionString[-2];
        const grandParent = callStack[-1];
        const directChildNode = currentNode
        let grandParentDirection;
        let grandParentNode;
        if (grandParent) {
          grandParentDirection = grandParent[1];
          grandParentNode = grandParent[0];
        }
        if (insertDirection === "ll") {
          if (grandParentDirection = 'l') {
            grandParentNode.left = 
            
          }
        }
        if (insertDirection === "rr") {
        }
        if (insertDirection === "lr") {
        }
        if (insertDirection === "rl") {
        }
      }
    }
  }

  // updateHeight(node) {
  //   let leftHeight;
  //   let rightHeight;
  //   const currentNode = node;

  //   if (currentNode.left) {
  //     this.updateHeight(currentNode.left);
  //   }

  //   if (currentNode.right) {
  //     this.updateHeight(currentNode.right);
  //   }
  // }
}

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
    this.height = 0;
  }
}

const test = new AVLTree();
