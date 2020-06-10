robotPath = grid => {
  if (!grid || !grid.length) return null;

  let path = [];

  if (robotHelper(grid, path, 0, 0)) {
    return path;
  }

  return null;
};

robotHelper = (grid, path, row, col) => {
  if (row >= grid.length || col >= grid[0].length || !grid[row][col]) {
    return false;
  }

  let isAtOrigin = row === grid.length - 1 && col === grid[0].length - 1;
  // if (row === grid.length - 1 && col === grid[0].length - 1) {
  //   return true;
  // }

  if (
    isAtOrigin ||
    robotHelper(grid, path, row + 1, col) ||
    robotHelper(grid, path, row, col + 1)
  ) {
    path.push([row, col]);
    return true;
  }
};

let grid = [
  [1, 1, 1, 1],
  [1, 1, 0, 0],
  [0, 1, 1, 1],
  [0, 0, 0, 1]
];

console.log(robotPath(grid));
