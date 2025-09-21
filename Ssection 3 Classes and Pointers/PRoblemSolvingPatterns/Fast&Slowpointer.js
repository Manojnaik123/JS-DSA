/*
Lets take an example to understand the fast and slow pointer. 
Imagine there are two runners A and B running in a circle. Among then A runs slower and B runs faster.
Then, in this case there is point at which the runner B will catch up to runner A. 

Checking if the linked list contains a cycle. 
getting the middle of the linked list. 

https://www.youtube.com/watch?v=b139yf7Ik-E - Determine if a number is a happy number. 

! Problems to be covered:
    Cycle detection in linked list
    Middle of the linked list 
    Palindrome linked list 
    Detecting cycles in arrays  // Complete array 
    Intersection point of two linked list 

*/


//----------------------------------------------------------------------------------------
//! Cycle detection in linked list
//----------------------------------------------------------------------------------------
import { LinkedList } from '../A.LinkedList.js';

var myList = new LinkedList(1);
myList.push(2);
myList.push(3);
myList.push(4);



function cycleChecker(head) {
    if (!head) return null;

    var slow = head;
    var fast = head; // We are not setting head.next.next  here because it can cause error. So, we have set it inside the while loop.
    // the while loop checks the fast and fast.next this will ensure thet the assignment to next dosent throw error
    while (fast && fast.next) {
        fast = fast.next.next;
        slow = slow.next;
        if (fast === slow) {
            return true;
        }
    }

    return false;
}

// console.log(cycleChecker(myList.head));

//----------------------------------------------------------------------------------------
//! Middle of the linked list 
//----------------------------------------------------------------------------------------

// ? odd length-

var listWithOddLength = new LinkedList(1);
listWithOddLength.push(2);
listWithOddLength.push(3);
listWithOddLength.push(4);
listWithOddLength.push(5);

var listWithEvenLength = new LinkedList(1);
listWithEvenLength.push(2);
listWithEvenLength.push(3);
listWithEvenLength.push(4);


function middleOfLinkedList(head) {
    if (!head) return undefined;
    var slow = head;
    var fast = head;

    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }

    return slow;
}

// console.log(middleOfLinkedList(listWithOddLength.head).value);

// console.log(middleOfLinkedList(listWithEvenLength.head).value);

//----------------------------------------------------------------------------------------
//! Palindrome linked list 
//----------------------------------------------------------------------------------------

var palindromeList = new LinkedList(1);
// palindromeList.push(2);
// palindromeList.push(3);
// palindromeList.push(3);
// palindromeList.push(2);
// palindromeList.push(1);

// [1,2,3,2,1];
palindromeList.pop();

// Check if a singly linked list is a palindrome
function isLinkedListPalindrome(head) {
    if (!head || !head.next) return true; // Empty or single-node list is a palindrome

    // Step 1: Find the middle of the list
    let slowPointer = head;
    let fastPointer = head;

    while (fastPointer && fastPointer.next) {
        slowPointer = slowPointer.next;
        fastPointer = fastPointer.next.next;
    }

    // Step 2: Reverse the second half of the list
    let secondHalfHead = reverseList(slowPointer);

    // Step 3: Compare first half and reversed second half
    let firstHalfPointer = head;
    let secondHalfPointer = secondHalfHead;

    while (secondHalfPointer) {
        if (firstHalfPointer.value !== secondHalfPointer.value) return false;
        firstHalfPointer = firstHalfPointer.next;
        secondHalfPointer = secondHalfPointer.next;
    }

    return true;
}

// Reverse a linked list starting from given head
function reverseList(head) {
    let previous = null;
    let current = head;

    while (current) {
        let nextNode = current.next;
        current.next = previous;
        previous = current;
        current = nextNode;
    }

    return previous;
}

// console.log(isPlaindrome(palindromeList.head));


//----------------------------------------------------------------------------------------
//! Detecting cycles in arrays
//----------------------------------------------------------------------------------------



//----------------------------------------------------------------------------------------
//! Intersection point of two linked list
//----------------------------------------------------------------------------------------

// Creating two linked list with intersection.
var m = new LinkedList(1);
m.push(4);
m.push(6);
m.push(7);
m.push(9);
m.push(8);

var n = new LinkedList(3);
n.push(5);
n.push(2);

var temp = m.head;
var index = 0;

while (index < 4) {
    temp = temp.next;
    index++;
}

n.tail.next = temp;

function findIntersection(m, n) {
    // step 1: Find length of each linked list 
    var mHead = m;
    var nHead = n;

    var mlength = 0;
    var nlength = 0;

    while (mHead) {
        mlength++;
        mHead = mHead.next;
    }

    while (nHead) {
        nlength++;
        nHead = nHead.next;
    }

    // After finding the len, find the difference between the lengths
    var diff = Math.abs(mlength - nlength);


    // Now, set the start of the largest list to diff nodes forward
    mHead = m;
    nHead = n;
    
    if (mlength > nlength) {
        while (diff > 0) {
            mHead = mHead.next
            diff--;
        }
    } else {
        while (diff > 0) {
            nHead = nHead.next;
            diff--;
        }
    }

    // After setting, head at same level now loop through to find the intersection

    while(mHead && nHead){
        if(mHead === nHead){
            break;
        }
        mHead = mHead.next;
        nHead = nHead.next;
    }

    if(mHead){
        return mHead;
    } 

    return undefined;
}

console.log(findIntersection(m.head, n.head));

// More effecient code - chatGpt

class ListNode {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

function getIntersectionNode(headA, headB) {
    if (!headA || !headB) return null;

    // Step 1: Get lengths of both lists
    let lengthA = 0, lengthB = 0;
    let currA = headA, currB = headB;

    while (currA) {
        lengthA++;
        currA = currA.next;
    }
    while (currB) {
        lengthB++;
        currB = currB.next;
    }

    // Step 2: Align the start of both lists
    currA = headA;
    currB = headB;

    if (lengthA > lengthB) {
        let diff = lengthA - lengthB;
        while (diff--) currA = currA.next;
    } else {
        let diff = lengthB - lengthA;
        while (diff--) currB = currB.next;
    }

    // Step 3: Move both pointers until they meet
    while (currA && currB) {
        if (currA === currB) return currA; // Intersection found
        currA = currA.next;
        currB = currB.next;
    }

    return null; // No intersection
}

// Example usage
let headA = new ListNode(1);
headA.next = new ListNode(2);
headA.next.next = new ListNode(3);
headA.next.next.next = new ListNode(4);
headA.next.next.next.next = new ListNode(5);

let headB = new ListNode(9);
headB.next = headA.next.next.next; // Intersection at node 4

let intersection = getIntersectionNode(headA, headB);
console.log(intersection ? intersection.value : null); // Output: 4

