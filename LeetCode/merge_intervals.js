// Given a collection of intervals, merge all overlapping intervals.

// Example 1:

// Input: [[1,3],[2,6],[8,10],[15,18]]
// Output: [[1,6],[8,10],[15,18]]
// Explanation: Since intervals [1,3] and [2,6] overlaps, merge them into [1,6].
// Example 2:

// Input: [[1,4],[4,5]]
// Output: [[1,5]]
// Explanation: Intervals [1,4] and [4,5] are considered overlapping.
// NOTE: input types have been changed on April 15, 2019. Please reset to default code definition to get new method signature.
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */

// Input:  [[1,13],[2,6],[4,7],[8,10],[15,18]]
// Output: [[1,7],[8,10],[15,18]]
// 1. Sort the intervals by start time in ascending order
// 2. iterate through the intervals
// 3. if the next start time is before the current end time, we need to merge
//      set the max time to be the latest end time
// 4. keep iterating to find all times that must be merged
// 5. update max time if there is a time that is merged AND there is an end time that is bigger than current endtime
// 6. if no merge needed, simply add that time to the return answer

var merge = function(intervals) {
  let merged = [];
  intervals = intervals.sort((a, b) => {
    if (a[0] === b[0]) {
      return 0;
    } else {
      return a[0] < b[0] ? -1 : 1;
    }
  });

  let i = 0;
  while (i < intervals.length) {
    let j = i;
    let k = i + 1;
    if (intervals[k] && intervals[j][1] >= intervals[k][0]) {
      let max = Math.max(intervals[j][1], intervals[k][1]);

      while (intervals[k] && max >= intervals[k][0]) {
        if (intervals[k][1] > max) {
          max = intervals[k][1];
        }
        j++;
        k++;
      }

      merged.push([intervals[i][0], max]);
      i = k;
    } else {
      merged.push(intervals[i]);
      i++;
    }
  }

  return merged;
};
