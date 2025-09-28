/*
> Backtracking = Brute Force + Pruning. (Cutting of a branch of possibilities early when you 
    know it cannot lead to valid solution.)
> Tries all solutions but stops early if a path is invalid.
> Works for combinatorial problems: Subsets, permutation, N-Queens, Sudoku, etc.
> Time complexity is still often exponential, but preuning reduces actual work. 

*/

// ! Step 1: Now lets Lern Brute Force/ Simple Backtracking. 

// ? Goal: Understand how trying all possibilities works. 

// 1- Generate all subsets of a set.
// 2- Generate all permutations of a string/array.
// 3- Generate all combinations. 

// ? Key points to notice:
// > Brute Force = try everything.
// > Backtracking = recursively try and undo choices. 

// ? Practive Problems:
// > Subsets
// > Permutation
// > Combination 

// ! Step 2: Understand Pruning (Optimized Backtracking)

// ? Goal: Learn how to stop exploring impossible paths early.

// 1- N-Queens problem (LeetCode 51)
// 2- Sudoku Solver (LeetCode 37)
// 3- Word Search in 2D Grid (LeetCode 79)

// ? Key concepts:
// > At each recursive step, check if the choice is valid
// > If invalid → prune and backtrack
// > This reduces the exponential search space

// ! Step 3: Practice Variations

// ? Problems that require state tracking
// Example: Maze solving / Rat in a Maze

// ? Problems that require counting all possible solutions
// Example: Counting ways to place N queens

// ? Tips:
// Draw a decision tree for small inputs to visualize choices
// Try writing recursive + backtracking solutions first, then optimize

// ! Step 4: Time Complexity Analysis

// Understand why backtracking is usually O(k^n)
// Learn how pruning reduces actual search space
// Compare brute force vs optimized backtracking

//----------------------------------------- // !Step 1: // ---------------------------------------------

//----------------------------------------- // !Step 2: // ---------------------------------------------

//----------------------------------------- // !Step 3: // ---------------------------------------------

//----------------------------------------- // !Step 4: // ---------------------------------------------