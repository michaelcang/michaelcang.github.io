function palindrome(kata) {
  var terbalik = '';

  for (var i = 1; i <= kata.length; i++) {
    terbalik += kata[kata.length - i];
  }
  if (kata === terbalik) {
    return true;
  } else { return false;

  }

}

// TEST CASES
console.log(palindrome('katak')); // true
console.log(palindrome('blanket')); // false
console.log(palindrome('civic')); // true
console.log(palindrome('kasur rusak')); // true
console.log(palindrome('mister')); // false
