function reverseAll(arr) {
  terbalikArr = [];
  terbalikStr = '';
  if (arr.length === 0) {return terbalikArr;}
  for (var i = arr.length - 1; i >= 0; i--) {
    terbalikStr = '';
    for (var j = 1; j <= arr[i].length; j++) {
      terbalikStr += arr[i][arr[i].length - j];

    }
    terbalikArr.push(Array(terbalikStr));
  }
  return terbalikArr;
}

console.log(reverseAll(['dimitri', 'sergei', 'alexei']));
// ['iexela', 'iegres', 'irtimid']

console.log(reverseAll(['kira', 'lawliet', 'near', 'mello']));
// [ 'ollem', 'raen', 'teilwal', 'arik' ]

console.log(reverseAll([]));
// []
