Algoritma #1
------------
1. Bikin variable resultan
2. Bikin variable m dengan nilai 600
3. Bikin variable a dengan nilai 2
4. Hitung resultan = m x a
5. Tampilkan resultan

Pseudocode #1
-------------
READ resultan
READ m = 600
READ a = 2

COMPUTE resultan AS m * a
DISPLAY resultan


Algoritma #2
------------
1. Simpan "tahun" dengan angka yang dimasukkan
2. Jika "tahun" habis di bagi 4 dan tidak habis di bagi 100, atau tahun habis di bagi 4, habis di bagi 100 dan habis di bagi 400 maka tampilan "tahun kabisat", jika tidak, tampilkan "bukan tahun kabisat"

Pseudocode #2
-------------
READ and SAVE  "tahun

IF "tahun" mod 4 = 0 AND "tahun" mod 100 != 0 OR "tahun" mod 4 = 0 AND "tahun" mod 100 = 0 AND "tahun" mod 400 = 0
	DO DISPLAY  "tahun kabisat"
ELSE
	DO DISPLAY "bukan tahun kabisat"
ENDIF


Algoritma #3
------------
1. Simpan "jumlahBaju" dengan nilai 0
2. Ulangi step 3 selama "JumlahBaju" masih dibawah 20. Jika "jumlahBaju" mencapai 20 lanjut ke step 4
3. Masukkan 1 baju.
4. Tampilkan "nyalakan mesin cuci"
 
Pseudocode #3
-------------
READ "jumlahBaju" = 0

WHILE jumlahBaju" < 21
	ADD "jumlahBaju" by 1

DISPLAY "nyalakan mesin cuci"


Algoritma #4
------------
1. Simpan "jumlahMurid" dengan nilai 0
2. Ulangi step 3 selama "jumlahMurid" lebih kecil sama dengan 40
3. Jika kuku murid panjang, maka guru akan menghukum murid, jika tidak, maka guru akan memuji murid

Pseudocode #4
-------------
READ "jumlahMurid" = 0
WHILE "jumlahMurid" > 41
	IF "kuku panjang"
		DO "hukum murid"
	ELSE 
		DO "puji murid"
ENDWHILE