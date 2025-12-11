// ! Sudoku solver 

// Write a program to solve a Sudoku puzzle by filling the empty cells. 
// A sudoku solution must satisfy all the following rules. 
// 1- Each of the digits 1-9 must occur excatly once in each row. 
// 2- Each of the digits 1-9 must occurs excatly once in each column.
// 2- Each of the digits 1-9 must occurs excatly once in each of the 9 3X3 sub-boxes of the grid. 
// This means question is asking one valid sudoku solution 
// The '.' indicates empty cells. 

// understood the approach need deep dive. 

function solveSudoku(board) {
    solve(board);
}

function solve(board) {
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[0].length; j++) {
            if (board[i][j] === '.') {
                for (let c = 1; c <= 9; c++) {
                    let charC = c.toString();
                    if (isValid(board, i, j, charC)) {
                        board[i][j] = charC;
                        if (solve(board)) {
                            return true;
                        } else {
                            board[i][j] = '.';
                        }
                    }
                }
                return false;
            }
        }
    }
    return true;
}

function isValid(board, row, col, c) {
    for (let i = 0; i < 9; i++) {
        if (board[i][col] === c) return false;
        if (board[row][i] === c) return false;
        if (board[3 * Math.floor(row / 3) + Math.floor(i / 3)][3 * Math.floor(col / 3) + i % 3] === c) return false;
    }
    return true;
}