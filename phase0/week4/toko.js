function countProfit(shoppers) {
  let list = [['Sepatu Stacattu', 1500000, 10],
                     ['Baju Zoro', 500000, 2],
                     ['Sweater Uniklooh', 175000, 1]
                   ];

  // you can only write your code here!
  if (shoppers.length === 0) {return [];}
  var item1 = {
    product: list[0][0],
    shoppers: [],
    leftOver: list[0][2],
    totalProfit: 0
  };
  var item2 = {
    product: list[1][0],
    shoppers: [],
    leftOver: list[1][2],
    totalProfit: 0
  };
  var item3 = {
    product: list[2][0],
    shoppers: [],
    leftOver: list[2][2],
    totalProfit: 0
  };
  var hasil = [item1, item2, item3];
  for (var i = 0; i < shoppers.length; i++) {
    for (var j = 0; j < list.length; j++) {
      if (shoppers[i].product === list[j][0] && shoppers[i].amount <= list[j][2]) {
        if (j === 0) {
          item1.shoppers.push(shoppers[i].name);
          list[j][2] -= shoppers[i].amount;
          item1.leftOver -= shoppers[i].amount;
          item1.totalProfit += shoppers[i].amount * list[0][1];
        }
        if (j === 1) {
          item2.shoppers.push(shoppers[i].name);
          list[j][2] -= shoppers[i].amount;
          item2.leftOver -= shoppers[i].amount;
          item2.totalProfit += shoppers[i].amount * list[1][1];
        }
        if (j === 2) {
          item3.shoppers.push(shoppers[i].name);
          list[j][2] -= shoppers[i].amount;
          item3.leftOver -= shoppers[i].amount;
          item3.totalProfit += shoppers[i].amount * list[2][1];
        }
      }
    }
  }
  return hasil;
}

// TEST CASES
console.log(countProfit([{name: 'Windi', product: 'Sepatu Stacattu', amount: 2},
{name: 'Vanessa', product: 'Sepatu Stacattu', amount: 3},
{name: 'Rani', product: 'Sweater Uniklooh', amount: 2}]));
//[ { product: 'Sepatu Stacattu',
//   shoppers: [ 'Windi', 'Vanessa' ],
//   leftOver: 5,
//   totalProfit: 7500000 },
// { product: 'Baju Zoro',
//   shoppers: [],
//   leftOver: 2,
//   totalProfit: 0 },
// { product: 'Sweater Uniklooh',
//   shoppers: [],
//   leftOver: 1,
//   totalProfit: 0 } ]

console.log(countProfit([{name: 'Windi', product: 'Sepatu Stacattu', amount: 8},
{name: 'Vanessa', product: 'Sepatu Stacattu', amount: 10},
{name: 'Rani', product: 'Sweater Uniklooh', amount: 1},
{name: 'Devi', product: 'Baju Zoro', amount: 1},
{name: 'Lisa', product: 'Baju Zoro', amount: 1}]));
// [ { product: 'Sepatu Stacattu',
//     shoppers: [ 'Windi' ],
//     leftOver: 2,
//     totalProfit: 12000000 },
//   { product: 'Baju Zoro',
//     shoppers: [ 'Devi', 'Lisa' ],
//     leftOver: 0,
//     totalProfit: 1000000 },
//   { product: 'Sweater Uniklooh',
//     shoppers: [ 'Rani' ],
//     leftOver: 0,
//     totalProfit: 175000 } ]
console.log(countProfit([{name: 'Windi', product: 'Sepatu Naiki', amount: 5}]));
// [ { product: 'Sepatu Stacattu',
//     shoppers: [],
//     leftOver: 10,
//     totalProfit: 0 },
//   { product: 'Baju Zoro',
//     shoppers: [],
//     leftOver: 2,
//     totalProfit: 0 },
//   { product: 'Sweater Uniklooh',
//     shoppers: [],
//     leftOver: 1,
//     totalProfit: 0 } ]
console.log(countProfit([])); //[]
