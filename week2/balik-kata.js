function balikKata(kata) {
  var terbalik = '';
  for (var i = 1; i <= kata.length; i++) {
  	terbalik += kata[kata.length - i];
  }
  return terbalik;
}

// TEST CASES
console.log(balikKata('Hello World and Coders')); // sredoC dna dlroW olleH
console.log(balikKata('John Doe')); // eoD nhoJ
console.log(balikKata('I am a bookworm')); // mrowkoob a ma I
console.log(balikKata('Coding is my hobby')); // ybboh ym si gnidoC
console.log(balikKata('Super')); // repuS