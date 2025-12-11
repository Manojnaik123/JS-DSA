// ! To print all the combination whose sum matches the target 

// ---------------------------------------------------------------
// its a problem from the internet 
// lec 8 for the details of this problem 

// before directly diving into the code draw the recursion tree it will build intution.

/*
Given an array of distinct integers candidates and a target integer target, 
return a list of all unique combinations of candidates where the chosen numbers sum to target. 
You may return the combinations in any order.

The same number may be chosen from candidates an unlimited number of times. 
Two combinations are unique if the frequency of at least one of the chosen numbers is different.

It is guaranteed that the number of unique combinations that sum up to target is less than 150 combinations for the given input.
*/


function findCombinations(index, target, array, ans, ds = []) {
    if (index === array.length) {
        if (target === 0) {
            ans.push([...ds]);
        }
        return;
    }
    if (array[index] <= target) {
        ds.push(array[index]);
        findCombinations(index, target - array[index], array, ans, ds);
        ds.pop();
    }
    findCombinations(index + 1, target, array, ans, ds);
}

var x = [1, 2, 3, 4];
var ans = [];

findCombinations(0, 7, x, ans);

// console.log(ans);

// * Time complexity Tc = O(2^t * K)

// t = target
// K = assuming that the array length of every combination generated is K


// ! Lec - 9 

/*
Given a collection of candidate numbers (candidates) and a target number (target),
find all unique combinations in candidates where the candidate numbers sum to target.

Each number in candidates may only be used once in the combination.

Note: The solution set must not contain duplicate combinations.
*/

// Brute force approach - it similar to the previously solved problem 

// This aprroach will modify few things from the previous code and will work. And will have TC - O(2^t*klogk)
// But, there is a code with better time complexity 

// * this is new will take tiem t understand
function combinationSun2(array, target) {
    var ans = [];
    array.sort((a, b) => a - b);
    findCombinations1(0, array, target, ans, []);
    return ans;
}

function findCombinations1(index, array, target, ans, ds) {
    if (target === 0) {
        ans.push([...ds])
        return;
    }

    for (var i = index; i < array.length; i++) {
        if (i > index && array[i] === array[i - 1]) continue;
        if (array[i] > target) break;

        ds.push(array[i]);
        findCombinations1(i + 1, array, target - array[i], ans, ds);
        ds.pop();
    }
}

var t = [1, 1, 1, 2, 2];

// console.log(combinationSun2(t, 4));

// ! lec 10 - Subset sum 

// Question - Given a list(Arr) of N integers, print sums of all subsets in it. Output should be printed in incresing order of sums. 
// expected time complexity is O(2^n) ans space complexity is O()

// ? First approach to solve this will be brute force approach 
// It uses Power set algorithm - it uses bit manupulation
// time complexity of O(2^n * N)

// ? Second approach is the optimized version 
var array1 = [3, 1, 2];
var ans = [];

function findSum(index, array, sum, ans) {
    if (index === array.length) {
        ans.push(sum);
        return;
    }
    findSum(index + 1, array, sum + array[index], ans);
    findSum(index + 1, array, sum, ans);
}

function subsetSum(array) {
    var ans = [];
    findSum(0, array, 0, ans);
    ans.sort((a, b) => a - b);
    return ans;
}

console.log(subsetSum(array1));

// ! Lec 11 - Subset Sum

// Question - Given an integer array nums that may contain duplicates, return all possible subsets(the power set).
// The solution set must not contain duplicate subsets. Return the solution in any order. 


// Same as above if this questions comes in teh interview the first approach you should give is the brute force approach. 
// If they want optimed version go for the second approach as given below 


function subsetsWithoutDup(array) {
    array.sort((a, b) => a - b);
    var ans = [];
    findSubsets2(0, array, [], ans)
    return ans;
}

function findSubsets2(index, array, ds, ans) {
    ans.push([...ds]);
    for (let i = index; i < array.length; i++) {
        if (i > index && array[i] === array[i - 1]) continue;
        ds.push(array[i]);
        findSubsets2(i + 1, array, ds, ans);
        ds.pop();
    }
}

var tr = [1, 2, 2, 2, 3, 3];

console.log(subsetsWithoutDup(tr));

// ! Lec 12 Print all permutations of a string/ Array 
// Question - Given an array nums of distinct integers, return all the possible permutations. You can return the answer in any order. 

// Approach 1 - 

function allPermutation(array) {
    var ans = [];
    var check = new Array(array.length).fill(false);
    var ds = [];
    findPermutation(array, check, ans, ds);
    return ans;
}

function findPermutation(array, check, ans, ds) {
    if (ds.length === array.length) {
        ans.push([...ds]);
        return;
    }
    for (let i = 0; i < array.length; i++) {
        if (!check[i]) {
            check[i] = true;
            ds.push(array[i]);
            findPermutation(array, check, ans, ds);
            ds.pop();
            check[i] = false;
        }
    }
}


var perArray = [1, 2, 3];

console.log(allPermutation(perArray));

// ! Lec - 13 
// Approach two - in previous we were using an extra array for the check - in this we will not use the check 
// Thus, this approach will offer better space complexity then previous one. 
// This below code is entirely written by me 

function allPerm(array) {
    var ans = [];
    findAllPerm(0, array, ans);
    return ans;
}

function findAllPerm(index, array, ans) {
    if (index === array.length) {
        ans.push([...array]);
        return;
    }

    for (let i = index; i < array.length; i++) {
        [array[i], array[index]] = [array[index], array[i]];
        findAllPerm(index+1, array, ans);
        [array[i], array[index]] = [array[index], array[i]];
    }
}

var ty = [1,2,3];
console.log('[[[[[[[[[[[[[[[[[[');

console.log(allPerm(ty));
