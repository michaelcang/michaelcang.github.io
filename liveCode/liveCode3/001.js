/**

Drone Position
==============

Implementasikan function dronePosition untuk mencari koordinat drone yang
ada di dalam `grid`. Drone akan direpresentasikan sebagai karakter '*'.

Format koordinat: <baris>, <kolom>

# Asumsi:
- Drone ('*') selalu berjumlah 1, tidak mungkin ada drone lain

Contoh input ada di test case.

# Aturan coding:
- WAJIB menyertakan algoritma / pseudocode

*/

/*
Pseudocode
READ drone = ''
FOR length of grid
  FOR length of indexes of grid
    IF the value of indexes of index of grid is equal to '*'
      COMPUTE drone = index of grid(row) + ', ' + index of index of grid(column)
    ENDIF
  ENDFOR
ENDFOR
IF the value of drone = ''
DISPLAY no drone
ENDIF
DISPLAY drone

*/

function dronePosition (grid) {
  var drone = '';
  for (var i = 0; i < grid.length; i++) {
    for (var j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === '*') {
        drone = i + ', ' + j;
      }
    }
  }
  if (drone === '') {
    return 'No drone';
  }
  return drone;
}

console.log(dronePosition([
  ['', '', ''],
  ['', '', ''],
  ['', '', '*']
])); // 2, 2

console.log(dronePosition([
  ['', '', ''],
  ['', '*', ''],
  ['', '', '']
])); // 1, 1

console.log(dronePosition([
  ['', '', '*'],
  ['', '', ''],
  ['', '', '']
])); // 0, 2

console.log(dronePosition([
  ['', '', ''],
  ['', '', ''],
  ['', '', '']
])); // No drone
