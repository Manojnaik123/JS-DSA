/*
-------------------------------------------------
! Palindrome 
-------------------------------------------------

It is a word, number or sequence of charecters the reads same forward and backward.

 */

// ? Finding Palindrome Works for list, strings and numbers.

function Palindrome(a){
    if(Number.isInteger(a)){
        a = String(a)
    }
    var l = 0;
    var h = a.length - 1;
    
    while(l<h){
        if(a[l] != a[h]){    // Usage of != and !== depends on our needs of strict equals to 
            return false;
        }
        l++;
        h--;
    }
    return true;
}

// console.log(Palindrome([1,2,3,4]));
console.log(Palindrome(1221));

