/**

Virus Percentage
================

Implementasikan function virusPercentage untuk menghitung
persentase virus yang ada. Hanya akan ada 4 tipe virus, yaitu:
- *
- #
- @
- $

arrHasil = Object.keys(hasil);
    for (var j = 0; j <= arrHasil.length; j++) {
      if (arrHasil[j] !== students[i].class) {
        hasil[students[i].class] = new Object({});
        hasil[students[i].class] = [];
*/

function virusPercentage(input) {
  var hasil = [];
  var push = [];
  var arrVirus = [];
  var sama = false;
  for (var i = 0; i < input.length; i++) {
    sama = false;
    for (var j = 0; j < arrVirus.length; j++) {
      if (arrVirus[j][0] === input[i]) {
        sama = true;
        arrVirus[j][1] += 1;
      }
    }
    if (sama === false) {
      push = [input[i],1];
      arrVirus.push(push);
    }
  }
  for (var k = 0; k < arrVirus.length; k++) {
    hasil.push(arrVirus[k][1] * 100 / input.length + '% ' + arrVirus[k][0]);
  }
  return hasil.join(', ');
}

console.log(virusPercentage('**#*##')); // 50% *, 50% #
console.log(virusPercentage('**######')); // 75% #, 25% *
console.log(virusPercentage('**##@')); // 40% *, 40% #, 20% @
console.log(virusPercentage('@')); // 100% @
console.log(virusPercentage('#$*@')); // 25% #, 25% $, 25% *, 25% @
