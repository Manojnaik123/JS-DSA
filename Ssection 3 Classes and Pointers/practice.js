// Comparision based sorting.

// selection sort - selecting the minimum or maximum number then arranging the element in order, 
// this continues till the entire array is sorted. 

// Bubble sort - swaps the adjacent elements ultil they are in a order 

// Insertion sort - find the key and inserts it in the right position 


var list = [3, 1, 5, 2, 4];
var list1 = [5, 4, 3, 1, 2, 1];

// Selection sort

function selectionSort(arr) {
    var n = arr.length;
    var isSwapped = false;
    for (let i = 0; i < n; i++) {
        var minIndex = i;
        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
                isSwapped = true;
            }
        }
        if (isSwapped) {
            [arr[minIndex], arr[i]] = [arr[i], arr[minIndex]]
        }
    }
    return arr;
}

console.log(selectionSort(list));
console.log(selectionSort(list1));

// Bubble sort 
console.log('------------------------------Bubble Sort---------------------------');


function bubbleSort(arr) {
    var n = arr.length;
    var isSwapped;

    for (let x = 0; x < n; x++) {
        isSwapped = false;
        for (let y = 0; y < n - (x + 1); y++) {
            if (arr[y] > arr[y + 1]) {
                [arr[y], arr[y + 1]] = [arr[y + 1], arr[y]];
                isSwapped = true;
            }
        }
        if (!isSwapped) {
            break;
        }
    }

    return arr;
}



console.log(bubbleSort(list));
console.log(bubbleSort(list1));


// Insertion Sort - from starting the key is selected and after that the key is added in the right spot my moving the remianing elements.
console.log('------------------------------Insertion Sort---------------------------');


function insertionSort(arr) {
    var n = arr.length;

    for (let x = 1; x < n; x++) {
        var key = x;
        var j = x - 1;

        while (j >= 0 && arr[j] > arr[x]) {
            arr[j + 1] = a[j];
            j--;
        }

        arr[j + 1] = arr[key];
    }

    return arr
}

console.log(insertionSort(list));
console.log(insertionSort(list1));
