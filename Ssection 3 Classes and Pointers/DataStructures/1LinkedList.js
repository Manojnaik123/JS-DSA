/*
! Linked list - Elements linked using nodes. 

? Types of linked list 
> Singly Linked list
> Doubly Linked list
> Circular linked list ✘
    last node connects back to the head.

? Basic Operations (must know for all).
> Insertion
    at he begining 
    at the given position
    at the end
> Deletion
    at he begining 
    at the given position
    at the end
> Searching (finding an element).

? Key problems (5/10)
    Reverse a linked list (iterative + recursive).
    Find middle of linked list (fast/slow pointer).
    Merge two sorted linked lists.
    Intersection point of two linked lists. 
    Check if linked list is palindrome.
    Find nth node from the end. 

    Detect and remove a loop in linked list (Floyd’s cycle detection). ✘ (bf)
    Remove duplicates from sorted/unsorted linked list. ✘
    Rotate/shift a linked list. ✘
    Deep copy of a linked list with random pointers (advanced). ✘
? Complexity analysis
*/
// ! Singly linked list 
class SinglyNode {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(value) {
        var newNode = new SinglyNode(value);
        if (this.length === 0) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }

    pop() {
        if (this.length === 0) return undefined;
        var temp = this.head;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            var prev = null;
            while (temp.next) {
                prev = temp;
                temp = temp.next;
            }
            this.tail = prev;
            prev.next = null;
        }
        this.length--;
        return temp;
    }

    unshift(value) {
        var newNode = new SinglyNode(value);
        if (this.length === 0) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }

    shift() {
        if (this.length === 0) return undefined;
        var temp = this.head;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = this.head.next;
            temp.next = null;
        }
        this.length--;
        return temp;
    }

    get(index) {
        if (this.length === 0) return undefined;
        if (index < 0 || index > this.length - 1) return undefined;
        var current = this.head;
        var i = 0;

        while (i < index) {
            current = current.next;
            i++;
        }

        return current;
    }

    set(index, value) {
        var node = this.get(index);
        if (node) {
            node.value = value;
            return true;
        }
        return false;
    }

    insert(index, value) {
        if (index < 0 || index > this.length) return undefined;
        if (index === 0) return this.unshift(value);
        if (index === this.length) return this.push(value);

        var newNode = new SinglyNode(value);
        var prev = this.get(index - 1);

        newNode.next = prev.next;
        prev.next = newNode;

        this.length++;
        return this;
    }

    delete(index) {
        // go for get it already checks the bound
        if (index === 0) return this.shift();
        if (index === this.length - 1) return this.pop();

        var prev = this.get(index - 1);
        var current = prev.next;
        
        prev.next = current.next;
        current.next = null;

        this.length--;
        return current;
    }

    reverse() {
        if (this.length === 0) return false;

        var current = this.head;
        this.head = this.tail;
        this.tail = current;

        var prev = null;
        var next = null;

        while (current) {
            next = current.next;
            current.next = prev;
            prev = current;
            current = next;
        }
        return true;
    }
}

// ! Doubly linked list 

class DoublyNode {
    constructor(value) {
        this.prev = null;
        this.value = value;
        this.next = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(value) {
        var newNode = new DoublyNode(value);
        if (this.length === 0) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }

    pop() {
        if (this.length === 0) return undefined;
        var temp = this.tail;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            temp = this.tail;
            this.tail = this.tail.prev;
            this.tail.next = null;
            temp.prev = null;
        }
        this.length--;
        return temp;
    }

    unshift(value) {
        var newNode = new DoublyNode(value);
        if (this.length === 0) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head.prev = newNode;
            this.head = newNode;
        }
        this.length++;
        return this;
    }

    shift() {
        if (this.length === 0) return undefined;
        var temp = this.head;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = this.head.next;
            this.head.prev = null;
            temp.next = null;
        }
        this.length--;
        return temp;
    }

    get(index) {
        if (index < 0 || index > this.length - 1) return undefined;

        var temp = this.head;
        var i = 0;

        while (i < index) {
            temp = temp.next;
            i++;
        }

        return temp;
    }

    set(index, value) {
        var current = this.get(index);
        if (current) {
            current.value = value;
            return true;
        }
        return false;
    }

    insert(index, value) {
        if (index === 0) return this.unshift(value);
        if (index === this.length) return this.push(value);

        var current = this.get(index);
        var newNode = new DoublyNode(value);

        newNode.next = current;
        newNode.prev = current.prev;
        current.prev.next = newNode;
        current.prev = newNode;

        this.length++;
        return this;
    }

    delete(index) {
        if(index === 0) return this.shift();
        if(index === this.length-1) return this.pop();

        var node = this.get(index);
        if (node) {
            node.prev.next = node.next;
            node.next.prev = node.prev;
            node.next = null;
            node.prev = null;
            return node;
        }
        return node;
    }

    reverse() {
        if (this.length === 0) return false;

        var current = this.head;
        this.head = this.tail;
        this.tail = current;

        var temp = null;

        while (current) {
            temp = current.next;
            current.next = current.prev;
            current.prev = temp;

            current = temp;
        }

        return true;
    }
}

// ! Cyclic linked list 

// Cyclic linked list.

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

function insertAtEnd(head, value) {
    let newNode = new Node(value);

    if (!head) {
        newNode.next = newNode;
        head = newNode;
        return head;
    }

    let current = head;

    while (current.next !== head) {
        current = current.next;
    }

    current.next = newNode;
    newNode.next = head;

    return head;
}

