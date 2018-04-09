function ubahHuruf(kata) {
  var kataBaru = '';
  var hurukNum = 0;
  for (var i = 0; i < kata.length; i++) {
    if (kata[i] === 'z') {kataBaru += 'a';
    } else {hurufNum = kata[i].charCodeAt(0) + 1;
      kataBaru += String.fromCharCode(hurufNum);}
  }
  return kataBaru;
}

// TEST CASES
console.log(ubahHuruf('wow')); // xpx
console.log(ubahHuruf('developerz')); // efwfmpqfs
console.log(ubahHuruf('javascript')); // kbwbtdsjqu
console.log(ubahHuruf('keren')); // lfsfo
console.log(ubahHuruf('semangat')); // tfnbohbu
