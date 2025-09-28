// Graphs 
// it is a data structure used to represent the relationships between objects. 
// Objects are called the vertices(or nodes)
// the connections are called edges (or links)

// Example 
// Think of facebook 
// > Here each person is a vertex
// > A friendship between two people is an edge
// So, graph shows that who is connected to whom. 

// Types of graph 
// 1- Undirected graph 
// > Edges do not have the direction

// 2 - Directed Graph (Digraph)
// > Edges have direction

// 3 - Weighted graph 
// > Edges have weight 

// 4 - Unweighted graph 
// > All edges are equal, no weight 

// 5 - Cyclic vs Acyclic 
// > Cyclic - contains cycles (you can loop back to the same node)
// > Acyclic - no cycle ( example DAG - block chain)

// 6 - Connected vs Disconnected 
// > Connected - every node reachable from any other. 
// > Disconnected - some nodes are isolated. 

// There are couple of ways to store graphs. One is adjacency matrix and other is adjacency list. 

class Graph {
    constructor() {
        this.adjacencyList = {}
    }

    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) {
            this.adjacencyList[vertex] = [];
            return true;
        }
        return false;
    }

    addEdge(vertex1, vertex2) {
        if (this.adjacencyList[vertex1] && this.adjacencyList[vertex2]) {
            this.adjacencyList[vertex1].push(vertex2);
            this.adjacencyList[vertex2].push(vertex1);
            return true;
        }
        return false;
    }

    removeEdge(vertex1, vertex2) {
        if (this.adjacencyList[vertex1] && this.adjacencyList[vertex2]) {
            this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(item => item !== vertex2);
            this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(item => item !== vertex1);
            return true;
        }
        return false;
    }

    removeVertex(vertex) {     // my code
        if (this.adjacencyList[vertex]) {
            for (var v of [...this.adjacencyList[vertex]]) {
                this.removeEdge(v, vertex);
            }
            delete this.adjacencyList[vertex];
            return true;
        }
        return false;
    }

    remomveVertex1(vertex){          // instructors code. 
        if(!this.adjacencyList[vertex]) return undefined;
        while(this.adjacencyList[vertex].length){
            var temp = this.adjacencyList[vertex].pop();
            this.removeEdge(vertex, temp);
        }
        delete this.adjacencyList[vertex];
        return this;
    }
}

var myGraph = new Graph();

myGraph.addVertex('A');
myGraph.addVertex('B');
myGraph.addVertex('C');

myGraph.addEdge('A', 'B')
myGraph.addEdge('C', 'A')
myGraph.addEdge('C', 'B')

myGraph.removeVertex('A')

console.log(myGraph);

