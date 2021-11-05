import AdjacencyListGraph from "../dataStructures/adjacencyListGraph.js";

class graph extends AdjacencyListGraph {
  constructor() {
    super();
  }

  depthFirstRecursive(start) {
    const result = [];
    const visited = {};

    const traverse = (start) => {
      visited[start] = true;
      result.push(start);
      const neighborList = this.adjacencyList[start];
      if (neighborList.length > 0) {
        for (const neighbor of neighborList) {
          if (visited[neighbor] === undefined) {
            traverse(neighbor);
          }
        }
      }
    };

    traverse(start);

    return result;
  }

  depthFirstIterative(start) {
    const stack = [start];
    const visited = { [start]: true };
    const result = [];

    while (stack.length > 0) {
      const currentNode = stack.pop();
      const neighborList = this.adjacencyList[currentNode];

      result.push(currentNode);

      for (const neighbor of neighborList) {
        if (!!!visited[neighbor]) {
          visited[neighbor] = true;
          stack.push(neighbor);
        }
      }
    }

    return result;
  }

  breadthFirstSearch(start) {
    const queue = [start];
    const visited = { [start]: true };
    const result = [];

    while (queue.length > 0) {
      const currentNode = queue.shift();
      const neighborList = this.adjacencyList[currentNode];
      result.push(currentNode);
      for (const neighbor of neighborList) {
        if (!!!visited[neighbor]) {
          visited[neighbor] = true;
          queue.push(neighbor);
        }
      }
    }

    return result;
  }
}

const graphTest = new graph();

graphTest.addVertex("A");
graphTest.addVertex("B");
graphTest.addVertex("C");
graphTest.addVertex("D");
graphTest.addVertex("E");
graphTest.addVertex("F");

graphTest.addEdge("A", "B");
graphTest.addEdge("A", "C");
graphTest.addEdge("B", "D");
graphTest.addEdge("C", "E");
graphTest.addEdge("D", "E");
graphTest.addEdge("D", "F");
graphTest.addEdge("E", "F");
graphTest.depthFirstRecursive("A"); // [A, B, D, E, C, F]
graphTest.breadthFirstSearch("A"); //[A, B, C, D, E, F]

//          A
//        /   \
//       B     C
//       |     |
//       D --- E
//        \   /
//          F
