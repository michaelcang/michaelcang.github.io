/**

Buatlah sebuah algoritma untuk kasus berikut:

Sebuah game memiliki hero dan hero tersebut memiliki atribut level dan damage.
Damage dari hero tergantung dari levelnya, perhitungan damage akan mengikuti aturan berikut:
- Damage Hero Level 1-15: level dikalikan 2
- Damage Hero Level 16-20: (level dikalikan 2) + 5
- Damage Hero Level 21-25: (level dikalikan 2) + 10
- Selain level yang disebutkan di atas, tampilkan "Invalid level" dan hentikan program

Lalu tampilkan damage hero berdasarkan levelnya sekarang

*/

/*
1. Buat variable level dengan nilai level
2. Buat variable jumlah damage dengan nilai 0
3a. Jika level lebih besar sama dengan 1 dan lebih kecil sama dengan 15, maka damage = level * 2.
3b. Jika level lebih besar sama dengan 16 dan lebih kecil sama dengan 20, maka damage = (level * 2) + 5.
3c. Jika level lebih besar sama dengan 20 dan lebih kecil sama dengan 25, maka damage = (level * 2) + 10.
4a. Jika level lebih besar dari 0 dan lebih kecil sama dengan 25, maka tampilkan variable damage
4b. Jika tidak, tampilkan "Invalid level".
*/
