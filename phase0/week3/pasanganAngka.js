function pasanganTerbesar(num) {
  var numString = String(num);
  var i = 0;
  var pasangan1 = Number(numString[i] + numString[i + 1]);
  var pasangan2 = 0;
  var terbesar = pasangan1;

  while (i < numString.length) {
    pasangan1 = Number(numString[i] + numString[i + 1]);
    pasangan2 = Number(numString[i + 1] + numString[i + 2]);

    if (terbesar < pasangan2) {
      terbesar = pasangan2;
    }

    i++;

  }

  return terbesar;

}
// TEST CASES
console.log(pasanganTerbesar(641573)); // 73
console.log(pasanganTerbesar(12783456)); // 83
console.log(pasanganTerbesar(910233)); // 91
console.log(pasanganTerbesar(71856421)); // 85
console.log(pasanganTerbesar(79918293)); // 99