function insertionAtBegening(head, value) {
    let newNode = new Node(value);

    if (!head) {
        newNode.next = newNode;
        head = newNode;
        return head;
    }

    var current = head;

    while (current.next !== head) {
        current = current.next;
    }

    current.next = newNode;
    newNode.next = head;
    head = newNode;

    return head;
}

function deletionAtEnd(head) {
    if (!head) return undefined;

    if (head.next === head) {
        let temp = head;
        head = null;
        return temp;
    }

    var current = head;
    var prev = null;

    while (current.next !== head) {
        prev = current;
        current = current.next;
    }

    prev.next = head;
    // current.next = null;  this will any way out of the list so no need to worry about it. 
    return current;
}

function deletionAtBegining(head) {
    if (!head) return undefined;

    var temp = head;
    if (head === head.next) {
        head = null;
        return temp;
    }

    let current = head;

    while (current.next !== head) {
        current = current.next;
    }

    head = head.next;
    current.next = head;
    return temp;
}


//-------------------------------------------------------------------------------------
// Inserting at the given position.
//-------------------------------------------------------------------------------------


import { LinkedList } from './A.LinkedList.js';

var ll = new LinkedList(1);
ll.push(2);
ll.push(3);
ll.push(4);
ll.push(5);

ll.tail.next = ll.head;

function insertAtIndex(head, index, value) {
    if (index < 0) return head; // reject invalid index

    // If list is empty
    if (!head) {
        if (index === 0) {
            let newNode = new Node(value);
            newNode.next = newNode;
            return newNode; // new head
        }
        return head; // reject (out of bounds)
    }

    // Count the length of the circular list
    let current = head;
    let length = 1;
    while (current.next !== head) {
        current = current.next;
        length++;
    }

    // Reject if index > length
    if (index > length) {
        return head; // no insertion
    }

    // Insertion at beginning
    if (index === 0) {
        return insertionAtBegening(head, value);
    }

    // Traverse to the (index - 1)-th node
    current = head;
    let count = 0;
    while (count < index - 1) {
        current = current.next;
        count++;
    }

    // Create and insert new node
    let newNode = new Node(value);
    newNode.next = current.next;
    current.next = newNode;

    return head;
}

// var head = insertAtEnd(null, 1);

// insertAtEnd(head, 2);
// insertAtEnd(head, 3);
// insertAtEnd(head, 4);


// inserAtIndex(head, 0, 5);
// var t= head;

// while(t.next !== head){
//     console.log(t);
//     t = t.next;
// }


// ! Problems. 
// ? Find middle of linked list (fast/slow pointer).

function findMiddle(head) {
    if (!head) return undefined;
    var slow = head;
    var fast = head;

    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }

    return slow;
}

// ? Merge two sorted linked lists.

function merge(left, right) {
    var result = [];
    var i = 0;
    var j = 0;
    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) {
            result.push(left[i]);
            i++;
        } else {
            result.push(right[j]);
            j++;
        }
    }

    return result.concat(left.slice(i).concat(right.slice(j)));
}

// ? Intersection point of two linked lists. 

// import { LinkedList } from '../A.LinkedList.js';

// var list1 = new LinkedList(1);
// list1.push(2);
// list1.push(3);
// list1.push(4);
// list1.push(5);


// var list2 = new LinkedList(6);
// list2.push(7);

// var temp = list1.head;
// var i = 0;
// while (i < 3) {
//     temp = temp.next;
//     i++;
// }

// list2.tail.next = temp;

function intersectionPoint(m, n) {
    var mhead = m;
    var nhead = n;

    var mLen = 0;
    var nLen = 0;

    // find the length of each list.
    while (mhead) {
        mLen++;
        mhead = mhead.next;
    }

    while (nhead) {
        nLen++;
        nhead = nhead.next;
    }

    var diff = Math.abs(mLen - nLen);

    mhead = m;
    nhead = n;

    if (mLen > nLen) {
        var i = 0;
        while (i < diff) {
            mhead = mhead.next;
            i++;
        }
    } else {
        var i = 0;
        while (i < diff) {
            nhead = nhead.next;
            i++;
        }
    }

    while (mhead && nhead) {
        if (mhead === nhead) {
            return mhead;
        }
        mhead = mhead.next;
        nhead = nhead.next;
    }
    return undefined;
}

// console.log(intersectionPoint(list1.head, list2.head));

// ? Check if linked list is palindrome.

function ispalindrome(head) {
    if (!head) return true;
    if (!head.next) return true;

    var fast = head;
    var slow = head;

    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }

    var secondHalf = slow;

    var prev = null;
    var next = null;

    while (secondHalf) {
        next = secondHalf.next;
        secondHalf.next = prev;
        prev = secondHalf;
        secondHalf = next;
    }

    var firsthalf = head;
    secondHalf = prev;

    while (firsthalf && secondHalf) {
        if (firsthalf.value !== secondHalf.value) {
            return false;
        }
        firsthalf = firsthalf.next;
        secondHalf = secondHalf.next;
    }

    return true;
}

// ? Find nth node from the end.
import { LinkedList } from '../A.LinkedList.js';

var list1 = new LinkedList(1);
list1.push(2);
list1.push(3);
list1.push(4);
list1.push(5);
list1.push(6);


function nthFromLast(head, n) {
    if (!head) return null;

    let first = head;
    let count = 0;

    // Move first n steps ahead
    while (count < n && first) {
        first = first.next;
        count++;
    }

    // If n is greater than length of list
    if (count < n) return undefined;

    let second = head;

    // Move both until first reaches end
    while (first) {
        first = first.next;
        second = second.next;
    }

    return second; // nth node from the end
}

// console.log(nthFromLast(list1.head, 6));