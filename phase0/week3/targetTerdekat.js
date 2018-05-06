function targetTerdekat(arr) {
  var jarak = 0;
  var jarakTerdekat = arr.length;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === 'o') {
      for (var j = 0; j < arr.length; j++) {
        if (arr[j] === 'x') {
          jarak = Math.abs(j - i);
          if (jarakTerdekat > jarak) {
            jarakTerdekat = jarak;
          }
        }
      }
      if (jarakTerdekat === arr.length) {
        jarakTerdekat = 0;
      }
    }
  }
  return jarakTerdekat;
}

// TEST CASES
console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2
