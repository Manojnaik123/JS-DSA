/*
! Stack - Linear data structure using LIFO approach 
/Topics covered 

? 1. Stack Fundamentals
Definition & Properties (LIFO principle)
Basic Operations → push, pop, peek, isEmpty, isFull

? Stack Implementation:
    Using arrays
    Using linked lists

?Problems:
> Valid Parenthesis
> Min stack
> Implement queue using stack 
> Next Greater element
> Daily trmperature
> Monotonic Stacks
> Trapping Rain Water 

? BAsic application of stack 

*/

//-------------------------------------------------------------------------------------
// ! Stack implimentation using array
//-------------------------------------------------------------------------------------

class Stack {
    constructor() {
        this.stack = [];
    }

    push(value) {
        this.stack.push(value);
        return this.stack;
    }

    pop() {
        if (!this.isEmpty()) {
            return this.stack.pop()
        }
        return undefined;
    }

    peek() {
        return this.stack[this.stack.length - 1];
    }

    isEmpty() {
        return this.stack.length === 0;
    }
}

//-------------------------------------------------------------------------------------
// ! Stack implimentation using Linked List
//-------------------------------------------------------------------------------------

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class StackUsingLinkedList {
    constructor() {
        this.top = null;
    }

    push(value) {
        let newNode = new Node(value);
        if (!this.top) {
            this.top = newNode;
        } else {
            newNode.next = this.top;
            this.top = newNode;
        }
        return this.top;
    }

    pop() {
        if (!this.top) return undefined;

        var temp = this.top;
        this.top = this.top.next;
        temp.next = null;

        return temp;
    }

    peek() {
        if (!this.top) return undefined;
        return this.top;
    }

    isEmpty() {
        return this.top === null;
    }
}


//----------------------------------------------------------------------
// ! Problems:
// > Valid Parenthesis
// > Min stack
// > Implement queue using stack 
// > Next Greater element
// > Daily trmperature
// > Monotonic Stacks
// > Trapping Rain Water 
//----------------------------------------------------------------------

// ? Valid parenthesis
var str = '({()[]}{})';
var str1 = '{}[';

// my code 
function validParenthesis(string) {
    var stack = [];

    for (let x of string) {
        if (x === '(' || x === '[' || x === '{') {
            stack.push(x);
        }
        if (x === ')' && stack[stack.length - 1] === '(') {
            stack.pop();
        }
        if (x === '}' && stack[stack.length - 1] === '{') {
            stack.pop();
        }
        if (x === ']' && stack[stack.length - 1] === '[') {
            stack.pop();
        }
    }
    return stack.length === 0;
}

// console.log(validParenthesis('()'));
// console.log(validParenthesis('()[]{}'));
// console.log(validParenthesis('(]'));
// console.log(validParenthesis('([)]'));
// console.log(validParenthesis('{[]}'));

// Simpliefied varient 

function validParenthesisChecker(string) {
    let stack = [];
    let map = {
        ')': '(',
        '}': '{',
        ']': '['
    };
    for (let x of string) {
        if (x === '(' || x === '[' || x === '{') {
            stack.push(x);
        } else {
            // If stack is empty OR top doesn’t match
            if (stack.length === 0 || stack[stack.length - 1] !== map[x]) {
                return false;
            }
            stack.pop();
        }
    }
    return stack.length === 0;
}

// ? Min stack - Implimentation.
// Here we will need the help of the auxilary stack. - where will store the min value 

class MinStack {
    constructor() {
        this.stack = []
        this.aux = []
    }

    push(value) {
        this.stack.push(value);
        if (this.aux.length === 0) {
            this.aux.push(value);
        } else {
            if (value <= this.aux[this.aux.length - 1]) {
                this.aux.push(value);
            }
        }
        return this.stack;
    }

    pop() {
        if (this.stack.length === 0) return null;
        var removedElement = this.stack.pop();
        if (this.aux[this.aux.length - 1] === removedElement) {
            this.aux.pop();
        }
        return removedElement;
    }

    peek() {
        return this.stack[this.stack.length - 1];
    }

    getMin() {
        return this.aux[this.aux.length - 1] ? this.aux[this.aux.length - 1] : null;
    }
}

