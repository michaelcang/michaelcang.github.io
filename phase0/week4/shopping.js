function shoppingTime(memberId, money) {
  if (memberId === '' || memberId === undefined) {return 'Mohon maaf, toko X hanya berlaku untuk member saja';
  } else if (money < 50000) {return 'Mohon maaf, uang tidak cukup';}
  strMoney = money;
  list = [];
  if (money >= 1500000) {list.push('Sepatu Stacattu'); money -= 1500000;}
  if (money >= 500000) {list.push('Baju Zoro'); money -= 500000;}
  if (money >= 250000) {list.push('Baju H&N'); money -= 250000;}
  if (money >= 175000) {list.push('Sweater Uniklooh'); money -= 175000;}
  if (money >= 50000) {list.push('Casing Handphone'); money -= 50000;}
  change = money;
  objek = {
    memberId: memberId,
    money: strMoney,
    listPurchased: list,
    changeMoney: change,
  };
  return objek;
}

// TEST CASES
console.log(shoppingTime('1820RzKrnWn08', 2475000));
//{ memberId: '1820RzKrnWn08',
//  money: 2475000,
//  listPurchased:
//   [ 'Sepatu Stacattu',
//     'Baju Zoro',
//     'Baju H&N',
//     'Sweater Uniklooh',
//     'Casing Handphone' ],
//  changeMoney: 0 }
console.log(shoppingTime('82Ku8Ma742', 170000));
//{ memberId: '82Ku8Ma742',
// money: 170000,
// listPurchased:
//  [ 'Casing Handphone' ],
// changeMoney: 120000 }
console.log(shoppingTime('', 2475000)); //Mohon maaf, toko X hanya berlaku untuk member saja
console.log(shoppingTime('234JdhweRxa53', 15000)); //Mohon maaf, uang tidak cukup
console.log(shoppingTime()); ////Mohon maaf, toko X hanya berlaku untuk member saja
