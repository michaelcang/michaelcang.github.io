function highestScore(students) {
  if (students.length === 0) {return [];}
  hasil = {};
  for (var i = 0; i < students.length; i++) {
    arrHasil = Object.keys(hasil);
    for (var j = 0; j <= arrHasil.length; j++) {
      if (arrHasil[j] !== students[i].class) {
        hasil[students[i].class] = new Object({});
        hasil[students[i].class].name = students[i].name;
        hasil[students[i].class].score = students[i].score;
      }
    }
  }
  for (var k = 0; k < students.length; k++) {
    if (hasil[students[k].class].score < students[k].score) {
      hasil[students[k].class].name = students[k].name;
      hasil[students[k].class].score = students[k].score;
    }
  }
  return hasil;
}

// TEST CASE
console.log(highestScore([
  {
    name: 'Dimitri',
    score: 90,
    class: 'foxes'
  },
  {
    name: 'Alexei',
    score: 85,
    class: 'wolves'
  },
  {
    name: 'Sergei',
    score: 74,
    class: 'foxes'
  },
  {
    name: 'Anastasia',
    score: 78,
    class: 'wolves'
  }
]));

// {
//   foxes: { name: 'Dimitri', score: 90 },
//   wolves: { name: 'Alexei', score: 85 }
// }

console.log(highestScore([
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

// {
//   foxes: { name: 'Alexander', score: 100 },
//   wolves: { name: 'Alisa', score: 76 },
//   tigers: { name: 'Viktor', score: 80 }
// }

console.log(highestScore([])); //{}
