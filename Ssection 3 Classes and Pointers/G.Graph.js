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


console.log(myGraph.removeVertex('C'));
console.log(myGraph.removeVertex('B'));


console.log(myGraph);

