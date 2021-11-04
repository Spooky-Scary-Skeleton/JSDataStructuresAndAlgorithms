bigO Cheat sheet
https://www.bigocheatsheet.com/

Stack
- FILO
- implemented with array or linked list

Queue
- FIFO
- implemented with array or linked list

SinglyLinkedList
- note pop is O(n) (i.e. each node in SinglyLinkedList has no reference to its parent)

DoublyLinkedList
- note pop is O(1) (i.e. each node (except head) in DoublyLinkedList has the reference to its parent)

BinarySerachTree
- every parent node has at most two children
- Every node to the left of a parent is always less than the parent
- Every node to the right of a parent node is always greater than the parent
- insert, find time complexity: average - O(logn); worst - O(n)

Traversing a tree
- Breadth-first Search -> time complexity O(n)
- Deapth-first Search -> time complexity O(n)
  - preOrder
  - inOrder
  - postOrder

MaxBinaryHeap
- can be easily represented with array
- Every parent node has at most two child nodes
- The value of parent node is ALWAYS greater than child nodes
- In a max Binary Heap the parent is greater than the children, but there are no guarantees between sibling nodes
- A binary heap is as compact as possible. All the children of each node are filled out first.
- insert => use bubble-up
- extractMax => use sinking-down