//(1, 1) => (5, 2)
//can move (x+y, x) or (x, x+y)
function robotMoves(x1, y1, x2, y2) {
  if (x1 === x2 && y1 === y2) {
    return "Yes";
  }
  if (x1 > x2 || y1 > y2) {
    return;
  }
  let possible1 = robotMoves(x1 + y1, y1, x2, y2) === "Yes" ? "Yes" : "No";
  let possible2 = robotMoves(x1, x1 + y1, x2, y2) === "Yes" ? "Yes" : "No";

  if (possible1 === "Yes" || possible2 === "Yes") {
    return "Yes";
  }
}

console.log(robotMoves(2, 4, 5, 5));
// console.log(robotMoves(1, 1, 4, 3));
