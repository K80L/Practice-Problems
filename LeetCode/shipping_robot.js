// 2. Shipping Robot

// An e-commerce website uses a robot for its shipping process.
// There is a row of bins, where each bin contains a certain number of packages, and a robot stands at the end of the row.
// The robot can move to any bin and back again, picking up a maximum of 1 package from each bin along the way, which are then shipped.
// Moving the distance of 1 bin and back requires 1 unit of time. Also, the process of loading and unloading 1 package requires 1 unit of time.
// Given the number of bins and how many packages are in each one, what is the minimum amount of time the robot needs to remove all the packages from the bins?

// For example, let's say there are n = 3 bins, where packages = [1, 2, 3]. This means that the first bin has 1 package in it, the second has 2, and the third has 3, with the robot standing near the last bin.
// The optimal movement for the robot is as follows:
// 1. Move to the third bin, retrieve 1 package, then move back to its position. This requires 2 units of time (1 to move to the bin and back, and 1 to load and unload the 1 package).
// 2. Move to the second bin, retrieving 1 package from the third bin and 1 package from the second bin, then move back to its position. This requires 4 units of time (2 to move to the bin and back since it's 2 bins away, and 2 to load and unload the 2 packages).
// 3. Move to the first bin, retrieving 1 package each from each of the three bins, the move back to its position. This requires 6 units of time (3 to move to the bin and back since it's 3 bins away, and 3 to load and unload the 3 packages).

// Following this procedure, the robot would successfully remove all the packages from all the bins in a minimum time of 2 + 4 + 6 = 12. Therefore, the answer is 12.

// Function Description
// Complete the function minTime in the editor below.

// minTime has the following parameter:
//     int packages[n]: an array of integers denoting the number of packages in each bin
// Returns:
//     long: the minimum amount of time needed for the robot to remove all the packages from the bins

// Constraints
// * 1 ≤ n ≤ 5×105
// * 1 ≤ packages[i] ≤ 109

// Input Format For Custom Testing
// The first line contains an integer, n, denoting the number of elements in packages.
// Each line i of the n subsequent lines (where 0 ≤ i < n) contains an integer describing packages[i].
// Sample Case 0
// Sample Input For Custom Testing
// STDIN     Function
// -----     --------
// 3     =>  n = 3
// 7     =>  packages = [7, 4, 7]
// 4
// 7
// Sample Output
// 39
// Explanation
// The optimal solution is for the robot to take 7 trips to the first bin (which is the furthest bin from it), collecting the packages in each of the bins during these trips. Each trip will take 3 units of time.
// Also, the robot will spend 7 + 4 + 7 = 18 units of time to load and unload all the packages. Therefore, the total time required to retrieve all the packages is (7 * 3) + 18 = 39.
// Sample Case 1
// Sample Input For Custom Testing
// 3
// 3
// 2
// 1
// Sample Output
// 15
// Explanation
// The optimal solution is for the robot to take 3 trips to the first bin, collecting any packages in the bins along the way. Each trip will take 3 units of time. Also, the robot will spend 3 + 2 + 1 = 6 minutes to load and unload the packages.
// Therefore, the total time required to retrieve all the packages is (3 * 3) + 6 = 15.

function shippingRobot(packages) {
  let totalTravel = 0;
  let totalPackages = packages.reduce((a, b) => a + b);
  while (packages.some((bin) => bin !== 0)) {
    let max = 0;
    let secondMax = 0;
    let maxIdx = 0;
    for (let i = 0; i < packages.length; i++) {
      if (packages[i] > max) {
        max = packages[i];
        maxIdx = i;
      }
      if (packages[i] > secondMax && packages[i] !== max) {
        secondMax = packages[i];
      }
    }

    let count = 0;
    let diff = max - secondMax;
    for (let i = maxIdx; i < packages.length; i++) {
      if (packages[i] === max) {
        packages[i] -= diff;
      }
    }
    let dist = packages.length - maxIdx;
    count = dist * diff;
    totalTravel += count;
  }

  return (totalTravel += totalPackages);
}

console.log(shippingRobot([1, 2, 3]));
console.log(shippingRobot([3, 2, 1]));
console.log(shippingRobot([7, 4, 7]));
console.log(shippingRobot([6, 4, 8, 3]));

// 1. find the max (YES)
// 2. find the next max
// 3. take the diff between max - nextMax
// 4. subtract max-diff
// 5. add totalTime += distance from robot to maxBin
// 6. loop until all are 0
// 7. return totalTime + totalPackages
// [6, 4, 8, 3] --> [6, 3, 6, 1] --> [6, 3, 6, 0] --> [5, 2, 5, 0] --> [4, 1, 4, 0] --> [3, 0, 3, 0]  --> [2, 0, 2, 0]  --> [1, 0, 1, 0]  --> [0, 0, 0, 0]
// [12, 50, 35, 54, 46, 27] --> [12, 50, 35, 50, 46, 27] --> [12, 46, 35, 46, 46, 27] --> [12, 35, 35, 35, 35, 27] --> [12, 27, 27, 27, 27, 27] --> [12, 12, 12, 12, 12, 12] --> [0, 0, 0, 0, 0, 0]
// totalPackages = 21
// totalTime =

// [3,2,1] --> 3+1 3+2, 3+3 = 15
