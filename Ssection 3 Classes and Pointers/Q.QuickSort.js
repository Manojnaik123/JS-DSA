// Quick sort - It works on the principle of the divide and conquer.
// It sets the pivot element and goes on sorting the elements. 


function partition(arr, l, h) {
    let pivot = arr[l];
    let i = l + 1;
    let j = h;

    while (i < j) {
        while (arr[i] < pivot) {
            i++;
        }
        while (arr[j] > pivot) {
            j++;
        }

        if (i < j) {
            var temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        } 
    }

    arr[l] = arr[j];
    arr[j] = pivot;

    return j;
}

function quickSort(arr, l = 0, h = arr.length - 1){
    if(l < h){
        var j = partition(arr, l, h);
        quickSort(arr, l, j);
        quickSort(arr, j+1, h)
    }
    return arr;
}


let t = [4,3,5,6,1,7]

console.log(quickSort(t));

