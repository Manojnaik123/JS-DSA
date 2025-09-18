/*
---------------------------------------
 Modified Binary Search 
---------------------------------------

         Finding the first or last occurrence of an element in a sorted array (useful when duplicates exist).
              Instead of stopping when we find the element, we continue searching left or right.
         Searching in a rotated sorted array.
              Example: [4,5,6,7,0,1,2] → array is sorted but rotated.
              Modified binary search decides which half is sorted and searches accordingly.
         Finding floor/ceil of an element.
              E.g., largest number ≤ target.
         Finding the peak element in a mountain array.
              Example: [1,3,5,7,6,4,2] → use binary search to find the max.
 */

// Simple Binary Search function 

var a = [1, 2, 3, 4, 5, 6];

function bsearch(a, search, l = 0, h = a.length - 1) {
    if (l > h) return -1
    var mid = Math.floor((l + h) / 2);

    if (a[mid] === search) {
        return mid;
    } else if (a[mid] < search) {
        return bsearch(a, search, mid + 1, h);
    } else {
        return bsearch(a, search, l, mid - 1);
    }
}

// console.log(bsearch(a, 5));

// ------------------------------------------------------------------------------------
// ? Finding the first or last occurrence of an element in a sorted array
// ------------------------------------------------------------------------------------

// We keep searching in the left half even if we find the element, because an earlier occurace might exist. 
function firstOccurance(a, target) {
    var l = 0;
    var h = a.length - 1;
    var result = -1;

    while (l <= h) {
        let mid = Math.floor((l + h) / 2);

        if (a[mid] === target) {
            result = mid;
            h = mid - 1;
        } else if (a[mid] < target) {
            l = mid + 1;
        } else {
            h = mid - 1;
        }
    }

    return result;
}

// console.log(firstOccurance(ar, 6));

function rightOccurance(a, target) {
    var l = 0;
    var h = a.length - 1;
    var result = -1;

    while (l < h) {
        var mid = Math.floor((l + h) / 2);
        if (a[mid] === target) {
            result = mid;
            l = mid + 1;
        } else if (a[mid] < target) {
            l = mid + 1;
        } else {
            h = mid - 1;
        }
    }

    return result;
}

var ar = [1, 1, 2, 3, 4, 5, 6, 6, 7, 8];

console.log(rightOccurance(ar, 6));


// -----------------------------------------------------------------------------------------
// ! Searching in a rotated sorted array.
//      Example: [4,5,6,7,0,1,2] → array is sorted but rotated.
//      Modified binary search decides which half is sorted and searches accordingly.
// -----------------------------------------------------------------------------------------

// This version is for rotated sorted arrays without duplicates.
// The version for the array with duplicated is complicated first get used to this. 

// ? Understanding of this function 
/*
first we will check if the target matches the mid of the array. 
if yes then we will simply return it. 

Or else, we will check which of the left and right is sorted array. (Inrotated array if we find mid 
and cheack either side we are definately gona find one sorted array)

By this way we will first check inside the left sorted array that if the element belongs to it. 
if yes we will change the condition according as we see below. 

On the flip side we are gona check in the same way in the right part of the array.

*/


function randomBinarySearch(array, target) {
    var l = 0;
    var h = array.length - 1;

    while (l <= h) {
        var mid = Math.floor((l+h)/2);

        if(array[mid] === target) return mid;

        if(array[l] <= array[mid]){
            // left sorted
            if(array[l] <= target&& array[mid] > target){
                // Element in the left sorted array.
                h = mid - 1;
            } else {
                // Element is in the right unsorted array.
                l = mid + 1;
            }
        } else {
            // Right sorted
            if(array[mid] < target && target <= array[h]){
                // Element is in the right sorted array 
                l = mid + 1;
            } else {
                // Element is in the right unsorted array. 
                h = mid - 1;
            }
        }
    }

    return -1;
}