// Given a list of scores of different students, return the average score of each student's top five scores in the order of each student's id.

// Each entry items[i] has items[i][0] the student's id, and items[i][1] the student's score.  The average score is calculated using integer division.

// Example 1:

// Input: [[1,91],[1,92],[2,93],[2,97],[1,60],[2,77],[1,65],[1,87],[1,100],[2,100],[2,76]]
// Output: [[1,87],[2,88]]
// Explanation:
// The average of the student with id = 1 is 87.
// The average of the student with id = 2 is 88.6. But with integer division their average converts to 88.

// Note:

// 1 <= items.length <= 1000
// items[i].length == 2
// The IDs of the students is between 1 to 1000
// The score of the students is between 1 to 100
// For each student, there are at least 5 scores

/**
 * @param {number[][]} items
 * @return {number[][]}
 */
var highFive = function(items) {
  //sort the array by student id and scores
  //use a hash to count how many scores we have used
  let hash = {};
  for (let i = 0; i < items.length; i++) {
    let id = items[i][0];
    let score = items[i][1];
    if (!hash[id]) hash[id] = [];
    hash[id].push(score);
  }
  let scores = [];

  Object.keys(hash).forEach(id => {
    let avg = 0;
    hash[id].sort((a, b) => b - a);
    for (let i = 0; i < 5; i++) {
      avg += hash[id][i];
    }
    avg = Math.floor(avg / 5);
    scores.push([id, avg]);
  });

  return scores;
};
