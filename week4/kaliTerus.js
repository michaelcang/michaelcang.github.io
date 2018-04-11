function kaliTerusRekursif(angka) {
  var angkaStr = String(angka);
  var newAngka = 1;
  if (angkaStr.length !== 1) {
    for (var i = 0; i < angkaStr.length; i++) {
      newAngka *= Number(angkaStr[i]);
    }
    return kaliTerusRekursif(newAngka);
  } else {
    return angka;
  }
}

// TEST CASES
console.log(kaliTerusRekursif(66)); // 8
console.log(kaliTerusRekursif(3)); // 3
console.log(kaliTerusRekursif(24)); // 8
console.log(kaliTerusRekursif(654)); // 0
console.log(kaliTerusRekursif(1231)); // 6
