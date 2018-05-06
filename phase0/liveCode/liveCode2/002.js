/*

*/

function groupOddEven(students) {
  var odd = [];
  var even = [];
  for (var i = 0; i < students.length; i++) {
    if (students[i] % 2 === 0) {even.push(students[i]);
    } else {odd.push(students[i]);}
  }
  if (students.length === 0) {return '';}
  if (odd.length === 0) {return 'EVENS: ' + even.join(', ');}
  if (even.length === 0) {return 'ODDS: ' + odd.join(', ');
  } else {return 'ODDS: ' + odd.join(', ') + ' ' + 'EVENS: ' + even.join(', ');}
}

// TEST CASES
console.log(groupOddEven([1, 5, 8, 2, 3])); // "ODDS: 1, 5, 3 EVENS: 8, 2"
console.log(groupOddEven([1, 1, 1])); // "ODDS: 1, 1, 1"
console.log(groupOddEven([2, 8, 10])); // "EVENS: 2, 8, 10"
console.log(groupOddEven([2, 111])); // "ODDS: 111 EVENS: 2"
console.log(groupOddEven([])); // "
