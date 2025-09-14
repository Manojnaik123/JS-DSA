// Merge sort - Its a divide and conquer algorithm. 
// You will kepp dividing the array into half until each half has only one element.
// then we merge those halves back together in sorted order. 
// Time complexity - O(nlogn)

var list = [3,2,4,1,5];

function MergeSort(list) {
    if(list.length <= 1){
        return list;
    }

    const mid = Math.floor(list.length / 2);
    const left = list.slice(0, mid);
    const right = list.slice(mid);

    return merge(MergeSort(left), MergeSort(right));
}


function merge(left, right) {
    var result = []
    var i = 0;
    var j = 0;

    while (i < left.length && j < right.length) {
        if (left[i] > right[j]) {
            result.push(right[j]);
            j++;
        } else {
            result.push(left[i]);
            i++
        }
    }

    return result.concat(left.slice(i).concat(right.slice(j)))
}

console.log(MergeSort(list));