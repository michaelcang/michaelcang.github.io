function totalDigitRekursif(angka) {
  // var total = 0;
  // var string = String(angka);
  // for (var i = 0; i < string.length; i++) {
  //   total += Number(string[i]);
  // }
  // return total;
  var string = String(angka);
  if (string.length === 1) {
    return Number(string[0]);
  } else {
    return Number(string[string.length - 1]) +
    totalDigitRekursif(string.slice(0, string.length - 1));
  }
}

// TEST CASES
console.log(totalDigitRekursif(512)); // 8
console.log(totalDigitRekursif(1542)); // 12
console.log(totalDigitRekursif(5)); // 5
console.log(totalDigitRekursif(21)); // 3
console.log(totalDigitRekursif(11111)); // 5
