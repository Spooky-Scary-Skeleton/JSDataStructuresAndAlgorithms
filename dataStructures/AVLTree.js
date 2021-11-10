//https://www.youtube.com/watch?v=jDM6_TnYIqE&ab_channel=AbdulBari
//https://www.geeksforgeeks.org/avl-tree-set-1-insertion/?ref=lbp

class Node {
  constructor(d) {
    this.key = d;
    this.height = 1;
    this.left = null;
    this.right = null;
  }
}

class AVLTree {
  constructor() {
    this.root = null;
  }

  height(N) {
    if (N === null) return 0;
    return N.height;
  }

  max(a, b) {
    return a > b ? a : b;
  }

  rightRotate(y) {
    let x = y.left;
    let T2 = x.right;

    x.right = y;
    y.left = T2;

    //update hieghts;
    y.height = this.max(this.height(y.left), this.height(y.right)) + 1;
    x.height = this.max(this.height(x.left), this.height(x.right)) + 1;

    //return new root
    return x;
  }

  leftRotate(y) {
    let x = y.right;
    let T2 = x.left;

    x.left = y;
    y.right = T2;

    y.height = this.max(this.height(y.left), this.height(y.right)) + 1;
    x.height = this.max(this.height(x.left), this.height(x.right)) + 1;

    //return new root
    return x;
  }

  getBalance(N) {
    if (N === null) return 0;

    return this.height(N.left) - this.height(N.right);
  }

  insert(node, key) {
    //recursive BST insertion
    if (node === null) return new Node(key);

    if (key < node.key) {
      node.left = this.insert(node.left, key);
    } else if (key > node.key) {
      node.right = this.insert(node.right, key);
    } else {
      return node; //duplicate keys not allowed
    }

    //update height
    node.height = 1 + this.max(this.height(node.left), this.height(node.right));

    //get the balance factor
    let balance = this.getBalance(node);

    //left left
    if (balance > 1 && key < node.left.key) {
      return this.rightRotate(node);
    }

    //right right
    if (balance < -1 && key > node.right.key) {
      return this.leftRotate(node);
    }

    //left right
    if (balance > 1 && key > node.left.key) {
      node.left = this.leftRotate(node.left);
      return this.rightRotate(node);
    }

    //right left
    if (balance < -1 && key < node.right.key) {
      node.right = this.rightRotate(node.right);
      return this.leftRotate(node);
    }

    return node;
  }
}

/* Constructing tree given in the above figure */
tree.root = tree.insert(tree.root, 10);
tree.root = tree.insert(tree.root, 20);
tree.root = tree.insert(tree.root, 30);
tree.root = tree.insert(tree.root, 40);
tree.root = tree.insert(tree.root, 50);
tree.root = tree.insert(tree.root, 25);

/* The constructed AVL Tree would be
            30
            / \
           20 40
          / \   \
         10 25  50
*/