// ? Implement queue using stack 

// Using auxilary stack approach 
// This has push time complexity of O(1)
// Whereas, pop time complexity is O(n)

// my code - Correct approach was using while loops 
class QueueUsingStack1 {
    constructor() {
        this.stack = [];
        this.aux = [];
    }

    push(value) {
        this.stack.push(value);
        return this.stack;
    }

    pop() {
        if (this.stack.length === 0) return null;

        if (this.stack.length === 1) {
            var removedEle = this.stack.pop();
            return removedEle;
        }

        for (let i = this.stack.length - 1; i >= 0; i--) {
            var ele = this.stack.pop();
            this.aux.push(ele)
        }

        var removedEle = this.aux.pop();

        for (let j = this.aux.length - 1; j >= 0; j--) {
            var ele = this.aux.pop();
            this.stack.push(ele);
        }

        return removedEle;
    }
}

// let q = new QueueUsingStack();
// q.push(1);
// q.push(2);
// q.push(3);

// console.log(q.pop()); // Should return 1
// console.log(q.pop()); // Should return 2

// Standars approach

class QueueUsingStack {
    constructor() {
        this.stack = [];
        this.aux = [];
    }

    push(value) {
        this.stack.push(value);
        return this.stack;
    }

    pop() {
        if (this.stack.length === 0) return null;

        if (this.stack.length === 1) {
            var removedEle = this.stack.pop();
            return removedEle;
        }

        while (this.stack.length > 0) {
            var ele = this.stack.pop();
            this.aux.push(ele)
        }

        var removedEle = this.aux.pop();

        while (this.aux.length > 0) {
            var ele = this.aux.pop();
            this.stack.push(ele);
        }

        return removedEle;
    }

    peek() {
        if (this.stack.length === 0) return null;

        while (this.stack.length > 0) {
            this.aux.push(this.stack.pop());
        }

        let front = this.aux[this.aux.length - 1];

        while (this.aux.length > 0) {
            this.stack.push(this.aux.pop());
        }
        return front;
    }
}

// ? Next Greater element
function nextGreaterNumber(array) {
    var result = [];
    var stack = [];

    // var startIndex = array.length - 1;

    // while(startIndex >= 0){
    //     array
    //     startIndex--;
    // }

    result[2] = array[2];
    console.log(result);

}

var arr = [1, 2, 3, 4]

// my code after many attempts and learning 
function nextGreaterNumber(array) {
    var result = Array(array.length).fill(-1);
    var stack = [];

    var lastIndex = array.length - 1;

    while (lastIndex >= 0) {
        while (stack.length > 0 && array[lastIndex] >= stack[stack.length - 1]) {
            stack.pop();
        }
        if (stack.length > 0) {
            result[lastIndex] = stack[stack.length - 1];
        }
        stack.push(array[lastIndex]);
        lastIndex--;
    }

    return result;
}

// var rt = []
// console.log(nextGreaterNumber(rt));

// Time complexity -
// O(n) - still doubt for me 

// ? Next Greater element - Using Recursion 

function neaxtGreaterElementRecursive(array){

}

// > Daily trmperature

// This is similar to the next greater element bu here we store index in stack 
// and we store index difference in the results 


function dailyTemparatureDifference(array){
    var result = Array(array.length).fill(0);
    var stack = [];

    for(var x = array.length -1; x >= 0; x--){
        while(stack.length > 0 && array[x] >= array[stack[stack.length - 1]]){
            stack.pop();
        }
        if(stack.length > 0){
            result[x] = stack[stack.length - 1] - x;
        }
        stack.push(x)
    }

    return result;
}

var temp = [73, 74, 75, 71, 69, 72, 76, 73];

// console.log(dailyTemparatureDifference(temp));


// > Monotonic Stacks

// As we made an stack in the nextgreater element where the stack elements are in ascending order , these are called monotonic 
// Definition- A stack that keeps its element in a a sorted order. 

// types of monotonic stack-
    // 1> MOnotonic increasing stack - elements in the stack are in increasing order. Top always smaller.
    // 2> Monotonic decreasing order. 

// > Trapping Rain Water - tough to solve this be intutive with stacks 
