function deleteExtra(str1, str2) {
  let hash1 = {};
  let hash2 = {};
  let count = 0;
  const seen = {};

  for (let i = 0; i < str1.length; i++) {
    if (!hash1[str1[i]]) {
      hash1[str1[i]] = 0;
    }
    hash1[str1[i]]++;
  }

  for (let i = 0; i < str2.length; i++) {
    if (!hash2[str2[i]]) {
      hash2[str2[i]] = 0;
    }
    hash2[str2[i]]++;
  }

  console.log(hash1);
  console.log(hash2);

  Object.keys(hash1).forEach((key) => {
    val1 = hash1[key];
    val2 = hash2[key] ? hash2[key] : 0;
    seen[key] = true;
    count += Math.abs(val1 - val2);
  });

  Object.keys(hash2).forEach((key) => {
    val1 = hash2[key];
    val2 = hash1[key] ? hash1[key] : 0;
    if (!seen[key]) {
      count += Math.abs(val1 - val2);
    }
  });

  return count;
}

console.log(deleteExtra("thought", "sloughs"));
console.log(deleteExtra("cat", "at"));
console.log(deleteExtra("boat", "got"));
