/*
Tree - it consisits of nodes connected by edges. 
top of the tree is called root.
nodes with no childs are called leaf nodes. 
tree do not contain cycles like graphs. 


Binary tree.
Full tree- Every item points to 2 nodes or 0 nodes.
Perfect tree- Every line in the tree has all elements.
Complete tree- 
    Each node has at most 2 children.
    All levels except possibly the last are full.
    The last level fills from left to right with no gaps.

The node in the top is called root node.
The node that dosent has children are called leaf nodes. 


A Binary Search Tree (BST) is a binary tree where:
    Every node has at most two children.
    For any node:
        All values in the left subtree are less than the node's value.
        All values in the right subtree are greater than the node's value.

Big O
Worst possible scenario is finding the right most element. -> O(n).

Types 
> General tree
> Binary tree
> Binary search tree
> Balanced trees
    - AVL tree
    - Red-Block tree
    - Splay tree
    - b+ & b- tree
> Special tree
    - trie

Confusing refer Amit khuranna.

! It is better to understand 
> Balanced trees
    - AVL tree
    - Red-Block tree
    - Splay tree
    - b+ & b- tree
> Special tree
    - trie
*/

class Node {
    constructor(value) {
        this.left = null;
        this.value = value;
        this.right = null;
    }
}

class BinaryTree {
    constructor() {
        this.root = null;
    }

    insert(value) {
        var newNode = new Node(value);
        if (!this.root) {
            this.root = newNode;
            return this.root;
        }

        var current = this.root;
        var queue = [current];

        while (queue.length > 0) {
            let node = queue.shift();

            if (!node.left) {
                node.left = newNode;
                break;
            } else {
                queue.push(node.left);
            }

            if (!node.right) {
                node.right = newNode;
                break;
            } else {
                queue.push(node.right);
            }
        }

        return this.root;
    }

    // Traversal of the binary tree
    inorder(root) {
        if (!root) return [];

        var stack1 = [];
        var stack2 = [];

        var current = root;

        while (stack1.length > 0 || current !== null) {
            while (current !== null) {
                stack1.push(current);
                current = current.left;
            }
            current = stack1.pop();
            stack2.push(current.value);
            current = current.right;
        }

        return stack2;
    }

    preorder(root) {
        if (!root) return [];

        var stack = [root];
        var list = [];

        while (stack.length > 0) {
            var ele = stack.pop();
            list.push(ele.value);

            if (ele.right) stack.push(ele.right);
            if (ele.left) stack.push(ele.left);
        }

        return list;
    }

    // for list [1,2,3,4,5] the postorder will be [4,5,2,3,1]

    postorder(root) {
        if (!root) return [];

        var stack = [root];
        var list = [];

        while (stack.length > 0) {
            var node = stack.pop();
            list.push(node.value);

            if (node.left) stack.push(node.left);
            if (node.right) stack.push(node.right);
        }

        return list.reverse();
    }

    // Breadth First Search
    levelorder(root) {
        if (!root) return [];

        var queue = [root];
        var list = [];

        while (queue.length > 0) {
            var node = queue.shift();
            list.push(node.value);

            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }
        return list;
    }

    // Traversal using recursion 
    inorderRec(root) {
        if (!root) return;
        this.inorder(root.left);
        console.log(root.value);
        this.inorder(root.right);
    }

    preorderRec(root) {
        if (!root) return;
        console.log(root.value);
        this.preorder(root.left);
        this.preorder(root.right);
    }

    postorderRec(root) {
        if (!root) return;
        this.postorder(root.left);
        this.postorder(root.right);
        console.log(root.value);
    }

    // its to complex to understand this, it is better to stick to the iterative version. 
    levelOrder(root){

    }

    // deletion - Here we will pop the right most element of the tree and then replace it with the 
    // node which we want to delete.
    // Now, the challenge is to find the right most node.

    // This code is written by me but it is recommended to track the parent of the last node seperately. 
    // Go throught that approach after becoming intuitive with this one. 

    delete(value) {
        // handle empty binary tree 
        if (!this.root) return null;

        // if there is only one node
        if (!this.root.left && !this.root.right) {
            if (this.root.value === value) {
                var target = this.root;
                this.root = null;
                return target.value;
            }
            return false;
        }

        // level order traversal to find the deepest and key node
        var queue = [this.root];

        var keyNode = null;
        var current = null;

        while (queue.length > 0) {
            current = queue.shift();

            if (current.value === value) {
                keyNode = current;
            }

            if (current.left) queue.push(current.left);
            if (current.right) queue.push(current.right);
        }

        if (!keyNode) return null;

        keyNode.value = current.value;

        // removing the last node whose value we assigned to the keynode. 
        var queue1 = [this.root];

        while (queue1.length > 0) {
            var node = queue1.shift();

            if (node.left) {
                if (node.left === current) {
                    node.left = null;
                    return value;
                } else {
                    queue1.push(node.left);
                }
            }

            if (node.right) {
                if (node.right === current) {
                    node.right = null;
                    return value;
                } else {
                    queue1.push(node.right);
                }
            }
        }
        return value;
    }
}

