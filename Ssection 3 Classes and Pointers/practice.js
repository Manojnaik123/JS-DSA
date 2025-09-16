
var arr = [3, 2, 1, 5, 4]
var arr1 = [5, 4, 3, 2, 1]
var arr2 = [3, 4, 2, 1, 5, 1]


function merge(left, right) {
    var result = []
    var x = 0;
    var y = 0;

    while (x < left.length && y < right.length){
        if (left[x] <= right[y]){
            result.push(left[x]);
            x++;
        } else {
            result.push(right[y]);
            y++;
        }
    }

    return result.concat(left.slice(x).concat(right.slice(y)));
}

function mergeSort(list) {
    if(list.length <= 1){
        return list;
    }
    var mid = Math.floor(list.length/2);

    var left = (list.slice(0, mid));
    var right = (list.slice(mid, list.length));

    return merge(mergeSort(left), mergeSort(right));
}

console.log(mergeSort(arr2));



