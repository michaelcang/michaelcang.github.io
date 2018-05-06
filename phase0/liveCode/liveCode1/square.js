/**
Interesting Square
------------------
Buatlah sebuah proses perulangan menggunakan looping/perulangan
(boleh menggunakan while / for)
Disediakan variable height, gunakan variable ini untuk
mengatur tinggi dari persegi yang akan kita buat.

Contoh:
  - height: 3
  - output:
    ***
    ###
    ***

  - height: 1
  - output:
    *

  - height: 5
  - output:
    *****
    #####
    *****
    #####
    *****

Tinggi dan lebar dari persegi sesuai dari variable height
*/

var height = 5;
var asterisk = '';

for (row = 0; row < height; row++) {
  asterisk = '';
  if (row % 2 === 0) {
    for (col = 1; col <= height; col++) {
      asterisk += '*';}
  } else {
    for (col = 1; col <= height; col++) {
      asterisk += '#';
    }
  }
  console.log(asterisk);
}
