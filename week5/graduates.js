function graduates(students) {
  if (students.length === 0) {return [];}
  hasil = {};
  for (var i = 0; i < students.length; i++) {
    arrHasil = Object.keys(hasil);
    for (var j = 0; j <= arrHasil.length; j++) {
      if (arrHasil[j] !== students[i].class) {
        hasil[students[i].class] = new Object({});
        hasil[students[i].class] = [];
      }
    }
  }
  for (var k = 0; k < students.length; k++) {
    if (students[k].score > 75) {
      hasil[students[k].class][k] = new Object({});
      hasil[students[k].class][k].name = students[k].name;
      hasil[students[k].class][k].score = students[k].score;
      hasil[students[k].class] = hasil[students[k].class].filter(function(n) {return n !== undefined;});
    }
  }
  return hasil;
}

console.log(graduates([
  {
    name: 'Alexander',
    score: 100,
    class: 'foxes'
  },
  {
    name: 'Alisa',
    score: 76,
    class: 'wolves'
  },
  {
    name: 'Vladimir',
    score: 92,
    class: 'foxes'
  },
  {
    name: 'Albert',
    score: 71,
    class: 'wolves'
  },
  {
    name: 'Viktor',
    score: 80,
    class: 'tigers'
  }
]));
