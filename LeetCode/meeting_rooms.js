// Given an array of meeting time intervals consisting of start and end times [[s1,e1],[s2,e2],...] (si < ei), determine if a person could attend all meetings.

// Example 1:

// Input: [[0,30],[5,10],[15,20]]
// Output: false
// Example 2:

// Input: [[7,10],[2,4]]
// Output: true

/**
 * @param {number[][]} intervals
 * @return {boolean}
 */
var canAttendMeetings = function(intervals) {
  //no two times are ever overlapping
  //how would I keep track of all the available times
  //[[2,4], [5, 6], [7,10]]
  //sort it and then compare the times?
  intervals = intervals.sort((a, b) => {
    if (a[0] === b[0]) {
      return 0;
    } else {
      return a[0] < b[0] ? -1 : 1;
    }
  });

  for (let i = 0; i < intervals.length - 1; i++) {
    if (intervals[i + 1][0] < intervals[i][1]) return false;
  }

  return true;
};
