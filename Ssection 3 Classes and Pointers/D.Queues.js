// Implementing the queue using array is not optimal because for enqueue and dequeue one of them will be O(n);

// But, in case of the Linked List removing from start of the list is O(1) and adding from end is O(1). Thus, it is optimal. 

import Node from './A.LinkedList.js';

class Queue{
    constructor(value){
        const newNode = new Node(value);
        this.first = newNode;
        this.last = newNode;
        this.length = 1;
    }

    enqueue(value){   // my code and instructors code matches.
        const newNode = new Node(value);
        if(this.length === 0){
            this.first = newNode;
            this.last = newNode;
        } else {
            this.last.next = newNode;
            this.last = newNode;
        }
        this.length++;
        return this;
    }

    dequeue(){        // my code and instructors code matches.
        if(this.length === 0) return undefined;
        const temp = this.first;

        if(this.length === 1){
            this.first = null;
            this.last = null;
        } else {
            this.first = this.first.next;
            temp.next = null;
        }

        this.length--;
        return temp;
    }
}