function groupAnimals(animals) {
  var kelompok = [[]];
  animals.sort();
  kelompok[0].push(animals[0]);
  for (var i = 1; i < animals.length; i++) {
    if (animals[i][0] === kelompok[0][0][0]) {
      kelompok[0][0].push(animals[i]);

    }
  }

  return animals;
}

// TEST CASES
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak']));
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda'], ['unta'] ]
