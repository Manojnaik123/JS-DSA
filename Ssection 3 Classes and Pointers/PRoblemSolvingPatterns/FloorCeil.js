// ! Finding floor/ceil of an element.
// largest number ≤ target

// code 

function ceilSearch(array, target) {
    var l = 0;
    var h = array.length - 1;
    var result = -1;

    while (l <= h) {
        var mid = Math.floor((l + h) / 2);

        if (array[mid] === target) {
            return mid;
        } else if (array[mid] > target) {
            result = mid;
            h = mid - 1;
        } else {
            l = mid + 1;
        }
    }

    return result;
}

var arr = [1, 3, 5, 7, 9]

// console.log(ceilSearch(arr, 4));

function floorSearch(array, target) {
    var l = 0;
    var h = array.length - 1;
    var result = -1;

    while (l <= h) {
        var mid = Math.floor((l + h) / 2);
        if (array[mid] === target) return mid;

        if(target < array[mid]){
            h = mid - 1;
        } else {
            result = mid;
            l = mid + 1;
        }
    }
    return result;
}

console.log(floorSearch(arr, 4));
