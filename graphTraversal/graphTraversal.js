import AdjacencyListGraph from "../dataStructures/adjacencyListGraph.js";

class graph extends AdjacencyListGraph {
  constructor() {
    super();
  }

  depthFirstRecursive(start) {
    const result = [start];

    const traverse = (start, resultArray) => {
      const neighborList = this.adjacencyList[start];
      if (neighborList.length > 0) {
        for (const neighbor of neighborList) {
          if (!!!resultArray.includes(neighbor)) {
            resultArray.push(neighbor);
            traverse(neighbor, resultArray);
          }
        }
      }
    };

    traverse(start, result);

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

//          A
//        /   \
//       B     C
//       |     |
//       D --- E
//        \   /
//          F
