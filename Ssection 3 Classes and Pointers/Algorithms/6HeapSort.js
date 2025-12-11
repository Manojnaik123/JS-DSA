// ! Heap sort

// to convert an entire array into heap we have to 
// heapify each of its non leaf nodes. 
function heapify(array, n, index) {
    var minimum = index;
    var left = 2 * minimum + 1;
    var right = 2 * minimum + 2;

    if (left < n && array[left] < array[minimum]) {
        minimum = left;
    }
    if (right < n && array[right] < array[minimum]) {
        minimum = right;
    }

    if (minimum !== index) {
        [array[minimum], array[index]] = [array[index], array[minimum]];
        heapify(array, n, minimum);
    }
}

// the heap sort using the min heap 
// this is not the effecient way to but yest it works on same logic but has to reverse the list at the end.
// Heap sort using the max heap is the standard approach
function heapSort(array) {
    var n = array.length;

    // handle empty array
    if (n === 0) return [];

    // handle array with single element
    if (n === 1) return array;

    // build heap from unsorted array 
    var totalNonLeafNodes = Math.floor(n / 2) - 1;

    for (let i = totalNonLeafNodes; i >= 0; i--) {
        heapify(array, array.length, i);
    }

    for (let x = n - 1; x >= 0; x--) {
        var minVal = array[0];
        array[0] = array[x];
        heapify(array, x, 0);
        array[x] = minVal;
    }

    return array.reverse();
}

var myHeap = [5,4,3, 4,2,1];

console.log(heapSort(myHeap));


// ! The heap sort with the max heap is not implemented - implement it in next revisit
