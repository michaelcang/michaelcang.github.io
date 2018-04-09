/*
Instruksi
=========
Buatlah sebuah function bernama drawLadder yang menerima satu parameter bernama row, dan akan menampilkan x ke samping di baris ganjil, dan o di baris genap. Function drawLadder tidak perlu me-return apapun.
Function tidak perlu mengembalikan nilai (tidak perlu ada return).

Contoh 1
--------
input: 3
tampilan:
x
oo
xxx

Contoh 2
--------
input: 6
tampilan:
x
oo
xxx
oooo
xxxxx
oooooo

*/

function drawLadder(row) {
  var ladder = '';

  for (rowLadder = 0; rowLadder < row; rowLadder++) {
    ladder = '';
    if (rowLadder % 2 === 0) {
      for (colLadder = 0; colLadder <= rowLadder; colLadder++) {
        ladder += 'x';}
    } else {
      for (colLadder = 0; colLadder <= rowLadder; colLadder++) {
        ladder += 'o';
      }
    }
    console.log(ladder);
  }

}

drawLadder(6);
drawLadder(3);
