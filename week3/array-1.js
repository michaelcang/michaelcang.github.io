var input = 'hello world!';

function balikString(text) {
  var terbalik = '';
  for (var i = 1; i <= text.length; i++) {
    terbalik += text[text.length - i];
  }
  return terbalik;
}

console.log(balikString(input));
