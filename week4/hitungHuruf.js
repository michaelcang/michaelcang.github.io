function hitungHuruf(kata) {
  var terbanyak = '';
  var counter = 0
  var jumlahSama = 0
  var samaCount = 0;
  var arr = kata.split(' ');
  for (var i = 0; i < arr.length; i++) {
    jumlahSama = 0
  	for (var j = 0; j < arr[i].length; j++) {
  	  samaCount = 0
  		for (var k = 0; k < arr[i].length; k++) {
  			if (arr[i][j] === arr [i][k]) {samaCount+=1}
  		}
  		if (samaCount > 1){jumlahSama +=1}
  	}
  if (counter < jumlahSama) {terbanyak = arr[i]; counter = jumlahSama}
  }
  return terbanyak;
}

// TEST CASES
console.log(hitungHuruf('Today, is the greatest day ever')); // greatest
console.log(hitungHuruf('I am a passionate developer')); // passionate
console.log(hitungHuruf('aku adalah anak gembala')); // adalah
console.log(hitungHuruf('rajin pangkal kaya')); // pangkal
console.log(hitungHuruf('mengayuh perahu di danau')); // danau
