// aabcccccaaa --> a2b1c5a3

const strComp = (str) => {
  let res = "";

  let i = 0;
  let j = 0;
  let count = 0;
  while (j <= str.length) {
    let curr = str[i];

    if (curr !== str[j]) {
      res += curr + count;
      i = j;
      count = 0;
    }
    count++;
    j++;
  }
  return res;
};

console.log(strComp("aabcccccaaa"));
