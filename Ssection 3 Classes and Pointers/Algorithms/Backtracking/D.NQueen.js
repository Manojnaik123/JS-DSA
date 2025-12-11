// ! N Queen problem 

// Approach one

// The n-queens puzzle is the problem of placing n queens on an n x n chessboard such that 
// no two queens attack each other.

// Given an integer n, return all distinct solutions to the n-queens puzzle. 
// You may return the answer in any order.

// Each solution contains a distinct board configuration of the n-queens' placement, 
// where 'Q' and '.' both indicate a queen and an empty space, respectively.

// Possible solution 

    // [ . . Q . ]  
    // [ Q . . . ]
    // [ . . . Q ]
    // [ . Q . . ]

    // [ . Q . . ]
    // [ . . . Q ]
    // [ Q . . . ]
    // [ . . Q . ]

function createMatrix(n) {
  return Array.from({ length: n }, () =>
    Array.from({ length: n }, () => '.')
  );
}

function nQueen(n){
    var board = createMatrix(n);
    var ans = [];
    findAns(0, n, board, ans)
    return ans;
}

function findAns(index, n, board, ans){
    if(index === n){
        ans.push(board.map(row => [...row]));
        return;
    }
    for(let row=0; row<n; row++){
        if(isSafe(row, index, board, n)){
            board[row][index] = 'Q';
            findAns(index+1, n, board, ans);
            board[row][index] = '.';
        }
    }
}

function isSafe(row, column, board, n){
    var r = row;
    var c = column;

    // r-- c-- \
    while(r>=0 && c>=0){
        if(board[r][c] === 'Q') return false;
        r--;
        c--;
    }

    r = row;
    c=column;
    // r c-- <-
    while(c>=0){
        if(board[r][c] === 'Q') return false;
        c--;
    }

    r = row;
    c=column;
    // r++  c--
    while(r<n && c>=0){
        if(board[r][c]=== 'Q') return false;
        r++;
        c--;
    }

    return true;
}

// console.log(nQueen(4));

// Approach 2- more effecient code than above. 
// Not that difficult dive deep you will understand. 

function solveNQueens(n){
    var ans = [];
    var board = createMatrix(n);
    var leftRow = new Array(n).fill(0);
    var upperDiagonal= new Array(2*n-1).fill(0);
    var lowerDiagonal= new Array(2*n-1).fill(0);
    solve(0, board, ans, n, leftRow, upperDiagonal, lowerDiagonal);
    return ans;
}

function solve(col, board, ans, n, leftRow, upperDiagonal, lowerDiagonal){
    if(col === n){
        ans.push(board.map(row=> [...row]));
        return;
    }

    for(let row = 0; row < n; row++){
        if(leftRow[row] === 0&& lowerDiagonal[row+col] === 0
    && upperDiagonal[n-1 + col -row] === 0){
        board[row][col]= 'Q';
        leftRow[row] = 1;
        upperDiagonal[n-1+col-row] = 1;
        lowerDiagonal[row+col] = 1; 
        solve(col+1, board, ans, n, leftRow, upperDiagonal, lowerDiagonal);
        board[row][col]= '.';
        leftRow[row] = 0;
        upperDiagonal[n-1+col-row] = 0;
        lowerDiagonal[row+col] = 0; 
    }
    }
}

console.log(solveNQueens(4));
