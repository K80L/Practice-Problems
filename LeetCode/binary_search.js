function binarySearch(arr, target) {
  if (!arr.length) {
    return -1;
  }

  arr = arr.sort();

  const mid = Math.floor(arr.length / 2);
  if (arr[mid] === target) {
    return mid;
  } else if (arr[mid] > target) {
    const left = arr.slice(0, mid);
    return binarySearch(left, target);
  } else {
    const right = arr.slice(mid + 1);
    const searchResult = binarySearch(right, target);
    return searchResult === -1 ? -1 : searchResult + mid + 1;
  }
}

console.log(binarySearch([0, 1, 2, 3, 4, 5, 6, 7, 8, 9], 7));
console.log(binarySearch([0, 1, 2, 3, 4, 5, 6, 7, 8, 9], 3));
console.log(binarySearch([0, 1, 2, 3, 4, 5, 6, 7, 8, 9], 10));
console.log(binarySearch([], 1));
