// * Searching algorithms - These algos are used to locate the specific data within the collection of data. 


// When we secrah an elemnt in an array, there are two most common algorithms. they are -

// * 1: Linear search: it is used for unsorted array. 
    // Concept: Scan elements one by one.
    // Complexity: O(n).
    // When useful: Small arrays, unsorted data.
    // Know both iterative & recursive approaches (recursive isn’t common in real-world, but sometimes asked).

// * 2: Binary search: It is used for the sorted array. 
// Must know
    // Iterative version 
    // Recursive version 
    // Edge case (duplicates, target not found)

// Varients to practice 
    // Find first occurance of an element 
    // Find last occurance of the element 
    // Find the number of occurance of hte element 
    // Find floor/ ceil of a number (nearest)
        // The floor of x in a sorted array is the largest element in the array that is ≤ x.
        //The ceil of x in a sorted array is the smallest element in the array that is ≥ x.
    // search in roated sorted array (common in interviews)

// One more common pointer technique is // * Two Pointer technique

// Problems better to learn 
    // Find square root of a number without using Math.sqrt.
    // Minimize maximum pages allocation (book allocation problem).
    // Painter partition problem.
    // Aggressive cows (from coding platforms).

// ? Linear search:

var arr = [3, 2, 1, 5, 6, 3, 6, 7]

function search(n, arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === n) {
            return i;
        }
    }
    return -1;
}

// console.log(search(6, arr));


// ? Binary search


var arr1 = [1, 2, 3, 4, 5, 6]

function binarySearch(arr, n, l = 0, h = arr.length - 1) {
    if (l > h) {
        return -1;
    }

    let mid = Math.floor((l + h) / 2);

    if (arr[mid] === n) {
        return mid;
    } else if (arr[mid] > n) {
        return binarySearch(arr, n, l, mid - 1);
    } else {
        return binarySearch(arr, n, mid + 1, h);
    }
}

