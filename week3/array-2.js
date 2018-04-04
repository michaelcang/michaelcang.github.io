var input = [
                ['0001', 'Roman Alamsyah', 'Bandar Lampung', '21/05/1989',
                'Membaca'],
                ['0002', 'Dika Sembiring', 'Medan', '10/10/1992',
                'Bermain Gitar'],
                ['0003', 'Winona', 'Ambon', '25/12/1965', 'Memasak'],
                ['0004', 'Bintang Senjaya', 'Martapura', '6/4/1970', 'Berkebun']
            ];

var id = 0;
function dataHandling() {
  while (id < input.length) {
    for (var i = 0; i < input[id].length; i++) {
      if (i === 0) {console.log('Nomor ID: ' + input[id][i]);}
      if (i === 1) {console.log('Nama Lengkap: ' + input[id][i]);}
      if (i === 2) {console.log('TTL: ' + input[id][i]);}
      if (i === 3) {console.log('Hobi: ' + input[id][i]);}

    }
    console.log('');
    id++;
  }
}

dataHandling();
