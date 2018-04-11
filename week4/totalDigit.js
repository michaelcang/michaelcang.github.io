function totalDigitRekursif(angka) {
  var string = String(angka);
  var arr = string.split('');
  var digit = Number(arr[arr.length - 1]);
  var total = 0;
  if (string.length === 1) {
    total += Number(arr[0]);
    return total;
  } else {
    arr[0] = Number(arr[0]) + digit;
    arr.pop();
    arr = arr.join('');
    console.log(arr);
    return totalDigitRekursif(arr);
  }
}

// TEST CASES
console.log(totalDigitRekursif(512)); // 8
console.log(totalDigitRekursif(1542)); // 12
console.log(totalDigitRekursif(5)); // 5
console.log(totalDigitRekursif(21)); // 3
console.log(totalDigitRekursif(11111)); // 5
