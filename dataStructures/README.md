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
- Breadth-first Search
- Deapth-first Search
  - preOrder
  - inOrder
  - postOrder