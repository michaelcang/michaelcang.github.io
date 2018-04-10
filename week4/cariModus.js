function cariModus(arr) {
  var countAwal = 1;
  var count = 0;
  var modus = 0;
  for (var i = 0; i < arr.length; i++) {
    count = 0;
    for (var j = 0; j < arr.length; j++) {
      if (arr[i] === arr [j]) {
        count += 1;
      }
    }
    if (count > countAwal) {
      modus = arr[i];
      countAwal = count;
    }
  }
  if (countAwal === 1 || countAwal === arr.length) {modus = -1;}
  return modus;
}

// TEST CASES
console.log(cariModus([10, 4, 5, 3, 4])); // 4
console.log(cariModus([5, 10, 10, 3, 5])); // 5
console.log(cariModus([10, 3, 1, 2, 5])); // -1
console.log(cariModus([1, 3, 3, 3, 4, 5])); // 3
console.log(cariModus([7, 7, 7, 7, 7])); // -1
