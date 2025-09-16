// practice of all the sorting algorithms 

// ! Bubble sort 

function bubbleSort(array) {
    var len = array.length;
    var isSwapped;
    for (let x = 0; x < len; x++) {
        isSwapped = false;
        for (let y = 0; y < len - (x + 1); y++) {
            if (array[y] > array[y + 1]) {
                [array[y], array[y + 1]] = [array[y + 1], array[y]]
                isSwapped = true;
            }
        }
        if (!isSwapped) {
            break;
        }
    }
    return array;
}

// Time complexity
// Worst case - O(n^2)
// Best case - O(n) - When optimized with the swapped flag

// Space complexity 
// Worst case - 
// Best case - 

// ! Selection Sort - selecting the min or the max value and placing in the right place

function selectionSort(list) {
    var n = list.length;
    for (let x = 0; x < n - 1; x++) {
        var minIndex = x;
        for (let t = x + 1; t < n; t++) {
            if (list[t] < list[minIndex]) {
                minIndex = t;
            }
        }
        [list[x], list[minIndex]] = [list[minIndex], list[x]];
    }
    return list;
}

// Time Complexity
// Best Case - O(n^2)
// Worst Case - O(n^2)

// Space Complexity 
// Best Case - 
// Worst Case - 

// ! Insertion Sort

function insertionSort(ar) {
    var n = ar.length;
    for (let x = 1; x < n; x++) {
        var key = ar[x];
        var j = x - 1;
        while (j >= 0) {
            if (ar[j] > key) {
                ar[j + 1] = ar[j];
            }

            j--;
        }
        ar[j + 1] = key;
    }
    return ar;
}

function insertionSort(ar) {
    var n = ar.length;
    for (let x = 1; x < n; x++) {
        var key = ar[x];
        var j = x - 1;
        while (j >= 0 && ar[j] > key) {
            ar[j + 1] = ar[j];
            j--;
        }
        ar[j + 1] = key;
    }
    return ar;
}

// console.log(insertionSort(arr));
// console.log(insertionSort(arr1));

// was not able to do insertion sort 


// ! Merge sort 

function merge(left, right) {
    var result = [];
    var i = 0;
    var j = 0;

    while (i < left.length && j < right.length) {
        if (left[i] > right[j]) {
            result.push(right[j]);
            j++;
        } else {
            result.push(left[i]);
            i++;
        }
    }

    return result.concat(left.slice(i).concat(right.slice(j)));
}

function mergeSort(list) {
    var n = list.length;
    if (n <= 1) {
        return list
    }

    var mid = Math.floor(n / 2);

    var left = mergeSort(list.slice(0, mid));
    var right = mergeSort(list.slice(mid, n));

    return merge(left, right);
}

// Time Complexity 
// Best Case - O(nlogn)
// Worst Case - O(nlogn)

// ! Quick Sort 

function partition(arr, l, h) {
    var pivot = arr[l];
    var i = l + 1;
    var j = h;

    while (true) {
        while (i <= h && arr[i] <= pivot) {
            i++;
        };
        while (j >= l && arr[j] > pivot) {
            j--;
        };
        if (i >= j) break;
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    [arr[l], arr[j]] = [arr[j], arr[l]]
    return j;
}

function quickSort(arr, l = 0, h = arr.length - 1) {
    if (l < h) {
        var j = partition(arr, l, h);
        quickSort(arr, l, j - 1);
        quickSort(arr, j + 1, h);
    }
    return arr;
}

// ! Insertion sort repetition 

function insertionSort2(list) {
    var n = list.length;
    for (let x = 1; x < n; x++) {
        var key = list[x];
        var j = x - 1;
        while (list[j] > key && j >= 0) {
            list[j+1] = list[j];
            j--;
        }
        list[j+1] = key;
    }
    return list;
}

var arr = [5, 3, 4, 2, 1];
var x = [3, 2, 5, 1, 4]
var arr1 = [1, 4, 1, 5, 3, 2];

console.log(insertionSort2(arr));
console.log(insertionSort2(x));
console.log(insertionSort2(arr1));
