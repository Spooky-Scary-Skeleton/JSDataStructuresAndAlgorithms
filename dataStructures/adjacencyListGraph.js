class AdjacencyListGraph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = [];
    }
  }

  addEdge(vertex1, vertex2) {
    if (
      this.adjacencyList[vertex1] === undefined ||
      this.adjacencyList[vertex2] === undefined
    ) {
      throw new Error("Invalid vertex! Please add the vertices first.");
    }

    if (!this.adjacencyList[vertex1].includes(vertex2)) {
      this.adjacencyList[vertex1].push(vertex2);
      this.adjacencyList[vertex2].push(vertex1);
    }
  }

  removeEdge(vertex1, vertex2) {
    const index1 = this.adjacencyList[vertex1].indexOf(vertex2);
    const index2 = this.adjacencyList[vertex2].indexOf(vertex1);

    if (index1 === -1 || index2 === -2) {
      throw new Error("Invalid edge! Please add the edge first.");
    }

    this.adjacencyList[vertex1].splice(index1, 1);
    this.adjacencyList[vertex2].splice(index2, 1);
  }

  removeVertex(vertex) {
    if (this.adjacencyList[vertex] === undefined) {
      throw new Error("Invalid vertex!");
    }

    for (const connected of this.adjacencyList[vertex]) {
      const index = this.adjacencyList[connected].indexOf(vertex);
      this.adjacencyList[connected].splice(index, 1);
    }

    delete this.adjacencyList[vertex];
  }
}

let g = new AdjacencyListGraph();
g.addVertex("Dallas");
g.addVertex("Tokyo");
g.addVertex("Aspen");
g.addVertex("Los Angeles");
g.addVertex("Hong Kong");
g.addEdge("Dallas", "Tokyo");
g.addEdge("Dallas", "Aspen");
g.addEdge("Hong Kong", "Tokyo");
g.addEdge("Hong Kong", "Dallas");
g.addEdge("Los Angeles", "Hong Kong");
g.addEdge("Los Angeles", "Aspen");

g.removeVertex("Tokyo");
g.removeEdge("Hong Kong", "Dallas");

console.log(g);

export default AdjacencyListGraph;
