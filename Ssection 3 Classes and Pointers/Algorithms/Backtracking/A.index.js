// https://www.youtube.com/playlist?list=PLgUwDviBIf0rGlzIn_7rsaR2FQ5e6ZOL9

function recursiveFunction(count, number){
    if(count > number){
        return;
    }
    recursiveFunction(count + 1, number);
    console.log(count);
}

recursiveFunction(0+1, 5);

// ! Parameterized recursion and functional recursion

// Parameterized recursion 
// It is a type of recursion where we pass additional parameters to the recursive function to carry forward 
// intermediate results instead of recomputing them or relying on global variables.

// example:

function sumParam(n, acc = 0){
    if(n=== 0) return acc; 
    return sumParam(n-1, acc+n);
}

console.log(sumParam(5));

// Functional recursions 
// In functional recursion, each recursive call returns a value, 
// and the current function uses that return value to compute its result.

// example:

function sum(n){
    if(n=== 0){
        return 0;
    }
    return sum(n-1) + n;
}

console.log(sum(5));

// Finding factorial using the parameterized and functional recursion 

// Parameterized recursion

function factParameterized(n, acc = 1){
    if(n === 0){
        return acc;
    }
    return factParameterized(n -1, acc*n);
}

console.log(factParameterized(5));

// Functional recursion 

function fact(n){
    if(n=== 0){
        return 1;
    }
    return fact(n-1)* n;
}

console.log(fact(5));

// ! Problems on functional recursion.

// ? Reverse an array (Recursion)

// [1,2,3,4,5]
//  ^       ^
//  i       j

// * using dual pointers
function reverseArr(a, i = 0, j = a.length - 1){
    if (i > j || i === j){
        return;
    }
    [a[i], a[j]] = [a[j], a[i]];
    reverseArr(a, i +1, j-1);
}

var x = [1,2,3,4,5];

reverseArr(x);

console.log(x);

// * using single pointer

function rev(a, i = 0){
    var length = a.length - 1;
    var mid = Math.ceil(a.length / 2) - 1;
    
    if( i > mid){
        return;
    }
    [a[i], a[length - i]] = [ a[length - i] , a[i]]
    rev(a, i +1)
}

var r = [1,2,3,4,5,6]

rev(r);

console.log(r);

// * cleaner code of previous one 
function rev(a, i = 0) {
    let j = a.length - 1 - i;
    if (i >= j) return;
    
    [a[i], a[j]] = [a[j], a[i]];
    rev(a, i + 1);
}

var xd = 5/2
console.log(xd);

// check if a given string is palindrome 

// var str = 'MADAM';
var str = 'MADSM';

function checkPali(s, i = 0){
    if(i >= Math.floor(s.length / 2)) return true;
    if(s[i] !== s[s.length - i - 1]) return false;
    return checkPali(s, i+1);
}

console.log(checkPali(str));


// Fibonacci number using recursion 
//  finding the nth fibonacci number

function fibonacci(n){
    if(n === 0){
        return 0;
    }
    if(n === 1){
        return 1;
    }

    return fibonacci(n-1) + fibonacci(n-2);
}

console.log(fibonacci(3)); // 2
console.log(fibonacci(5)); // 5


// Recursion on sub sequence - it can be contagious or non contagious which follows tha order 
var arr = [1,2,3,4];

function subSequence(index, arr , a = []){
    if(index === arr.length){
        console.log(a);
        return;
    }
    a.push(arr[index]);
    subSequence(index+1, arr, a);
    a.pop();
    subSequence(index+1, arr, a);
}


// subSequence(0,arr);

// ! lec 7 - 
// Priting subsequences whose sun is k 
// this approach is the blatant copy of the previous one. 
// there is a clear code approach to do this. 

function subSequenceSum(index, arr, total, a = []){
    if(index === arr.length){
        var sum = 0;
        for(let ele of a){
            sum = sum + parseInt(ele);
        }
        if(sum === total){
            console.log(a);
        }
        return;
    }
    a.push(arr[index]);
    subSequenceSum(index+1, arr, total, a);
    a.pop();
    subSequenceSum(index+1, arr, total, a);
}

console.log('-----------------------');

var arr2 = [1,2,3,4];
//subSequenceSum(0, arr2, 3);

// code according the tutor 

// ? pseudo code

// f(i, ds, s)
// {
//     if (i == n) {
//         if (s == sum) {
//             print(ds);
//         }
//         return;
//     }
//     .//Include arr[i] in the subset
//     ds.add(arr[i]);
//     s += arr[i];
//     f(i + 1, ds, s);
//     ds.remove(arr[i]);
//     s -= arr[i];
//     .// Exclude arr[i] from the subset
//     f(i + 1, ds, s);
// }


function subsequenceSum(index, sum, arr, s = 0, a = []){
    if(index === arr.length){
        if(s === sum){
            console.log(a);
        }
        return;
    }

    a.push(arr[index]);
    s += arr[index];

    subsequenceSum(index+1, sum, arr, s, a);
    s-= arr[index];
    a.pop();

    subsequenceSum(index+1, sum, arr, s, a);

}

var x = [1,2,3,4,1];

console.log('-------------------------------------');

subsequenceSum(0,2,x);

// twist in the question 
// ? Print any one subsequence if there is subsequence that's sum is equal to given sum 
// Obviously we can do it by using flags but it is not recommended. Because further fuction are called after finding one. 
// we will modify prev code 


function subsequenceSum_new(index, sum, arr, s = 0, a = []){
    if(index === arr.length){
        if(s === sum){
            console.log(a);
            return true;
        }
        return false;
    }
    a.push(arr[index]);
    s += arr[index];

    if(subsequenceSum_new(index+1, sum, arr, s, a)) return true;
    s-= arr[index];
    a.pop();

    if(subsequenceSum_new(index+1, sum, arr, s, a)) return true;

    return false;

}

subsequenceSum_new(0,6,x);

// counting the subsequences with the sum k. 

// pseudo code 
// int f() {
//     .// base case
//     .//    return 1  -> condition satisfies
//     .//    return 0  -> condition doesn't satisfy
//     let l = f();
//     let r = f();
//     return l + r;
// }

// code 

function subsequenceSum_new1(index, sum, arr, s = 0, a = []){
    if(index === arr.length){
        if(s === sum){
            return 1;
        }
        return 0;
    }
    a.push(arr[index]);
    s += arr[index];

    let l = subsequenceSum_new1(index+1, sum, arr, s, a);

    s-= arr[index];
    a.pop();

    let r = subsequenceSum_new1(index+1, sum, arr, s, a);

    return l+r;

}

console.log(subsequenceSum_new1(0,2,x));
