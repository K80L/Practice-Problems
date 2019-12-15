function isPalindrome(num) {
  let clone = num;
  let res = 0;
  // 1234321 true
  // 456 false
  while (clone > 0) {
    let digit = clone % 10;

    clone = Math.floor(clone / 10);

    res *= 10;
    res = res + digit;
  }

  return res === num;
}

console.log(isPalindrome(1234321));
console.log(isPalindrome(234321));
console.log(isPalindrome(123321));
