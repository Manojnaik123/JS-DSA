// Insertion Sort - Insertion Sort got its name because it works by taking one element 
// at a time and inserting it into its correct position in the already-sorted part of the array.

var list = [5, 4, 6, 2, 7, 3, 2]

function InsertionSort(list) {
    for(let x = 1; x < list.length; x++){
        var key = list[x];
        var y = x - 1;
        while(y >= 0 && list[y] > key){
            list[y+1] = list[y];
            y --;
        }
        list[y + 1] = key;
    }
    return list;
}

console.log(InsertionSort(list));
