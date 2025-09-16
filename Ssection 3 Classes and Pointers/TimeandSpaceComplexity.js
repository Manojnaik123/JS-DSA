// Need to cover time complexity 

// Space Complexity 
// Amount of space an algorithm requires to complete its execution is called space complexity. 

// S(p) = c + Sp

// S(p) -  is space complexity 
// c - Constant / Independent part
// Sp - Dependent part/ Variable part 

// Algorithm for sum of two numbers 
function sum(p, q, r) {
    p = 1;  // -- const - 1 unit
    q = 2;  // -- const - 1 unit
    r = p + q; // -- const - 1 unit
}


// S(p) = c + Sp;

// In the above code we have three constants and no variable constant. So,

// S(p) = 1+1+1 + Sp

// We dont have the Sp so leave it can calculate remaining so, S(p) = 3 that is O(1)

// Example 2 - Sum of array

// s - arrayname
// n - size 

function sum(s,n){
    var total = 0;            // 1 unit
    for(let i =0; i< n; i++){   // i - 1 unit
        total = total + s[i]    // total - 1 unit and s is depending on the i, so, depending variable.
    }                                                                      // So n variables 
    return total;
}

// Calculating the space complexity - S(p) = c + Sp => 1+1+1+n  => O(n);



