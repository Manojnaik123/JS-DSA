/*
-------------------------------------------------------
    Dynamic Programming - Fibonacci Sequence
-------------------------------------------------------

Mathematical Background:
------------------------
The Fibonacci sequence is defined as:

    f(n) = f(n-1) + f(n-2), where n >= 2
    f(1) = 1
    f(0) = 0

So the series goes like:
    {0, 1, 1, 2, 3, 5, 8, 13, 21, ...}

Each number is the sum of the two preceding numbers.

-------------------------------------------------------
Naive Recursive Approach:
-------------------------------------------------------

function fib(n) {
    if (n <= 1) return n;
    return fib(n - 1) + fib(n - 2);
}

- This works, but is highly inefficient.
- Why? Because of overlapping subproblems.

-------------------------------------------------------
! Overlapping Subproblems:
-------------------------------------------------------

Consider calculating fib(5):

                fib(5)
               /     \
           fib(4)     fib(3)
          /    \      /   \
     fib(3)  fib(2) fib(2) fib(1)
     /   \     / \   / \
fib(2) fib(1)fib(1)fib(0) ...

Notice:
- fib(3) and fib(2) are being recomputed multiple times.
- The left subtree of fib(4) is identical to the right subtree of fib(5).
- This leads to a lot of redundant calculations.

-------------------------------------------------------
! Optimal Substructure:
-------------------------------------------------------
- Fibonacci exhibits an optimal substructure.
- Each solution is built from smaller subproblems.
- Instead of recalculating, we can store results and reuse them.

-------------------------------------------------------
! Optimal Substructure Property:
-------------------------------------------------------
A given problem is said to have the Optimal Substructure property is an optimal solution 
of the given problem can be obtained by using optimal solutions of its subproblems. 

? Example: The Shortest Path problem has following Optimal Substructure property:
    If a node x lies in the shortest path from the source node u to the ddestination node v then, 
    the shortest path from the shortest path from u to v is the combination 
    of shortest path from u to x and shortest path from x to v.

* On the other hand
    The longest path problem dosent have the Optimal Substructure property. 
    Here, by Longest Path we mean longest simple path (path without cycle) between two nodes. 

-------------------------------------------------------
Dynamic programming works only if:
-------------------------------------------------------
1. Overlapping Subproblems exist (same smaller problem repeat).
2. Optimal Substructure exists (bigger problem solution comes from smaller optimal solutions).

-------------------------------------------------------
Dynamic Programming Solution:
-------------------------------------------------------

1. Memoization (Top-Down):
   - Cache results of recursive calls.
   - Prevents recalculating overlapping subproblems.

2. Tabulation (Bottom-Up):
   - Build results iteratively from base cases.
   - More space-efficient and avoids recursion overhead.

-------------------------------------------------------
Key Takeaway:
-------------------------------------------------------
- Recursion alone leads to exponential time (O(2^n)).
- Dynamic Programming reduces it to linear time (O(n)).

*************************************************************************************************
-------------------------------------------------------
! Memoization:
-------------------------------------------------------

? The Algorithm 

1 - Initialize a lookup array/table with all its elements as NIL(A constant val, eg, -1 signifies absence).
2 - Call the recursive function f(n) to solve for 'n' using memoization. 
3 - At every step i, f(i) performs the following steps:
    a - Checks whether table[i] is NIL or not. 
    b - If it's not NIL, f(i) returns the value 'table[i]'
    c - If it's NIL and 'i' satisfies the base condition, we update the lookup table with the base value and return the same.
    d - If it’s NIL and ‘i’ does not satisfy the base condition, then f(i) splits the problem ‘i’ into
        subproblems and recursively calls itself to solve them.
    e - After the recursive calls return, f(i) combines the solutions to subproblems, updates the lookup
        table and returns the solution for problem ‘i’.


------------------------------------------------------------
Dry run of memoized Fibonacci: fib(5)
------------------------------------------------------------
Initial memo (lookup table):
  memo[0] = 0
  memo[1] = 1
  memo[2] = NIL
  memo[3] = NIL
  memo[4] = NIL
  memo[5] = NIL

1) Call fib(5)
   - memo[5] is NIL -> not cached
   - split: compute fib(4) and fib(3)

2) Evaluate fib(4)
   - memo[4] is NIL -> split into fib(3) and fib(2)

3) Evaluate fib(3)
   - memo[3] is NIL -> split into fib(2) and fib(1)

4) Evaluate fib(2)
   - memo[2] is NIL -> split into fib(1) and fib(0)
   - fib(1) -> base case -> return 1  (memo[1] already = 1)
   - fib(0) -> base case -> return 0  (memo[0] already = 0)
   - combine: fib(2) = 1 + 0 = 1
   - store: memo[2] = 1
   - Table now: [0, 1, 1, NIL, NIL, NIL]

5) Back to fib(3)
   - fib(2) is now cached -> 1 (reuse)
   - fib(1) is base -> 1 (reuse)
   - combine: fib(3) = 1 + 1 = 2
   - store: memo[3] = 2
   - Table now: [0, 1, 1, 2, NIL, NIL]

6) Back to fib(4)
   - fib(3) cached -> 2
   - fib(2) cached -> 1
   - combine: fib(4) = 2 + 1 = 3
   - store: memo[4] = 3
   - Table now: [0, 1, 1, 2, 3, NIL]

7) Back to fib(5)
   - fib(4) cached -> 3
   - fib(3) cached -> 2
   - combine: fib(5) = 3 + 2 = 5
   - store: memo[5] = 5
   - Final table: [0, 1, 1, 2, 3, 5]

Return fib(5) = 5

Why memoization helps:
  - Each distinct n is computed once and stored.
  - Repeated calls reuse values from memo (no redundant recursion).
  - Time: O(n)  Space: O(n) for the memo table.


*/

