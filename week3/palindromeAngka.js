function angkaPalindrome(num) {
  var numString = String(num);
  var terbalik = '';

  while (numString !== terbalik) {
    num += 1;
    numString = String(num);
    terbalik = '';
    for (var j = 1; j <= numString.length; j++) {
      terbalik += numString[numString.length - j];
    }
  }
  return num;
}

// TEST CASES
console.log(angkaPalindrome(8)); // 9
console.log(angkaPalindrome(10)); // 11
console.log(angkaPalindrome(117)); // 121
console.log(angkaPalindrome(175)); // 181
console.log(angkaPalindrome(1000)); // 1001
