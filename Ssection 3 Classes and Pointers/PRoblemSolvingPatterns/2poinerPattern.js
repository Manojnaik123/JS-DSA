/*
A powerfull problem solving pattern where we initialize two variables and move them towards 
or away or in the same direction. based on the problem.

Using this patter we can reduce the time complexity of an aray or string from O(n^2) to O(n).

? What is the Two Pointers Pattern?
First let's understand a pointer. 
A pointer is simply a variable that represents an index or position with in a data structure. Such as an array 
or linked list. 

Using pointers at different variables we can effeciently compare elements or we can make decesion based on the problem.  

! Common strategies:
> Converging pointers. Eg- Quick Sort
    In this approach the ptrs will will at the opposite end of the data structure and move inward. 
> Parallel pointers. Eg- Sliding window
    In this approach both the ptrs start at the same end and move in the same direction.
    This approach is common in findinf the sub array or sub strings to meet specific criteria. 
> Trigger-Based pointer


! When to use the two pointers pattern?
Generally, applied to linear data structures-
    > Array
    > Strings
    > Linked lists
*/

//------------------------------------------------------------------------------------
// ? Problem- Given an integer array, move all 0's to the end of it while
// ? maintaining the relative order of the non-zero elements. 
//------------------------------------------------------------------------------------

// This code is written by me works fine but the problem is 
// this implimentation is most relevent to the linked list.
// Here, we are doing the operations on the array we should take advantages of 
// the length and index of the array.
function seperator(array) {
    var length = array.length;
    if (array.length > 1) {
        var left = 0;
        var right = 1;

        while (right < length) {
            while (left < length && array[left] !== 0) {
                left++;
            }
            while (right < length && array[right] === 0) {
                right++;
            }
            if (right < length) {
                [array[left], array[right]] = [array[right], array[left]];
                right++;
                left++
            }
        }
    }
    return array;
}

var list = [0, 1, 0, 3, 12, 0]
var list1 = [1, 0, 3]

// console.log(seperator(list));
// console.log(seperator(list1));

// This is much cleaner version.
// This is the standard two pointer approach to move all zeros to the end 
function moveZeroToEnd(array){
    let left = 0;
    for(let right = 0; right < array.length; right++){
        if(array[right] !== 0){
            [array[right], array[left]] = [array[left], array[right]];
            left++;
        }
    }
    return array;
}

//------------------------------------------------------------------------------------
// ! Converging pointers
//------------------------------------------------------------------------------------

// Finding Palindrome 

// my code - works perfectly fine.
function isPalindrome(array){
    var mid = Math.floor(array.length / 2);
    var right = array.length - 1;
    for(var left = 0; left <= mid; left++){
        if(array[left] !== array[right]){
            return false;
        }
        right--;
    }
    return true;
}

var plai = [1,2,4,2,1];
var pali1 = [1,2,3,3,2,1];

var non = [1,2,3,4,2,1];
var non1 = [1,3,2,1];

// console.log(isPalindrome(plai));
// console.log(isPalindrome(pali1));

// console.log(isPalindrome(non));
// console.log(isPalindrome(non1));


// I can further simplify this to 

function isPalindrome(array){
    let right = array.length - 1;
    for(let left = 0; left < right; left++, right--){
        if(array[left] !== array[right]){
            return false;
        }
    }
    return true;
}

//------------------------------------------------------------------------------------
// ! Trigger-Based pointer
//------------------------------------------------------------------------------------

// Problem 1: Finding target sum
// Given sorted array Find two numbers who's sum is equal to the target.

// ? Problem 1: Two sum

function twoSum(array, target){
    var right = array.length- 1;
    for(var left = 0; left < array.length -1; ){
        if(array[left] + array[right] === target){
            return {
                left : left,
                right : right,
            }
        }
        if(array[left] + array[right] < target){
            left++;
        } else {
            right--;
        }
    }
    return null;
}

var t = [1,2,3,4,5]

// console.log(twoSum(t, 5));

// Yes, your code basically works, but rewriting it with while (left < right) is cleaner and avoids edge-case mistakes.

function twoSum(array, target) {
    let left = 0;
    let right = array.length - 1;

    while (left < right) {
        let sum = array[left] + array[right];

        if (sum === target) {
            return { left, right };
        }
        if (sum < target) {
            left++;
        } else {
            right--;
        }
    }
    return null;
}

// ? Problem 1: Three sum
// We can code this using the same logic ew used above. We have to keep the first ele in a variable.
// After that we will apply two sum from second to last node. 


// Problem 2: Moving two pointers same time in different lists
// Example: Merge two sorted list. 

var left = [1,2,3];
var right = [3,5,6];

function merge(left, right){
    var result = [];

    var leftPtr = 0;
    var rightPtr = 0;

    while(rightPtr < right.length && leftPtr < left.length){
        if(left[leftPtr] >= right[rightPtr]){
            result.push(right[rightPtr]);
            rightPtr++;
        } else {
            result.push(left[leftPtr]);
            leftPtr++;
        }
    }

    return result.concat(left.slice(leftPtr).concat(right.slice(rightPtr)));
}

console.log(merge(left, right));

//-----------------------------------------------------------------------------------
// Where to apply the two pointer pattern?
//-----------------------------------------------------------------------------------
/*
> Sorted Sequence
    Consider two pointers if the problem involves sorted sequence. 
> Compare/Combine Elements
    Use two pointers to compare or combine elements from two ends or lists. 
> Track Two Positions
    Two pointers can effeciently track two positions instead of nested loops. 
> Move/ Shrink window
    Apply two pointers to move or shrink a window for effecient solutions. 
*/