// var binaryTree = new BinaryTree();
// binaryTree.insert(1);
// binaryTree.insert(2);
// binaryTree.insert(3);
// binaryTree.insert(4);
// binaryTree.insert(5);


// binaryTree.delete(3);

// console.log(binaryTree.levelorder(binaryTree.root));


// console.log('left', binaryTree.root.left);
// console.log('right', binaryTree.root.right);

// ? Binary search tree - 
// A binary tree where all the nodes have atmost 2 nodes. 
// > the left sub tree of the node has lesser value and nodes of right sub tree has greater value. 

// class Node {
//     constructor(value) {
//         this.left = null;
//         this.value = value;
//         this.right = null;
//         this.frequency = 1;
//     }
// }

class BST {
    constructor() {
        this.root = null;
    }

    insert(value) {
        var newNode = new Node(value);

        if (!this.root) {
            this.root = newNode;
            return this;
        }

        var current = this.root;

        while (true) {
            if (current.value === value) {
                current.frequency++;
                return true;
            } else if (current.value > value) {
                if (!current.left) {
                    current.left = newNode;
                    break;
                } else {
                    current = current.left;
                }
            } else {
                if (!current.right) {
                    current.right = newNode;
                    break;
                } else {
                    current = current.right;
                }
            }
        }
        return this;
    }

    delete(target) {
        if (!this.root) return false;

        var current = this.root;
        var parent = null;

        while (current) {
            // parent = current;
            if (current.value === target) {
                break;
            } else if (current.value > target) {
                parent = current;
                current = current.left;
            } else {
                parent = current;
                current = current.right;
            }
        }

        // target didnt match with any of the node's value
        if (!current) {
            return false;
        }

        // id the element has dup[licated then reduce its frequency. 
        if (current.frequency > 1) {
            current.frequency--;
            return true;
        }

        // case 1- where target has no childs
        if (!current.left && !current.right) {

            // if the node with value equal to target is root and dosent has child. 
            if (!parent) {
                this.root = null;
                return true;
            }

            if (parent.value > current.value) {
                parent.left = null;
            } else {
                parent.right = null;
            }
        }

        // case 2:where target has excatly one child 
        else if (!current.left || !current.right){
            var child = current.left ? current.left : current.right;
            if(!parent) this.root = child;
            else if (parent.value > current.value) parent.left = child;
            else parent.right = child;
        }


        // case 3: where target has excatly two childs
        else {
            var sucessorParent = current;
            var sucessor = current.right;

            while(sucessor.left){
                sucessorParent = sucessor;
                sucessor = sucessor.left;
            }

            current.value = sucessor.value;

            if(sucessorParent.right === sucessor){
                sucessorParent.right = sucessor.right;
            } else {
                sucessorParent.left = sucessor.right;
            }
        }
        return true;
    }

    levelOrderIterative(root) {
        if (!root) return [];

        var queue = [root];
        var list = [];

        while (queue.length > 0) {
            var node = queue.shift();
            list.push(node.value);

            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }

        return list;
    }

    inOrderIterative(root){  // bf category

    }

    preorderiterative(root){
        if(!root) return [];

        var stack = [root];
        var list = [];

        while(stack.length > 0){
            var node = stack.pop();
            list.push(node.value);

            if(node.right) stack.push(node.right);
            if(node.left) stack.push(node.left);
        }

        return list;
    }

    postorderiterative(root){
        if(!root) return [];

        var stack = [root];
        var list = [];

        while(stack.length > 0){
            var node = stack.pop();
            list.push(node.value);

            if(node.left) stack.push(node.left);
            if(node.right) stack.push(node.right);
        }

        return list.reverse();
    }
}

// ! It is better to understand 
// > Balanced trees
//     - AVL tree
//     - Red-Block tree
//     - Splay tree
//     - b+ & b- tree
// > Special tree
//     - trie

// ? Balanced tree 

// Example of balanced and Unbalanced tree.

    // Unbalanced BST (inserting sorted data)

    // 1
    //  \
    //   2
    //    \
    //     3
    //      \
    //       4
    //        \
    //         5          Height = 5 (Like a linked list) Search becomes O(n)

    // Balanced BST with same data

    //       3
    //     /  \
    //    2    5
    //   /    /
    //  1    4             Height = 3 (logorthemic) Search becomes O(logn) 

// ? Types of balanced tree 
// 1- AVL tree - strictly balalced (height difference <= 1)
    // An AVL Tree is the first self-balancing Binary Search Tree (BST) invented by Adelson-Velsky and Landis.

    // It’s a BST with an extra condition:
    // For every node, the height difference between its left and right subtree ≤ 1.

    // This difference is called the balance factor.

    // ✅ This ensures the tree stays tightly balanced, making search, insert, and delete O(log n).

// 2- Red-black tree - less strict, but easier to maintain balance 
    // A Red-Black Tree (RBT) is a kind of self-balancing binary search tree.
    // It keeps the tree roughly balanced using an extra piece of information: each node is colored either Red or Black.

    // By enforcing a set of rules, the tree guarantees that no path is ever more than twice 
    // as long as another → keeping height = O(log n).

// 3- B-tree/ B+tree - used in database and file system 

// 4- Splay trees 