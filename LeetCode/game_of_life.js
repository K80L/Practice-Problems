// According to the Wikipedia's article: "The Game of Life, also known simply as Life, is a cellular automaton devised by the British mathematician John Horton Conway in 1970."

// Given a board with m by n cells, each cell has an initial state live (1) or dead (0). Each cell interacts with its eight neighbors (horizontal, vertical, diagonal) using the following four rules (taken from the above Wikipedia article):

// Any live cell with fewer than two live neighbors dies, as if caused by under-population.
// Any live cell with two or three live neighbors lives on to the next generation.
// Any live cell with more than three live neighbors dies, as if by over-population..
// Any dead cell with exactly three live neighbors becomes a live cell, as if by reproduction.
// Write a function to compute the next state (after one update) of the board given its current state. The next state is created by applying the above rules simultaneously to every cell in the current state, where births and deaths occur simultaneously.

// Example:

// Input:
// [
//   [0,1,0],
//   [0,0,1],
//   [1,1,1],
//   [0,0,0]
// ]
// Output:
// [
//   [0,0,0],
//   [1,0,1],
//   [0,1,1],
//   [0,1,0]
// ]
// Follow up:

// Could you solve it in-place? Remember that the board needs to be updated at the same time: You cannot update some cells first and then use their updated values to update other cells.
// In this question, we represent the board using a 2D array. In principle, the board is infinite, which would cause problems when the active area encroaches the border of the array. How would you address these problems?

/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var gameOfLife = function(board) {
  // iterate through the board and check all 8 possible neighbors
  // create the new board on another 2d array
  // return the new board
  const spots = [
    [0, 1],
    [0, -1],
    [1, 1],
    [-1, -1],
    [1, 0],
    [-1, 0],
    [-1, 1],
    [1, -1]
  ];

  let nextBoard = Array(board.length)
    .fill()
    .map(() => Array(board[0].length).fill(0));

  for (let i = 0; i < board.length; i++) {
    //0
    for (let j = 0; j < board[0].length; j++) {
      //1
      let neighbors = 0;
      // console.log("at position " + i + " " + j)
      // console.log(board[i][j])

      // check all 8 spots and count the neighbors
      spots.forEach(spot => {
        let x = j + spot[0]; //1, 1, 2, -1, 2
        let y = i + spot[1]; //1, 0, 1, 0,  0

        // console.log("checking spot " + y + " " + x)
        if (x >= 0 && x < board[0].length && y >= 0 && y < board.length) {
          if (board[y][x] === 1) {
            neighbors++;
            // console.log(neighbors)
          }
        }
      });
      if (board[i][j] === 1 && neighbors < 2) {
        nextBoard[i][j] = 0;
        // console.log('what')
        // console.log(nextBoard[i])
      } else if (board[i][j] === 1 && neighbors > 3) {
        // console.log('the')
        nextBoard[i][j] = 0;
        // console.log(nextBoard[i])
      } else if (board[i][j] === 1 && (neighbors === 2 || neighbors === 3)) {
        // console.log('frrr')
        nextBoard[i][j] = 1;
        // console.log(nextBoard[i])
      } else if (board[i][j] === 0 && neighbors === 3) {
        // console.log('ick')
        nextBoard[i][j] = 1;
        // console.log(nextBoard[i])
      }
    }
  }
  return nextBoard;
};

console.log(
  gameOfLife([
    [0, 1, 0],
    [0, 0, 1],
    [1, 1, 1],
    [0, 0, 0]
  ])
);
