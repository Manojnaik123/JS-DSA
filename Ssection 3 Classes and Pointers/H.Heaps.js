// Heap is a complete binary tree. 

// We will not implement heap in linked list instead we will implement it in array. 

// 1 - Min-Heap
//      The parent node is always less then or equal to its children. 
//      So, the minimum element is at the root. 

// 2 - Max-Heap
//      The parent node is always greater than or equal to its children. 
//      So, the maximum element is at the root. 

// Finding the left child and right child of the parent node. (When index is not utilized). 
//      leftChild = 2 * parentIndex;
//      rightChild = 2 * parentIndex + 1;

// Finding the left child and right child of the parent node. (When index is  utilized). 
//      leftChild = 2 * parentIndex + 1;
//      rightChild = 2 * parentIndex + 2;



export class Heap{
    #heap = [];   // Here '#' refers to the private class field. This field cannot be accessed outside the class. 

    // helper methods --------------------------------------
    getHeap(){
        return [...this.#heap];
    }

    #leftChild(index){  // You cannot access this function outside the class. 
        return 2 * index+1;
    }

    #rightChild(index){
        return 2* index +2;
    }

    #parent(index){
        return Math.floor((index-1) / 2);
    }

    #swap(index1, index2){
        [this.#heap[index1], this.#heap[index2]] = [this.#heap[index2], this.#heap[index1]]
    }

    #sinkDown(index) {
        let largest = index;
        const left = this.#leftChild(index);
        const right = this.#rightChild(index);
        const size = this.#heap.length;

        if (left < size && this.#heap[left] > this.#heap[largest]) {
            largest = left;
        }

        if (right < size && this.#heap[right] > this.#heap[largest]) {
            largest = right;
        }

        if (largest !== index) {
            this.#swap(index, largest);
            this.#sinkDown(largest);  // keep sinking until heap is valid
        }
    }
    // --------------------------------------

    insert(value){
        this.#heap.push(value);
        var current = this.#heap.length - 1;
        while(current > 0 && this.#heap[current] > this.#heap[this.#parent(current)])
        {
            this.#swap(current, this.#parent(current))
            current = this.#parent(current);
        }
    }

    // In heap we only remove one item that is at the top(root).
    remove(){
        if(this.#heap.length === 0){
            return null;
        }

        if(this.#heap.length === 1){
            return this.#heap.pop()
        }

        const maxValue = this.#heap[0];
        this.#heap[0] = this.#heap.pop();

        this.#sinkDown(0);

        return maxValue
    }
}

//----------------------------------------------------
// ! Heapify 
// This heapify function only heapifys the heap from the index. 
//----------------------------------------------------

export function heapify(array, index){
    var largest = index;
    var left = 2 * largest + 1;
    var right = 2* largest +2;

    if(left< array.length && array[left] > array[largest]){
        largest = left;
    }
    if(right < array.length && array[right] > array[largest]){
        largest = right;
    }

    if(largest !== index){        
        [array[largest], array[index]] = [array[index], array[largest]];
        heapify(array, largest);
    }
}

// var list = [1,2,3,4,5,6];

// heapify(list, 2)
// heapify(list, 1)
// heapify(list, 0)

// To automate the heapify of the entire list we can use 

// for(let x = Math.floor(list.length/2) - 1; x >= 0; x-- ){
//     heapify(list, x);
// }

// console.log(list);



