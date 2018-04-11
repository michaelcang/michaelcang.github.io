function checkAB(num) {
  var AB = false;
  var jarak = 0;
  for (var i = 0; i < num.length; i++) {
    if (num[i] === 'a') {
      for (var j = 0; j < num.length; j++) {
        if (num[j] === 'b') {
          jarak = Math.abs(j - i);
          if (jarak === 4) {AB = true;}
        }
      }
    }
  }
  return AB;
}

// TEST CASES
console.log(checkAB('lane borrowed')); // true
console.log(checkAB('i am sick')); // false
console.log(checkAB('you are boring')); // true
console.log(checkAB('barbarian')); // true
console.log(checkAB('bacon and meat')); // false
