// ! Counting sort 
// this algorith has the time complexity of O(n).
// drawback of this algorithm.
// counting sort is a stable sort- that means it preserves the order of the element.

function countingSort(array) {
    var n = array.length;
    var min = Math.min(...array);
    var max = Math.max(...array);

    // create an array of size of the range
    var rangeArray = new Array((max - min) + 1).fill(0);
    var output = new Array(n);

    // fill the range array with frequency
    for(let element of array){
        rangeArray[element - min]++;
    }

    // after that perform the prefix / cumulative sum on the rangeArray.
    for (let i = 0; i < rangeArray.length; i++) {
        rangeArray[i] = rangeArray[i] + (i === 0? 0 : rangeArray[i - 1]);
    }

    console.log(rangeArray);
    
    // go on decrementing the values of the cumulative array while traversing reverse of the original array. 
    for(let i = n - 1; i >= 0; i--){
        var x = --rangeArray[array[i]- min];
        output[x] = array[i];
    }
    return output;
}
var list = [4, 3, 2, 4, 3, 2, 3, 1, 1];
var list1 = [4,6,5,4]
console.log(countingSort(list));

