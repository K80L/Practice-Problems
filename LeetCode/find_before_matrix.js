// given an after matrix, find the before matrix used to make the after matrix
// after: [[2, 5], [7, 17]]
// before: [[2, 3], [5, 7]]

function findBeforeMatrix(after) {
  let before = Array(after.length)
    .fill()
    .map(() => Array(after[0].length).fill(0));

  for (let i = 0; i < after.length; i++) {
    for (let j = 0; j < after[0].length; j++) {
      before[i][j] = after[i][0] + after[0][j] - after[0][0];
    }
  }

  return before;
}

let after = [
  [2, 5],
  [7, 17]
];

console.log(findBeforeMatrix(after));
