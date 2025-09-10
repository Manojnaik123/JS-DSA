// This section is relatively easy if you know linked in section perfectly. 

// STACK - add and remove from same end. 
//  | |
//  |O|
//  |O|
//  |O|

// if we implement stact with array TouchEvent, it is effecient way to do insertion and deletion from the end of the array. 
// This approach will reduce time complexity. 

//  | |
//  |O|-2
//  |O|-1
//  |O|-0

// In linked list to remove and add elements from the begining has time complexity of O(1);
// Whereas, for removing and adding elements from the end the complexity is O(n) & O(1);
// So, the first approach is optimal.
// In case of LL, we had head and tail. But, in stacks we have top. We, dont need bottom. 

//  | |
//  |O|-2
//  |O|-1
//  |O|-0 <= top

import Node from './A.LinkedList.js';

class Stack {
    constructor(value) {
        const newNode = new Node(value);
        this.top = newNode;
        this.length = 1;
    }

    push(value) {                      // this push in Stack is unshift in linked list. 
        var newNode = new Node(value);

        if (!this.head) {
            this.top = newNode;
        } else {
            newNode.next = this.top;
            this.top = newNode;
        }

        this.length++;
        return this;
    }

    pop() {           // my code
        if (this.length === 0) return undefined;
        var temp = this.top;

        this.top = this.top.next;
        temp.next = null;

        this.length--;
        return temp;
    }
}   

const val = new Stack(1);
console.log(val.top);


