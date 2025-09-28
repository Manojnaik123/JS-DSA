// 🌳 What Is a Tree?
// A tree consists of nodes connected by edges.

// The top node is called the root.

// Each node can have zero or more children.

// Nodes that don’t have children are called leaves.

// Trees don’t contain cycles — they're not like graphs.

// Binary tree.
// Full tree- Every item points to 2 nodes or 0 nodes.
// Perfect tree- Every line in the tree has all elements.
// Complete tree- 
    // Each node has at most 2 children.
    // All levels except possibly the last are full.
    // The last level fills from left to right with no gaps.

// The node in the top is called root node.
// The node that dosent has children are called leaf nodes. 


// A Binary Search Tree (BST) is a binary tree where:
//     Every node has at most two children.
//     For any node:
//         All values in the left subtree are less than the node's value.
//         All values in the right subtree are greater than the node's value.

// Big O
// Worst possible scenario is finding the right most element. -> O(n).
// Confusing refer Amit khuranna.

class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(value) {
        const newNode = new Node(value);
        if (this.root === null) {
            this.root = newNode;
            return this;
        }
        var temp = this.root;
        while (true) {
            if (newNode.value === temp.value) return undefined;

            if (newNode.value < temp.value) {
                if (temp.left === null) {
                    temp.left = newNode;
                    return this;
                }
                temp = temp.left;
            } else {
                if (temp.right === null) {
                    temp.right = newNode;
                    return this;
                }
                temp = temp.right;
            }
        }
    }
    
    contains(value){
        if(!this.root) return undefined;
        var temp = this.root;
        while(temp){
            if(value< temp.value){
                temp = temp.left;
            } else if (value > temp.value) {
                temp = temp.right;
            } else {
                return true
            }
        }
        return false;
    }
}

var myTree = new BinarySearchTree();

myTree.insert(47);
myTree.insert(21);
myTree.insert(76);
myTree.insert(18);

myTree.insert(52);
myTree.insert(82);

console.log(myTree);
