var input = ['0001', 'Roman Alamsyah ',
'Bandar Lampung', '21/05/1989','Membaca'];

function dataHandling2(text) {
  // 1. splice
  text.splice(1, 2, text[1] + 'Elsharawy',
  'Provinsi ' + text[2]);
  text.splice(4, 1, 'Pria', 'SMA Internasional Metro');
  console.log(text);

  // 2. ambil bulan
  tanggal = text[3].split('/');
  namaBulan = '';
  switch (tanggal[1]) {
  case '01':
    namaBulan = 'Januari';
  break;
  case '02':
    namaBulan = 'Febuari';
  break;
  case '03':
    namaBulan = 'Maret';
  break;
  case '04':
    namaBulan = 'April';
  break;
  case '05':
    namaBulan = 'Mei';
  break;
  case '06':
    namaBulan = 'Juni';
  break;
  case '07':
    namaBulan = 'Juli';
  break;
  case '08':
    namaBulan = 'Agustus';
  break;
  case '09':
    namaBulan = 'September';
  break;
  case '10':
    namaBulan = 'Oktober';
  break;
  case '11':
    namaBulan = 'November';
  break;
  case '12':
    namaBulan = 'Desember';
  break;
}
  console.log(namaBulan);

  // 3. sort tanggal
  tanggalNumber = tanggal.map(Number);
  tanggalNumber.sort(function(value1, value2) {
    return value1 < value2;});
  console.log(tanggalNumber);

  // 4. join tanggal
  tanggal = tanggal.join('-');
  console.log(tanggal);

  // 5. limit 15 karakter
  irisanText = text[1].slice(0, 14);
  console.log(irisanText);

}

dataHandling2(input);

/**
 * keluaran yang diharapkan (pada console)
 *
 * ["0001", "Roman Alamsyah Elsharawy",
 "Provinsi Bandar Lampung", "21/05/1989", "Pria",
 "SMA Internasional Metro"]
 * Mei
 * [1989, 21, 05]
 * 21-05-1989
 * Roman Alamsyah
 */
