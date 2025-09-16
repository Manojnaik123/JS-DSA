// Quick sort - It works on the principle of the divide and conquer.
// It sets the pivot element and goes on sorting the elements. 

function partition(arr, l, h) {
    var pivot = arr[l];
    var i = l + 1;
    var j = h;

    while (true) {
        while (i <= h && arr[i] <= pivot) {
            i++;
        }
        while (j >= l && arr[j] > pivot) {
            j--;
        }
        if (i >= j) break;
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }

    [arr[l], arr[j]] = [arr[j], arr[l]]; // put pivot in place
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

let t = [4,3,5,6,1,7]

console.log(quickSort(t));