// Code for above 
// This code stores the base class in the memo table 

function fibonacci(n, memo = []) {

    // Check if we have already computed fib(n) earlier.
    // The array memo is used like a lookup table, where the index is n and the value is the result of fib(n).
    // If memo[n] is not undefined, that means we’ve already stored the result before.
    // Instead of recalculating, we just return the stored value immediately.
    if (memo[n] !== undefined) {
        return memo[n];
    }

    if (n <= 1) {
        memo[n] = n;
        return memo[n];
    }

    left = fibonacci(n - 1, memo);
    right = fibonacci(n - 2, memo);

    memo[n] = left + right;
    return memo[n];
}

/*
------------------------------------------------
!Tabulation:
------------------------------------------------
? The Algorithm
Steps:
    a. We begin with initializing the base values of ‘i’. 
    b. Next, we run a loop that iterates over the remaining values of ‘i’. 
    c. At every iteration i, f(n) updates the ith entry in the lookup table by combining the solutions to
    the previously solved subproblems 
    d. Finally, f(n) returns table[n].

------------------------------------------------
Tabulation Approach for Fibonacci (Bottom-Up DP)
------------------------------------------------

Idea:
- Instead of recursion, build the solution iteratively from base cases.
- Store results in a table (array) as we go.
- Each entry depends only on the two previous entries.

Dry Run for fib(5):
-----------------------------------------------
Step 1: Initialize table for base cases
   table[0] = 0
   table[1] = 1

Step 2: Fill the table iteratively
   i = 2 → table[2] = table[1] + table[0] = 1 + 0 = 1
   i = 3 → table[3] = table[2] + table[1] = 1 + 1 = 2
   i = 4 → table[4] = table[3] + table[2] = 2 + 1 = 3
   i = 5 → table[5] = table[4] + table[3] = 3 + 2 = 5

Final Table:
   table[0] = 0
   table[1] = 1
   table[2] = 1
   table[3] = 2
   table[4] = 3
   table[5] = 5

Return table[5] = 5

------------------------------------------------
Tabulation or memoization?
------------------------------------------------

1- Tabulation 
    a- Works in Bottom up fashion
    b- Avoids multiple lookups, thus, saves function call overhead time.
2- Memoization
    a- works in top down fashion 
    b- Sometimes, avoids computing solution to subproblems that are not needed, eg Longest Common SubSequence.
    c- Sometimes, more intuitive to write, eg, Matrix chain multiplication. 
*/


// Code explaining Tabulation 

function fibonacci_tabulation(n) {
    if (n === 0) return 0;
    if (n === 1) return 1;

    var table = [];
    table[0] = 0;
    table[1] = 1;

    for (let x = 2; x <= n; x++) {
        table[x] = table[x-1] + table[x-2];
    }

    return table[n];
}

// console.log(fibonacci_tabulation(10));

//! problem mentioned in the refered playlist 
    // Longest Increasing Substructure - https://www.youtube.com/watch?v=Ns4LCeeOFS4
    // Longest Common Subsequence - https://www.youtube.com/watch?v=HgUOWB0StNE&t=13s
    // Edit Distance - https://www.youtube.com/watch?v=Thv3TfsZVpw&t=2s
    // Binomial coeff - https://www.youtube.com/watch?v=3D_Oj16EtD8&t=18s

























/*
After Fibonacci with memoization, here are the key areas to explore:

? 1- Tabulation (Bottom-Up DP)

    Instead of recursion + memo, you build a table iteratively from the smallest subproblems up to n.
    Example: Fibonacci using a loop instead of recursion.
    Helps you see the DP table-building process.

? 2- Classic DP problems

    These are common in interviews and competitive programming:
    Climbing Stairs (ways to reach step n)
    Coin Change (minimum coins to make amount)
    Knapsack Problem (maximize profit under weight limit)
    Longest Common Subsequence (strings/arrays)
    Matrix DP (like minimum path sum in a grid)

? 3- Space Optimization

    Often, you don’t need the whole DP table, just the last few values.
    Example: Fibonacci can be reduced from O(n) space → O(1) space.

? 4- Advanced DP patterns

    DP on Strings (edit distance, palindromes)
    DP on Grids (paths, obstacles, unique ways)
    DP on Trees/Graphs (dynamic programming with recursion on data structures)
    Bitmask DP, DP with states (common in harder problems).
*/