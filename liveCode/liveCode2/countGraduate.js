/*Algoritma
1. Buat wadah untuk jumlah orang yang lulus yang berjumlah 0
2. Cek data nilai satu per satu menggunakan loop
3. Jika nilai diatas sama dengan 75, tambah lulus dengan 1, jika dibawah lewati.
4. Setelah looping selesai.
4a. Jika nilai lulus sama dengan nilai panjang array, return 'semua orang lulus'.
4b. Jika nilai lulus lebih besar dari 0, return lulus + ' orang lulus'
4c. Jika nilai lulus sama dengan 0, return 'tidak ada yang lulus'


*/

function graduatesCount(scores) {
  var lulus = 0;
  if (scores.length === 0) {return 'data kosong';}
  for (var i = 0; i < scores.length; i++) {
    if (scores[i] >= 75) {
      lulus += 1;
    }
  }
  if (lulus === scores.length) {return 'semua orang lulus';}
  if (lulus > 0) {return lulus + ' orang lulus';} else {return 'tidak ada yang lulus';}
}





// Test cases

console.log(graduatesCount([76, 77, 30, 80, 10, 20])); // 3 orang lulus
console.log(graduatesCount([100, 100, 80, 74, 60, 87])); // 3 orang lulus
console.log(graduatesCount([90, 100, 85, 79, 80, 74])); // 5 orang lulus
console.log(graduatesCount([100, 100, 100, 85, 90])); // Semua orang lulus
console.log(graduatesCount([0, 0, 0, 0, 0])); // Tidak ada yang lulus
console.log(graduatesCount([])); // Data kosong
