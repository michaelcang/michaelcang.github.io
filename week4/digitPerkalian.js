function digitPerkalianMinimum(angka) {
  var hasil = 0;
  var digit = 0;
  var count = 10;
  for (var i = 1; i <= angka; i++) {
    digit = 0;
    if (angka % i === 0) {
      hasil = angka / i;
      digit = String(i).length + String(hasil).length;
      if (count > digit) {count = digit;}
    }
  }
  return count;
}

// TEST CASES
console.log(digitPerkalianMinimum(24)); // 2
console.log(digitPerkalianMinimum(90)); // 3
console.log(digitPerkalianMinimum(20)); // 2
console.log(digitPerkalianMinimum(179)); // 4
console.log(digitPerkalianMinimum(1)); // 2
