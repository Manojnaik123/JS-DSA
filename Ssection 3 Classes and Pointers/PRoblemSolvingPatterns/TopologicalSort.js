// What is Topological Sorting?
// Topological sorting is a linear ordering of vertices in a directed graph such that
// for every directed edge u → v, u appears before v in the ordering.

// Topological sorting - The Graph must be a Directed Acyclic Graph.
// 1 - Directed -> Edges have direction (A->b).
// 2 - Acyclic -> No cycles (You cannot have A->B->A).

// You can start from any unvisited vertex, but the algorithm will process the dependencies first 
// You can’t start from just any vertex in topological sorting. in Kahn's algorithm 
// ? Why not?
// Topological sort should start from vertex having zero degree (no dependencies).

// Example: 0->1->2
// Valid topo orders : [0,1,2].
// Invalid if you start at 2: [2,....] (2 can't come before 1).

// ? Where to start?
// You should start from vertex having zero degree.

// ? Topological sorting 
//  We can do this with two ways, they are-
// 1- Kahn's Algorithm
// 2- DFS-based approach 

// We will start with the DFS based approach
// This will help me understand the idea of the dependencies 
// Key idea - a node can only be placed in the topo if it's neighbours are already processes. 

// ! DFS based Topological sorting 

// let vertices = 5;

// let edges = [
//     [0, 4], [0, 1],
//     [1, 3],
//     [4, 3],
//     [3, 2]
// ]


// function dfs() {

// }


// function defDaf(V, adj) {
//     var visited = new Array(V).fill(false);
//     var stack = [];

//     function dfs(node){
//         visited[node] = true;

//         for(let neighbour of adj[node]){
//             if(!visited[])
//         }
//     }

//     // run dfs from all unvisited nodes
//     for (let x = 0; x <= V.length; x++) {
//         if(!visited[x]){
//             dfs(x)
//         }
//     }

// }


function topoSortDFS(V, adj) {
    let visited = new Array(V).fill(false);
    let stack = [];

    function dfs(node) {
        visited[node] = true;

        // visit all neighbors
        for (let neighbor of adj[node]) {
            if (!visited[neighbor]) {
                dfs(neighbor);
            }
        }

        // push to stack after visiting children
        stack.push(node);
    }

    // run dfs from all unvisited nodes
    for (let i = 0; i < V; i++) {
        if (!visited[i]) {
            dfs(i);
        }
    }

    // reverse the stack to get topological order
    return stack.reverse();
}

let vertices = ['a', 'b', 'c', 'd', 'e', 'f'];
let adj = {
    'a': ['d'],
    'f': ['b', 'a'],
    'b': ['d'],
    'd': ['c'],
    'c': [],
    'e': ['f']
};

console.log(topoSortDFS(vertices, adj));