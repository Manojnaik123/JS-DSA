// ! Queue - Linear data struncture using FIFO 

/*
? Basic operations:
    enqueue
    dequeue
    peek / front
    isEmpty, size

? Types of Queues
    1- Simple queue 

    2- Circular queue 
        operations:
            front
            rear
            modulo
        
    3- Priority queue 
        Elements are dequeued based on priority, not insertion order. 
        can be implimented using:
            array
            heap(min-heap/ max-heap) for effecient operations
        
    4- Dequeue (Doubly ended queue)
        insert/ delete at both ends
        operations:
            pushfront
            pushback
            popfront
            popback
? Advanced topics 
> Queues using stacks 
    push expensive or pop expensive approaches 
> Stack using Queues
> Monotonic queue
    Maintains increasing or decreasing order
    used in sliding window problems
> Circular buffer

? Problems to practice
    sliding window maximum/minimum using monotonic queue.
    BFS traversal in trees/ graphs (queue application).
    Recent k elements / moving average (queue application).
    priority queue problems 

*/


// ? Linear queue - using array 
// Implimenting queue using array has a major draw back one of the enqueue or dequeue operation will have time 
// complexity of O(n). This is because array is a contagious memory collection. After adding from the front or 
// deleting from the front we will have to shift the remaining elements. 


// I am gona add from the rear and remove from the front. 
class LinearQueue {
    constructor() {
        this.queue = [];
        // this.front = null;
        // this.rear = null;
    }

    enqueue(value) {
        this.queue.push(value);
        return true;
    }

    dequeue() {
        if (this.queue.length === 0) return null;
        var ele = this.queue.shift();
        return ele;
    }

    peek() {
        if (this.queue.length === 0) return null;
        return this.queue[0];
    }

    isEmpty() {
        return this.queue.length === 0;
    }
}

// ? LinearQueue using linked list 

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class QueueUsingLinkedList {
    constructor() {
        this.front = null;
        this.rear = null;
    }

    enqueue(value) {
        var newNode = new Node(value);
        if (!this.front) {
            this.front = newNode;
            this.rear = newNode;
        } else {
            this.rear.next = newNode;
            this.rear = newNode;
        }
        return this.front;
    }

    dequeue() {
        if (!this.front) return undefined;

        var temp = this.front;
        if (!this.front.next) {
            this.rear = null;
        }
        this.front = this.front.next;
        temp.next = null;

        return temp;
    }

    peek() {
        return this.front;
    }

    ifEmpty() {
        return !this.front;
    }
}

// ? Circular queue 

// implementation using array 
// Array in js has no limited length. 
// So, instead i am going to implement it using the linked list. Although it is possible to implement 
// Circular queue with array. 

class CurcularQueueUsingLinkedList {
    constructor() {
        this.front = null;
        this.rear = null;
        this.length = 0;
    }

    enqueue(value) {
        var newNode = new Node(value);
        if (!this.front) {
            this.rear = newNode;
            this.front = newNode;
            newNode.next = newNode;
        } else {
            this.rear.next = newNode;
            this.rear = newNode;
            newNode.next = this.front;
        }
        this.length++;
        return this.front;
    }

    dequeue() {
        if (!this.front) return undefined;

        var temp = this.front;
        if (this.front.next === this.front) {
            this.front = null;
            this.rear = null;
        } else {
            this.front = this.front.next;
            this.rear.next = this.front;
            temp.next = null;
        }
        this.length--;
        return temp.value;
    }


    peek() {
        return this.front ? this.front.value : null;
    }

    isEmpty() {
        return this.length === 0;
    }

    getLength() {
        return this.length;
    }
}

// ? Priority queue


// MaxHeap
class PriorityQueue {
    constructor() {
        this.queue = [];
    }

    getParent(index) {
        return Math.floor((index - 1) / 2);
    }

    getLeftChild(index) {
        return 2 * index + 1;
    }

    getRightChild(index) {
        return 2 * index + 2;
    }

    swap(index1, index2) {
        [this.queue[index1], this.queue[index2]] = [this.queue[index2], this.queue[index1]];
    }

    sinkDown(index) {
        var left = this.getLeftChild(index);
        var right = this.getRightChild(index);
        var largest = index;

        if (left < this.queue.length && this.queue[left] > this.queue[largest]) {
            largest = left;
        }

        if (right < this.queue.length && this.queue[right] > this.queue[largest]) {
            largest = right;
        }

        if (largest !== index) {
            this.swap(largest, index);
            this.sinkDown(largest);
        }
    }

    enqueue(value) {
        this.queue.push(value);
        var current = this.queue.length - 1;
        while (current > 0 && this.queue[this.getParent(current)] < this.queue[current]) {
            this.swap(this.getParent(current), current);
            current = this.getParent(current);
        }

        return this.queue;
    }

    dequeue() {
        if (this.queue.length === 0) return null;
        if (this.queue.length === 1) {
            return this.queue.pop();
        }
        var removedEle = this.queue[0];

        this.queue[0] = this.queue.pop();
        this.sinkDown(0);

        return removedEle;
    }

}


// ? Deque
// Operations
// > enqueueFront
// > enqueueRear
// > dequeueFront
// > dequeueRear
// > peekFront
// > peekRear

// dequeu can be be implemented intutively because i know the linear and circular queue perfectly;


// ! Problems to practice
// ? sliding window maximum/minimum using monotonic queue.

function slidingWindowMaximum(array, k) {
    var result = [];
    var greater = 0;

    for (let x = 0; x < k; x++) {
        if (array[x] > array[greater]) {
            greater = x;
        }
    }

    result.push(array[greater]);

    for (let x = k; x < array.length; x++) {
        if (greater === x - k) {
            greater = x - k + 1;
        }
        for (let i = x - k + 1; i <= x; i++) {
            if (array[i] > array[greater]) {
                greater = i;
            }
        }
        result.push(array[greater]);
    }
    return result;
}

arr =  [1, 3, 2, 5];


console.log(slidingWindowMaximum(arr, 2));


// console.log(3 > arr[-1]);
// BFS traversal in trees/ graphs (queue application).
// Recent k elements / moving average (queue application).
// priority queue problems 

