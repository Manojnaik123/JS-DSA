/*
-----------------------------------------------------------
 ! Sliding windows algorithm 
-----------------------------------------------------------
It is a method to reduce the nested loops (brute force) into a single loop when dealing 
with problems like:

> SubArrays 
> SubSequences 
> SubStrings 

Instead of recalculating every subarray, we just slide a window accross the array and 
update the result effeciently. 

-----------------------------------------------------------
 ! Types of Sliding Window
-----------------------------------------------------------
1 - Fixed-Size Window (Here, window length is fixed).
    Example: Find the maximum sun of any subarray of size k.

2-  Variable-Size Window (Here, window grows and shrinks based on condition).
    Example: Find the smallest sub array with sum >= target.
*/

// ? Example for the Fixed Window 

function fixedWindow(a, k) {
    var n = a.length;
    var windowSum = 0;
    var maxSum = 0;

    for (var x = 0; x < k; x++) {
        windowSum += a[x]
    }

    maxSum = windowSum;

    for (var x = k; x < n; x++) {
        windowSum += a[x] - a[x - k]
        maxSum = Math.max(windowSum, maxSum);
    }

    return maxSum;
}

// var t = [1,2,3,4,5]

// console.log(fixedWindow(t, 2)); // - 9
// console.log(fixedWindow(t, 3)); // 12
// console.log(fixedWindow(t, 4)); // 14

// ? Example for Variable Window 
// This function returns smallest subarray whos length is >= target. 

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

var t = [1, 2, 3, 4, 5]

console.log(minLengthSubArraySum(t, 9));


// Still there are variations of this 
