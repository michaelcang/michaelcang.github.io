// 1. barisan bintang

var rows1 = 5;

for (rows1 = 5; rows1 > 0; rows1--) {
  console.log('*');
}

// 2. barisan bintang dengan nested loop

var rows2 = 5;

for (row = 1; row <= rows2; row++) {
  asterisk = '';
  for (col = 1; col <= rows2; col++) {
    asterisk += '*';
  }
  console.log(asterisk);
}

// 3. tangga bintang dengan nested loop

var rows3 = 5;

for (row = 1; row <= rows3; row++) {
  asterisk = '';
  for (col = 1; col <= row; col++) {
    asterisk += '*';
  }
  console.log(asterisk);
}

// 4. box asterisk

var row4 = 5;
var col4 = 3;

for (var row = 0; row <= row4 - 1; row++) {
  asterisk = '';
  for (var col = 0; col <= col4 - 1; col++) {
    if (row === 0 || row === row4 - 1) {
      asterisk += '*';
    }
    if (row > 0 && row < row4 - 1) {
      if (col === 0 || col === col4 - 1) {
        asterisk += '*';
      } else {asterisk += ' ';}
    }
  }
  console.log(asterisk);
}

