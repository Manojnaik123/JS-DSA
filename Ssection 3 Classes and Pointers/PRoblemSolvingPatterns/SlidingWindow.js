/*
-----------------------------------------------------------
 ! Sliding windows algorithm 
-----------------------------------------------------------
It is a method to reduce the nested loops (brute force) into a single loop when dealing 
with problems like:

> SubArrays
    Fixed-Size Sliding Window (Window size = k)
        🚀 Maximum Sum Subarray of Size k ✅
        🚀 First Negative Number in Every Window of Size k ✅
        🚀 Maximum of Each Subarray of Size k (Uses deque → O(n)) ✅
        🚀 Count Distinct Elements in Every Window of Size k  🧷 (readme.md)

    Variable-Size Sliding Window
        🧩 Smallest Subarray With Sum ≥ Target
        🧩 Largest Subarray With Sum ≤ Target
        🧩 Longest Subarray With Sum Exactly K

> SubSequences

> SubStrings


Instead of recalculating every subarray, we just slide a window accross the array and 
update the result effeciently. 

-----------------------------------------------------------
 ! Types of Sliding Window
-----------------------------------------------------------
1 - Fixed-Size Window (Here, window length is fixed).
    Example: Find the maximum sum of any subarray of size k.

2-  Variable-Size Window (Here, window grows and shrinks based on condition).
    Example: Find the smallest sub array with sum >= target.
*/


// ! ----------------------------------- Fixed Window ------------------------

// 🚀 Maximum Sum Subarray of Size k ✅
// 🚀 First Negative Number in Every Window of Size k ✅
// 🚀 Maximum of Each Subarray of Size k (Uses deque → O(n)) ✅
// 🚀 Count Distinct Elements in Every Window of Size k  🧷 (readme.md)

// ? Example for the Fixed Window - Example: Find the maximum sum of any subarray of size k.

// * Time complexity - O(n)
function fixedWindow(a, k) {
    if(a.length < k|| k<=0) return null; // edge case 
    var n = a.length;
    var windowSum = 0;
    var maxSum = 0;

    for (var x = 0; x < k; x++) {
        windowSum += a[x];
    }

    maxSum = windowSum;

    for (var x = k; x < n; x++) {
        windowSum += a[x] - a[x - k];
        maxSum = Math.max(windowSum, maxSum);
    }

    return maxSum;
}

// var t = [1,2,3,4,5]

// console.log(fixedWindow(t, 2)); // - 9
// console.log(fixedWindow(t, 3)); // 12
// console.log(fixedWindow(t, 4)); // 14

/* 
? Given an array of integers and a number k, 
find the first negative number in every contiguous subarray (window) of size k.

If a window does not contain a negative number, output 0 for that window.
*/

function fisrtNegativeNo(array, k) {
    var answer = [];
    var queue = [];

    for (let i = 0; i < array.length; i++) {
        // Step 1: add curent element if negative 
        if (array[i] < 0) {
            queue.push(i);
        }

        // step 2: when window has size k, process 
        if (i >= k - 1) {
            // remove out-of-window negatives
            while (queue.length && queue[0] < i - k + 1) { // even if we use if the code will work properly, when is used to make it standard. 
                queue.shift();
            }

            // first negative number 
            if (queue.length) {
                answer.push(array[queue[0]]);
            } else {
                answer.push(0);
            }
        }
    }
    return answer;
}

var r = [1, -2, -6, -1, 4];

// console.log(fisrtNegativeNo(r, 1));
// console.log(fisrtNegativeNo(r, 2));
// console.log(fisrtNegativeNo(r, 3));


/*
? Maximum of Each Subarray of Size k (Uses deque → O(n))
The time complexity is O(n), although there 2 while loops inside the for loop but the elements of the 
array is atmost added once to dequeue and deleted atmost once so no loops is doing repetative work in here. 

The space complexity is O(k)- it is because the deque size is max k not more than it. 
*/

function maxOfEachSubarray(array, k) {
    var result = [];
    var deque = [];

    for (let i = 0; i < array.length; i++) {

        // remove out-of-window elements
        if (deque.length && deque[0] < i - k + 1) { // even if we use if the code will work properly, when is used to make it standard. 
            deque.shift();
        }

        // add the elements that are lower then the current element
        while (deque.length && array[deque[deque.length - 1]] <= array[i]) {
            deque.pop();
        }

        // add the element to the deque
        deque.push(i);

        // add first element to the result 
        if (i >= k - 1) {
            result.push(array[deque[0]]);
        }
    }

    return result;
}

var x = [3, 1, 2, 5, 4];

console.log(maxOfEachSubarray(x, 3));

/*
? Count Distinct Elements in Every Window of Size k
this uses hasmap - revist when you will learn hasmap. 
*/


// ! --------------------------------- Variable window-------------------------------

// 🧩 Smallest Subarray With Sum ≥ Target ✅
// 🧩 Largest Subarray With Sum ≤ Target ✅
// 🧩 Longest Subarray With Sum Exactly K ✅

// ? Example for Variable Window 
// This function returns the length of the smallest contiguous subarray whose sum is greater than or equal to target.

// * Time complexity - O(n)
function minLengthSubArraySum(a, target) {
    var n = a.length;
    var sum = 0;
    var l = 0;
    var minLen = Infinity;

    for (var r = 0; r < n; r++) {
        sum = sum + a[r];
        while (sum >= target) {
            minLen = Math.min(minLen, r - l + 1);
            sum = sum - a[l];
            l++;
        }
    }

    return minLen !== Infinity ? minLen : Infinity;
}

// var t = [1, 2, 3, 4, 5]

// console.log(minLengthSubArraySum(t, 9));

/*
? Largest Subarray With Sum ≤ Target (_ve array elements only)
    ! for array with -ve numbers hashmaps must be used 


✅ Time Complexity (for non-negative arrays)

Time Complexity = O(n)
    Reason:
        Each element is added to sum once (when r moves forward)
        Each element is removed from sum once (when l moves forward)
        Both pointers l and r move only forward → never backward
        So total operations ≤ 2n.

Space Complexity = O(1)
    You only use fixed variables (l, r, sum, maxLen).

⚠️ Important: It does NOT work for negative numbers
*/


function larSubArray(array, target) {
    var l = 0;
    var h = 0;
    var max = -Infinity;
    var sum = 0;

    for (h; h < array.length; h++) {
        sum = sum + array[h];
        
        while(sum > target){
            sum = sum - array[l];
            l++;
        }

        max = Math.max(max, h-l+1);
    }
    console.log(max);
}

var t = [1, 2, 3, 4, 5]

larSubArray(t, 9);

/*
? 🧩 Longest Subarray With Sum Exactly K (works for positive numbers only)
    ! for array with -ve numbers hashmaps must be used 

    Time Complexity - O(n)
        Because:
        r moves from 0 → n-1 once
        l also moves forward only (never backward)
        Each element is added once and removed once
        This is the hallmark of a two-pointer sliding window.

    Space Complexity: O(1)
        Only variables: l, r, sum, longest.
*/

function longestSubarraySumK(arr, k) {
    let l = 0;
    let sum = 0;
    let longest = 0;

    for (let r = 0; r < arr.length; r++) {
        sum += arr[r];

        // shrink window until sum ≤ k
        while (sum > k) {
            sum -= arr[l];
            l++;
        }

        // now sum ≤ k
        if (sum === k) {
            longest = Math.max(longest, r - l + 1);
        }
    }
    return longest;
}
