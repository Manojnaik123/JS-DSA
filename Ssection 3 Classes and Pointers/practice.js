// graphs 

// detecting cycles. 

var graph = {
    A: ['B', 'C'],
    C: ['B', 'D'],
    B: ['D'],
    D: []
}

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


console.log(hasCycle(graph1, 'A'));

// detecting a cycle in an undirected graph using dfs 

