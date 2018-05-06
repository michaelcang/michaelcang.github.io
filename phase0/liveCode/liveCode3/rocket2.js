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
  var hasil = ''
  var virus = {};
  for (var i = 0; i < input.length; i++) {
    arrVirus = Object.keys(virus);
    if (arrVirus.indexOf(input[i]) === -1) {
      virus[input[i]] = 1;
    } else {
      virus[input[i]] += 1;
    }
  }
  for (var key in virus) {
    virus[key] = virus[key] * 100 / input.length + '%';
  }
  return virus;
}

console.log(virusPercentage('**#*##')); // 50% *, 50% #
console.log(virusPercentage('**######')); // 75% #, 25% *
console.log(virusPercentage('**##@')); // 40% *, 40% #, 20% @
console.log(virusPercentage('@')); // 100% @
console.log(virusPercentage('#$*@')); // 25% #, 25% $, 25% *, 25% @
