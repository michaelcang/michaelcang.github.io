function groupAnimals(animals) {
  var kelompok = [[]];
  kelompok[0].push(animals[0]);
  for (var i = 1; i < animals.length; i++) {
    for (var j = 0; j < kelompok.length; j++) {
      if (animals[i][0] === kelompok[j][0][0]) {
        kelompok[j].push(animals[i]);
        animals[i] = kelompok[0][0][0];
      }
    }
    if (animals[i][0] < kelompok[0][0][0]) {
      kelompok.unshift(Array(animals[i]));
    }
    if (animals[i][0] > kelompok[0][0][0]) {
      kelompok.push(Array(animals[i]));
    } else {
    }
  }
  return kelompok;
}
// TEST CASES
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta',
'cicak']));
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda'], ['unta'] ]
