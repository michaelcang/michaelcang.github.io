// 1. looping dengan while
var counter = 0

console.log('Looping pertama');
 while (counter < 20) {
 	counter += 2
 	console.log(counter + ' - I love coding')
 }
 
 console.log('Looping kedua');
 while (counter > 0) {
 	console.log(counter + ' - I will become fullstack developer')
 	counter -= 2
 }

 // 2. looping dengan for
console.log('Looping pertama');
for (var counter2 = 1; counter2 < 21; counter2++) {
	console.log(counter2 + ' - I love coding');
}

console.log('Looping kedua');
for (var counter2 = 20; counter2 > 0; counter2--) {
	console.log(counter2 + ' - I will become fullstack developer');
}

// 3. angka ganjil dan genap
var count = 1;

while (count <= 100) {
	if (count % 2 === 1) {
		console.log('GANJIL');
	}
	else 
	  console.log('GENAP');
	count += 1;
}

// pertambahan 2
var count = 1;

while (count < 100) {
	count += 2;
	if (count % 3 === 0) {
		console.log(count + ' KELIPATAN 3');
	}
	else 
	  console.log('');
}

// pertambahan 5
var count = 1;

while (count < 100) {
	count += 5;
	if (count % 6 === 0) {
		console.log(count + ' KELIPATAN 6');
	}
	else 
	  console.log('');
}

// pertambahan 9
var count = 1;

while (count < 100) {
	count += 9;
	if (count % 10 === 0) {
		console.log(count + ' KELIPATAN 10');
	}
	else 
	  console.log('');
}







