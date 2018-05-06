/* Encrypt me
    Kamu adalah seorang agen rahasia yang ingin mengirimkan pesan ke partnermu,untuk menmbuat kode yang kamu kirim tetap konfidental,
    kamu harus mengikuti sebuah kamus yang dimiliki oleh H8BI (Hacktiv8 Bureau of Investigation)

  Berikut adalah kamus huruf dari HBI
  huruf biasa abcdefghijklmnopqrstuvwxyz
  huruf H8BI  !@#$%^&*()-+1234567890[]{}

  Buatlah sebuah function yang mentranslate kata kata biasa, menjadi kata kata ter enkripsi menggunakan kamus H8BI!

  Note:
  - Selain karakter huruf biasa maka tidak akan di-translate

  Contoh 1:
  encrypt(dimitri) akan menghasilkan => $(1(86(

  Contoh 2:
  encrypt(@wtian) akan menghasilkan => @[8(!2

  Selamat berjuang, agen rahasia..

  RULES:
  ------
  - WAJIB MENYERTAKAN ALGORITMA/PSEUDOCODE, jika tidak ada maka dianggap tidak mengerjakan
  - DILARANG MENGGUNAKAN BUILT IN FUNCTION .indexOf !

*/

/*
Algoritma
1. buat var normal dengan nilai string huruf biasa ('abcdefghijklmnopqrstuvwxyz')
2. buat var h8bi dengan nilai string huruf kode ('!@#$%^&*()-+1234567890[]{}')
3. buat var codeWord untuk menampung nilai huruf yang sudah di encrypt dengan nilai boolean false
4. buat var noTranslate dengan nilai string kosong
5. buat looping pertama untuk nilai index input. setiap nilai input akan diloop kedua dengan setiap index 
variabel normal
5a. di dalam loop, jika nilai index input sama dengan nilai index variabel normal, maka tambahkan var 
codeWord dengan nilai index var h8bi yang index sama dengan nilai variable normal, lalu ubah noTranslate 
jadi false dan langsung akhiri loop
5b. jika tidak ubah noTranslate jadi true
5c. setelah loop 1 selesai, jika noTranslate sama dengan true maka tambahkan codeWord dengan nilai index input
6. tampilkan codeWord.
*/

function encrypt(input) {
  var normal = 'abcdefghijklmnopqrstuvwxyz';
  var h8bi =   '!@#$%^&*()-+1234567890[]{}';
  var codeWord = '';
  var noTranslate = false;
  for (var i = 0; i < input.length; i++) {
    for (var j = 0; j < normal.length; j++) {
      if (normal[j] === input[i]) {
        codeWord += h8bi[j];
        noTranslate = false;
        break;
      } else {
        noTranslate = true;
      }
    }
    if (noTranslate === true) {
      codeWord += input[i];
    }
  }
  return codeWord;
}

console.log(encrypt('dimitri')); // $(1(86(
console.log(encrypt('irsyah mardiah')); //(67{!* 1!6$(!*
console.log(encrypt('dimitr€€')); // $(1(86€€
console.log(encrypt('d!mas')); // $!1!7
console.log(encrypt('@wtian')); // @[8(!2
