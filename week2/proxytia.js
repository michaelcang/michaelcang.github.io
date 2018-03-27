var nama;
var peran;

nama = prompt("Siapa nama anda?");
peran = prompt("Apakah peran anda?");

if (nama === '' && peran === '') {
	console.log('Nama harus diisi!');
}

if (nama != '' && peran === '') {
	console.log('Halo ' + nama + 
		', pilih peranmu untuk memulai game!');
}

if (peran === 'Ksatria') {
	console.log('Selamat datang di Dunia Proxytia, '
		 + nama);
	console.log('Halo ' + peran + ' ' + nama +
		', kamu dapat menyerang dengan senjatamu!');

}

if (peran === 'Tabib') {
	console.log('Selamat datang di Dunia Proxytia, '
		 + nama);
	console.log('Halo ' + peran + ' ' + nama +
		', kamu akan membantu temanmu yang terluka.');

}

if (peran === 'Penyihir') {
	console.log('Selamat datang di Dunia Proxytia, '
		 + nama);
	console.log('Halo ' + peran + ' ' + nama +
		', ciptakan keajaiban yang membantu kemenanganmu!');

}

else {
	console.log('Peran cuma ada 3 yaitu: Ksatria, Tabib, dan Penyihir')
}