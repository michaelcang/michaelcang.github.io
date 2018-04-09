function arrayMerge(firstData, secondData) {
  var sama = 0;
  for (var i = 0; i < secondData.length; i++) {
    sama = 0;
    for (var j = 0; j < firstData.length; j++) {
      if (secondData[i] === firstData[j]) {
        sama += 1;
      }
    }
    if (sama === 0) {firstData.push(secondData[i]);}
  }
  return firstData;
}

// Test cases

console.log(arrayMerge(['king', 'devil jin', 'akuma'], ['eddie', 'steve', 'geese']));
// ['king', 'devil jin', 'akuma', 'eddie', 'steve', 'geese']

console.log(arrayMerge(['sergei', 'jin'], ['jin', 'steve', 'bryan']));
// ['sergei', 'jin', 'steve', 'bryan']

console.log(arrayMerge(['alisa', 'yoshimitsu'], ['devil jin', 'yoshimitsu', 'alisa', 'law']));
// ['alisa', 'yoshimitsu', 'devil jin', 'law']

console.log(arrayMerge([], ['devil jin', 'sergei']));
// ['devil jin', 'sergei']

console.log(arrayMerge(['hwoarang'], []));
// ['hwoarang']

console.log(arrayMerge([], []));
// []
