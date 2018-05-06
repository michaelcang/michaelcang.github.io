var tanggal = 21;
var bulan = 13;
var tahun = 1990;

var namaBulan = '';

switch (bulan) {
case 1:
  namaBulan = 'Januari';
  break;
case 2:
  namaBulan = 'Febuari';
  break;
case 3:
  namaBulan = 'Maret';
  break;
case 4:
  namaBulan = 'April';
  break;
case 5:
  namaBulan = 'Mei';
  break;
case 6:
  namaBulan = 'Juni';
  break;
case 7:
  namaBulan = 'Juli';
  break;
case 8:
  namaBulan = 'Agustus';
  break;
case 9:
  namaBulan = 'September';
  break;
case 10:
  namaBulan = 'Oktober';
  break;
case 11:
  namaBulan = 'November';
  break;
case 12:
  namaBulan = 'Desember';
  break;
default:
  console.log('invalid bulan');
  break;
}

console.log(tanggal + ' ' + namaBulan + ' ' + tahun);
