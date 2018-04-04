function tentukanDeretAritmatika(arr) {
  deret = true;
  i = 0;
  beda1 = 0;
  beda2 = 0;

  while (i < arr.length - 2) {
    beda1 = arr[i + 1] - arr[i];
    beda2 = arr[i + 2] - arr[i + 1];

    if (beda1 !== beda2) {
      deret = false;
    }
    i++;
  }

  return deret;
}

// TEST CASES
console.log(tentukanDeretAritmatika([1, 2, 3, 4, 5, 6])); // true
console.log(tentukanDeretAritmatika([2, 4, 6, 12, 24])); // false
console.log(tentukanDeretAritmatika([2, 4, 6, 8])); // true
console.log(tentukanDeretAritmatika([2, 6, 18, 54])); // false
console.log(tentukanDeretAritmatika([1, 2, 3, 4, 7, 9])); // false
