// graphs 

// detecting cycles. 

var graph = {
    A: ['B', 'C'],
    C: ['B', 'D'],
    B: ['D'],
    D: []
}

// traversal 
function dfs(graph, vertex) {
    var visited = new Set();
    var stack = [vertex];
    var list = [];
    visited.add(vertex);

    while (stack.length > 0) {
        var node = stack.pop();
        list.push(node);

        // This is correct but it is good to process the neighbours in left to right order. 
        // for(let neighbour of graph[node] || []){
        //     if(!visited.has(neighbour)){
        //         stack.push(neighbour)
        //         visited.add(neighbour)
        //     }
        // }

        // this will process the neighbours left to right. 
        var neighbours = graph[node] || [];
        for (var i = neighbours.length - 1; i >= 0; i++) {
            if (!visited.has(neighbours[i])) {
                visited.add(neighbours[i]);
                stack.push(neighbours[i]);
            }
        }
    }
    return list;
}

// console.log(dfs(graph, 'B'));


// Lets us detect cycle in the graph. 
// On the path if we visit the visited node then the cycle exists. 

// !Here, Undirected is the key
// Cycle detection in the Undirected graph using the khans algorithm. 

// Using BFS approach 

function hasCycle(graph, v) {
    let visited = new Set();
    let queue = [[v, -1]];
    visited.add(v);

    while (queue.length > 0) {
        let [node, parent] = queue.shift();

        for (let neighbour of graph[node] || []) {
            if (!visited.has(neighbour)) {
                queue.push([neighbour, node]);
                visited.add(neighbour);
            } else if (neighbour !== parent) {
                return true; // found a cycle
            }
        }
    }
    return false;
}

var x = {
    A: ['B', 'C'],
    B: ['A', 'C', 'D'],
    C: ['A', 'B', 'C'],
    D: ['C', 'B']
}

let graph1 = {
    A: ['B'],
    B: ['A', 'C'],
    C: ['B', 'D'],
    D: ['C']
};


// console.log(hasCycle(graph1, 'A'));

// detecting a cycle in an undirected graph using dfs 
// this is logically standard but this whill nor consider the disconnected nodes. 

function hasCycleUsingDFS(graph, vertex) {
    var visited = new Set();
    var stack = [[vertex, -1]];
    visited.add(vertex);

    while (stack.length > 0) {
        var [node, parent] = stack.pop();

        for (let neighbour of graph[node] || []) {
            if (!visited.has(neighbour)) {
                visited.add(neighbour);
                stack.push([neighbour, node]);
            } else if (neighbour !== parent) {
                return true;
            }
        }
    }
    return false;
}

// no cycle
let graph2 = {
    A: ["B", "C"],
    B: ["A", "D", "E"],
    C: ["A"],
    D: ["B"],
    E: ["B"]
};


// has cycle
let graph3 = {
    A: ["B", "C"],
    B: ["A", "C"],
    C: ["A", "B"]
};

let graph4 = {
    A: ["B", "C"],
    B: ["A", "D"],
    C: ["A", "D"],
    D: ["B", "C", "E"],
    E: ["D"]
};

// console.log(hasCycleUsingDFS(graph2, 'A'));
// console.log(hasCycleUsingDFS(graph3, 'A'));

// To also include the disconnected part of the graph we need to 
// iterate over all the nodes of the graph like given below.

function hasCycleUsingDFS(graph) {
    var visited = new Set();

    for (let start in graph) {
        if (!visited.has(start)) {
            if (dfs(graph, start, visited)) {
                return true;
            }
        }
    }
    return false;
}

function dfs(graph, start, visited) {
    var stack = [[start, -1]];
    visited.add(start);

    while (stack.length > 0) {
        var [node, parent] = stack.pop();

        for (let neighbour of graph[node] || []) {
            if (!visited.has(neighbour)) {
                visited.add(neighbour);
                stack.push([neighbour, node]);
            } else if (neighbour !== parent) {
                return true; // cycle found
            }
        }
    }
    return false;
}


//! Detecting cycles in directed graphs. 

// for detecting the cycles in directde graph we need help of the khans algorithm. 
// ? Kanh's algorithm 
// It is a method in graph theory used to find a topological ordering of 
// a Directed Acyclic Graph (DAG).

// What is topological sorting?
// It’s an ordering of the vertices of a directed graph such that for every directed edge u → v, 
// vertex u comes before v in the order.

// Only possible if the graph is a DAG.

// Topological sorting (khan's Algorithm/ BFS).

// Indegree - no of incomming edges to a node. 


