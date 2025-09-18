/*
 ---------------------------------------------
 ! Breadth First search - BFS
 ---------------------------------------------
 Breadth First Search (BFS) is a graph traversal algorithm that explores nodes level by level.

👉 In simple words:
        Start from a source node.
        Visit all its immediate neighbors first.
        Then move to the next level (neighbors of neighbors).
        Keep going until all reachable nodes are visited.
    
    ? Example 

          A
         / \
        B   C
        |   |
        D   E
    BFS order: A → B → C → D → E


 ---------------------------------------------
 ! Depth First Search
 ---------------------------------------------
 DFS is a graph traversal algorithm where you start from a source node
 and keep exploring as deep as possible along one path before backtracking.

 👉 In simple words:
        Pick a starting node.
        Go down one path until you can’t go further.
        Then backtrack and explore other unvisited nodes.
        * We have to use a Stact to maintain the record of the previous vertexces. 
    
 Example: 
   A
  / \
 B   C
 |   |
 D   E

 DFS order (one possibility): A → B → D → C → E

 */

 // Code 

function breadthFirstSearch(graph, vertex){
    var visited = new Set();
    var queue = [vertex];

    while(queue.length > 0){
        var node = queue.shift();

        if(!visited.has(node)){
            
            console.log(node);
            visited.add(node);

            for(let x of graph[node]){
                if(!visited.has(x)){
                    queue.push(x);
                }
            }
        }
        
    }
}

let graph = {
    A: ["B", "C"],
    B: ["D", "E"],
    C: ["F"],
    D: [],
    E: ["F"],
    F: []
};

// breadthFirstSearch(graph, 'A');

// Depth first search code 

function depthFirstSearch(graph, vertex, visited = new Set()){
    if(visited.has(vertex)) return;

    console.log(vertex);
    visited.add(vertex)

    for(let neighbour of graph[vertex]){
        depthFirstSearch(graph, neighbour, visited);
    }
}

depthFirstSearch(graph, 'A');