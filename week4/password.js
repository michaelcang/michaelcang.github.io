function changeVocals(str) {
  var vocal = ['a','e','i','o','u','A','E','I','O','U'];
  var isVocal = false;
  var newStr = '';
  var hurufNum = 0;

  for (var i = 0; i < str.length; i++) {
    isVocal = vocal.indexOf(str[i]) !== -1;

    if (isVocal === true) {
      hurufNum = str[i].charCodeAt(0) + 1;
      newStr += String.fromCharCode(hurufNum);

    } else {newStr += str[i];}
  }
  return newStr;
}

function reverseWord(str) {
  reversedStr = '';
  for (var i = str.length - 1; i >= 0; i--) {
    reversedStr += str[i];
  }
  return reversedStr;
}

function setLowerUpperCase(str) {
  changedStr = '';
  for (var i = 0; i < str.length; i++) {
    if (str[i] === str[i].toLowerCase()) {
      changedStr += str[i].toUpperCase();
    } else if (str[i] === str[i].toUpperCase()) {
      changedStr += str[i].toLowerCase();
    } else {changedStr += str[i];}
  }
  return changedStr;
}

function removeSpaces(str) {
  arr = str.split(' ');
  noSpace = arr.join('');
  return noSpace;
}

function passwordGenerator(name) {
  if (name.length < 6) {
    return 'Minimal karakter yang diinputkan adalah 5 karakter';
  } else {
    return removeSpaces(setLowerUpperCase(reverseWord(changeVocals(name))));
  }
}

console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
console.log(passwordGenerator('Alexei')); // 'JFXFLb'
console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'
