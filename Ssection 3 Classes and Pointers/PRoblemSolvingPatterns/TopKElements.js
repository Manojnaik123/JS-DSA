/*
----------------------------------------------------
! Top k Elements paterns / This pattern can be solved using O(n) complexity using quick select
----------------------------------------------------

The straight forward approach for this type is the problems is to sort the array first 
and return the first k or last k elements.

But this isnt the most optimal way of solving these problem because 
for sorting the T(n) = O(nlogn)

We can bring this time complexity from O(nlogn) to O(nlogk).

----------------------------------------------------
? When to use the top k patterns 
----------------------------------------------------

> Finding the k largest or smallest elements in an array.
> Identifying the k most frequent or least frequent elements in a dataset. 
> Dynamically maintaining the Top K Elements in a real time data stream.
    Ex- Keeping track of the top 10 teams in a live compitiion. 
*/

//----------------------------------------------------
// ? How to implement the top K Elements pattern
//----------------------------------------------------

// Example: Find the K Largest Elements in an array.

import { Heap } from '../H.Heaps.js';

var r = new Heap();

r.insert(1);
r.insert(2);
r.insert(3);
r.insert(4);
r.insert(5);

// Heap will be [5,4,2,1,3].

var newHeap = [1, 2, 3, 4, 5, 6]
// Finding the top K largets elements. 

// ! Method 1: Sorting approach (Basic and easy)

// given array and k
var array = [1, 2, 3, 4, 5, 6];
var k = 3; // This means get the top 3 largest elements in the array. 


function heapify(array, index) {
    var largest = index;
    var left = 2 * largest + 1;
    var right = 2 * largest + 2;

    if (left < array.length && array[left] > array[largest]) {
        largest = left;
    }

    if (right < array.length && array[right] > array[largest]) {
        largest = right;
    }

    if (largest !== index) {
        [array[largest], array[index]] = [array[index], array[largest]];
        heapify(array, largest);
    }
}

function pop(maxHeap) {
    if (maxHeap.length === 0) return null;
    var removedEle = maxHeap[0];
    if (maxHeap.length > 1) {
        maxHeap[0] = maxHeap.pop();
        heapify(maxHeap, 0);
    } else {
        maxHeap.pop();
    }
    return removedEle;
}

// array is [1, 2, 3, 4, 5, 6]
function topKLargest(array, k) {

    // First, we will heapify the entire array.
    for (let x = Math.floor(array.length / 2) - 1; x >= 0; x--) {
        heapify(array, x)
    }
    // After heapify we get [ 6, 5, 3, 4, 2, 1 ]


    // this will loop for k times and retunr the top element
    for (let y = 0; y < k; y++) {             // Complexity 
        console.log(pop(array));
    }
}

// topKLargest(newHeap, 2)

// ! Method 2: Heap / Priority Queue Approach
// Method:
// 1- Maintain a heap of size K(min-heap for top K largest).
// 2- Iterate through all n elements, insert into heap(replace top if needed).
// Time complexity:
// 1- Build heap of size K -> O(k).
// 2- For remaining n-k elements: each insert/ remove --> O(logk).
// Total: Object(nlogk).
//? This is better than sorting when k<<n.

function heapify1(array, index) {
    var lowest = index;
    var left = 2 * index + 1;
    var right = 2 * index + 2;

    if (left < array.length && array[left] < array[lowest]) {
        lowest = left;
    }

    if (right < array.length && array[right] < array[lowest]) {
        lowest = right;
    }

    if (lowest !== index) {
        [array[lowest], array[index]] = [array[index], array[lowest]];
        heapify1(array, lowest);
    }
}

function parentof(index) {
    return Math.floor((index - 1) / 2);
}

function heapPush(array, value) {
    array.push(value);
    var current = array.length - 1;
    var parent = parentof(current);

    while (current> 0 && array[parent] > array[current]) {
        [array[parent], array[current]] = [array[current], array[parent]];
        current = parent;
        parent = parentof(current);

    }
}

function findTopK(array, k) {
    var heap = [];
    for (let x = 0; x < k; x++) {
        heapPush(heap, array[x]);
    }

    // getting the right list.

    for(let y = k; y<array.length; y++){
        if(array[y] > heap[0]){
            heapPush(heap, array[y]);
            removeHead(heap);
        }
    }

    return heap.sort((a,b) => b-a);
}

function removeHead(array){
    if(array.length === 0) return null;
    if(array.length === 1){
        return array.pop();
    }
    var last = array.pop();
    var root = array[0];
    array[0] = last;
    heapify1(array, 0);
    return root;
}

var a = [3, 2, 4, 1, 5];
var b = [1, 2, 3, 6, 4, 5];

console.log(findTopK(a,2));
console.log(findTopK(b,2));

// var t = [2,3,4,5]
// heapPush(t, 1)
// console.log(t);

// ---------------------------------------------------------------------------
// ! Top k least number - Understand the upper problem throughly then solve. 
// ---------------------------------------------------------------------------










// ---------------------------------------------------------------------------
// ! Top k most frequent elements
// ---------------------------------------------------------------------------

// hash maps needed 
// bucket sort needed 