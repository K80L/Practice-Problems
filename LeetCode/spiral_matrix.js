// Given a matrix of m x n elements (m rows, n columns), return all elements of the matrix in spiral order.

// Example 1:

// Input:
// [
//  [ 1, 2, 3 ],
//  [ 4, 5, 6 ],
//  [ 7, 8, 9 ]
// ]
// Output: [1,2,3,6,9,8,7,4,5]
// Example 2:

// Input:
// [
//   [1, 2, 3, 4],
//   [5, 6, 7, 8],
//   [9,10,11,12]
// ]
// Output: [1,2,3,4,8,12,11,10,9,5,6,7]
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */

var spiralOrder = function(matrix) {
  if (matrix.length === 0) {
    return [];
  }

  let startRow = 0;
  let startCol = 0;
  let endRow = matrix.length - 1;
  let endCol = matrix[0].length - 1;
  let res = [];

  while (startRow <= endRow && startCol <= endCol) {
    for (let p = startCol; p <= endCol; p++) {
      res.push(matrix[startRow][p]);
    }
    startRow++;

    for (let i = startRow; i <= endRow; i++) {
      res.push(matrix[i][endCol]);
    }
    endCol--;

    if (startRow <= endRow) {
      for (let j = endCol; j >= startCol; j--) {
        res.push(matrix[endRow][j]);
      }
    }
    endRow--;

    if (startCol <= endCol) {
      for (let k = endRow; k >= startRow; k--) {
        res.push(matrix[k][startCol]);
      }
    }
    startCol++;
  }

  return res;
};
