/*
!Arrays 
    1- Static array
        You usually must specify the size while declaring the array.
    2- Dynamic array
        No need to specify the length.
        Memory is allocated dynamically as the elements are added. 
*/

var x = Array.from({length: 6}, ()=>[])

let edges = [
    [0,4], [0,1],
    [1,3],
    [4,3],
    [3,2]
];

for(let y of edges){
    x[y[0]].push(y[1]);
}

console.log(x);



