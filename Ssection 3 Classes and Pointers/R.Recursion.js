// ! Recursion
// - The process in which a function calls itself directly or indirectly is called recursion. 


// ! Steps to implement the recurion
// Step 1: Define the base class - identify the simple case where the solution is known or trivial. 
// Step 2: Define a recursive case - Break down the problem into smaller version
//  of itself and call the functionrecursively to solve each subproblem. 
// Step 3: Ensure the recursion terminates - make sure the recursive function eventually reaches the base class.
// Step 4: Combine the solution - Combine the all the solutions of the sub class to solve the original problem. 

// ! Sum of natural numbers(positive intergers)

function sumOfNaturalNumber(n){
    if(n === 1){
        return 1;
    }

    return n + sumOfNaturalNumber(n-1);
}

// ! factorial of a number 
function factorial(num) {
    // base condition
    if (num === 0 || num === 1) {
        return num;
    }

    return num * factorial(num - 1);
}

// ! Fibonacci series 
function fibonacci(num) {
    // base condition
    if (num === 0) return num;
    if (num === 1) return num;

    return fibonacci(num - 1) + fibonacci(num - 2)
}


// ! Tail recursion 
// Tail recursion is defined as a recursive function in which the recursive call 
// is the last statement that is executed by the function. 
// So basically nothing is left to execute after the recursion call.

// ? Example 
function prints(n) {
    if (n < 0) {
        return;
    }
    console.log(n);
    
    // The last executed statement
    // is recursive call
    prints(n - 1);
}

// ! Common Application of recursion 
// 1 - Tree and graph traversal 
// 2 - Sorting algorithms 
// 3 - Divide and conquer
// 4 - Fractal Generation
// 5 - Backtracking Algorithms 