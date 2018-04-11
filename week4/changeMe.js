function changeMe(arr) {
  if (arr.length === 0) {console.log('');}
  var tampilkan = '';
  var objek = '';
  var umur = '';
  for (var i = 0; i < arr.length; i++) {
    umur = 2018 - arr[i][3];
    if (arr[i][3] === undefined || umur < 0) {
      umur = 'Invalid Birth Year';}

    objek = {firstName: arr[i][0],
        lastName: arr[i][1],
        gender: arr[i][2],
        age: umur
      };
    tampilkan = i + 1 + '. ' + arr[i][0] + ' ' + arr[i][1] + ': ';
    console.log(tampilkan);
    console.log(objek);
  }
}

// TEST CASES
changeMe([['Christ', 'Evans', 'Male', 1982], ['Robert', 'Downey', 'Male']]); // 1. Christ Evans:
// { firstName: 'Christ',
//   lastName: 'Evans',
//   gender: 'Male',
//   age: 36 }
// 2. Robert Downey:
// { firstName: 'Robert',
//   lastName: 'Downey',
//   gender: 'Male',
//   age: 'Invalid Birth Year' }
changeMe([]); // ""
