// Bubble sort - it is one of the simplest sorting algorithm. It repeatedly steps through the list compares 
// adjacent elements and swaps them if they are in the wrong order. 
// Refer - BubbleSort.gif


// Bubble Sort got its name because of the way larger 
// elements “bubble up” to the top (end) of the array with each pass.

var linkedList = [5,3,8,4,2];

function bubbleSort(list){
    var n = list.length;
    var swapped;
    for(let i =0; i < n; i++){
        swapped = false;
        for( let j = 0; j < n - i - 1; j++){
            if(list[j] > list[j+1]){
                [list[j], list[j+1]] = [list[j+1], list[j]]
            }
            swapped = true;
        }
        if(!swapped) break;   // If no break then list is sorted. 
    } 
    return list;
}

console.log(bubbleSort(linkedList));
