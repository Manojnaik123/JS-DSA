// Selection sort - it is a simple sorting algorithm that repeateadly finds the smallest or largest element from the unsorted part
// of the aray and places it in the right part


// Selection Sort got its name because at each step, the algorithm selects the smallest (or largest) element 
// from the unsorted portion of the array and places it in its correct position.



var List = [5, 3, 8, 4, 2]
var List1 = [1, 3, 0, 4, 0]
var List2 = [5, 3, 2, 2, 0]

function SelectionSort(list) {
    var n = list.length;

    for (let i = 0; i < n; i++) {   // here we can also use i < n-1, understand why 
        let minIndex = i;

        for (let j = i +1 ; j < n; j++) {
            if(list[j] < list[minIndex]){
                minIndex = j;
            }
        }

        if(minIndex !== i){
            [list[i], list[minIndex]] = [list[minIndex], list[i]]
        }
    }

    return list;
}

console.log(SelectionSort(List));
console.log(SelectionSort(List1));
console.log(SelectionSort(List2));
