
function lon(array, k){
    var l =0;
    var h=0;
    var sum = 0;
    var longest = 0;

    for(h;h<array.length;h++){
        sum += array[h];
        if(sum===k){
            longest = Math.max(longest, h-l+1);
        }
        if(sum > k){
            sum -= array[l];
            l++;
        }
    }
    return longest;
}

var r = [1,2,3,1]

console.log(lon(r,3));