let adj = {
    0: [],
    1: [],
    2: [3],
    3: [1],
    4: [0, 1],
    5: [0, 2]
};

let adjAlphabet = {
    A: [],       // 0
    B: [],       // 1
    C: ['D'],    // 2 -> 3
    D: ['B'],    // 3 -> 1
    E: ['A', 'B'], // 4 -> 0, 1
    F: ['A', 'C']  // 5 -> 0, 2
};


// this is the logic to find the indegree of nodes of the graph. 
function indegree(graph) {
    // ? This will work only for the graph where nodes are numbers. 
    // var indegree = Array(totalNodes).fill(0);
    // for(let i = 0; i<totalNodes; i++){
    //     for(let neighbour of graph[i]){
    //         indegree[neighbour]++;
    //     }
    // }
    // return indegree;

    // ? this will work for both numbers and alphabet. 
    var indegree = {};

    for (let i in graph) {
        indegree[i] = 0;
    }

    for (let i in graph) {
        for (let neighbour of graph[i]) {
            indegree[neighbour]++;
        }
    }

    return indegree;
}

// console.log(indegree(adjAlphabet));


// Khans algorithm topological order fiding steps. 
// Step 1: for every node in te graph find the indegree (no of incomming edges to a node).
// Step 2: Initilize a queue
// Create a queue and add all nodes with indegree 0.
// these nodes have no dependency so they can come first in the topological order. 
// As the nodes with 0 degree has pointing to noone they can come first. 
// remember the topo sort definition- if there is a edge between u, v (u->v) then u appears before v.


function topoSort(graph) {
    var indegree = {};

    for (let node in graph) {
        indegree[node] = 0;
    }

    for (let node in indegree) {
        for (let neighbour of graph[node]) {
            indegree[neighbour]++;
        }
    }

    var queue = [];
    var list = [];

    for (let node in indegree) {
        if (indegree[node] === 0) {
            queue.push(node);
        }
    }

    while (queue.length > 0) {
        var node = queue.shift();
        list.push(node);

        for (let neighbour of graph[node]) {
            indegree[neighbour]--;
            if(indegree[neighbour] === 0) queue.push(neighbour)
        }
    }

    return list;

}

// console.log(topoSort(adjAlphabet));

// ---------------------------------

// ! this code is to check is cycle exist in the DAG using the khans algorithm. 
function checkForCycle(graph) {
    var indegree = {};
    var totalNodes = 0;

    for (let node in graph) {
        indegree[node] = 0;
        totalNodes++;
    }

    for (let node in indegree) {
        for (let neighbour of graph[node]) {
            indegree[neighbour]++;
        }
    }

    var queue = [];
    // not needed
    // var list = [];


    for (let node in indegree) {
        if (indegree[node] === 0) {
            queue.push(node);
        }
    }

    // added 
    var count = 0;
    while (queue.length > 0) {
        var node = queue.shift();
        count++;

        for (let neighbour of graph[node]) {
            indegree[neighbour]--;
            if(indegree[neighbour] === 0) queue.push(neighbour)
        }
    }

    if(count === totalNodes){
        return false;
    } 
    return true;
}

// ! Standard version - robust
// Key Improvements
    // Handles nodes that only appear as neighbors.
    // Uses a Set to track all unique nodes.
    // Safely checks if(graph[node]) because some neighbors might not exist as keys.

function checkForCycle(graph) {
    let indegree = {};
    let nodesSet = new Set();

    // Step 1: Collect all nodes (keys + neighbors)
    for (let node in graph) {
        nodesSet.add(node);
        for (let neighbour of graph[node]) {
            nodesSet.add(neighbour);
        }
    }

    // Step 2: Initialize indegrees to 0
    for (let node of nodesSet) {
        indegree[node] = 0;
    }

    // Step 3: Compute indegrees
    for (let node in graph) {
        for (let neighbour of graph[node]) {
            indegree[neighbour]++;
        }
    }

    // Step 4: Initialize queue with nodes of indegree 0
    let queue = [];
    for (let node of nodesSet) {
        if (indegree[node] === 0) queue.push(node);
    }

    // Step 5: Process nodes
    let count = 0;
    while (queue.length > 0) {
        let node = queue.shift();
        count++;

        if (graph[node]) { // some nodes may not exist as keys
            for (let neighbour of graph[node]) {
                indegree[neighbour]--;
                if (indegree[neighbour] === 0) queue.push(neighbour);
            }
        }
    }

    // Step 6: Check for cycle
    return count !== nodesSet.size;
}