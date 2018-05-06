function naikAngkot(arrPenumpang) {
  rute = ['A', 'B', 'C', 'D', 'E', 'F'];
  if (arrPenumpang.length === 0) {return [];}
  penumpang = [];
  for (var i = 0; i < arrPenumpang.length; i++) {
    penumpang[i] = new Object({});
    penumpang[i].penumpang = arrPenumpang[i][0];
    for (var j = 0; j < rute.length; j++) {
      if (rute[j] === arrPenumpang[i][1]) {
        penumpang[i].naikDari = j;
      }
      if (rute[j] === arrPenumpang[i][2]) {
        penumpang[i].tujuan = j;
      }
    }
    penumpang[i].bayar = (penumpang[i].tujuan - penumpang[i].naikDari) * 2000;
    penumpang[i].naikDari = arrPenumpang[i][1];
    penumpang[i].tujuan = arrPenumpang[i][2];
  }
  return penumpang;
}

//TEST CASE
console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
// [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
//   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]

console.log(naikAngkot([])); //[]
