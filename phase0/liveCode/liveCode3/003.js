/**

Product Categories
==================

Implementasikan function productCategories untuk menghitung
jumlah barang yang dimiliki oleh kategori yang tersedia

Output yang diharapkan adalah Object Literal seperti contoh berikut:
{
  <Category>: <NumberOfItems>
}
*/

function productCategories(products) {
  if (products.length === 0) {return 'empty data';}
  var hasil = {};
  var temp = [];
  var sama = false;
  var dt = [];
  for (var i = 0; i < products.length; i++) {
    sama = false;
    for (var j = 0; j < dt.length; j++) {
      if (dt[j][0] === products[i][2]) {
        sama = true;
        dt[j][1] += 1;
      }
    }
    if (sama === false) {
      temp = [products[i][2],1];
      dt.push(temp);
    }
  }
  for (var k = 0; k < dt.length; k++) {
    hasil[dt[k][0]] = dt[k][1];
  }
  return hasil;
}

//   produk = {};
//   for (var i = 0; i < products.length; i++) {
//     arrProduk = Object.keys(produk);
//     if (arrProduk.indexOf(products[i][2]) !== -1) {
//       produk[products[i][2]] = 1;
//     } else {n
//       produk[products[i][2]] += 1;
//     }
//   }
//   return produk;
// }

// Test
console.log(productCategories([
  ['Mouse Logitech', 150000, 'Mouse'],
  ['ATI Radeon', 800000, 'Graphic Card'],
  ['NVIDIA Card', 760000, 'Graphic Card'],
  ['Samsung Harddisk 1TB', 1300000, 'Harddisk'],
]));
// { Mouse: 1, 'Graphic Card': 2, Harddisk: 1 }

console.log(productCategories([
  ['Cooler Master MasterNotepal Maker', 720000, 'Cooler'],
  ['Cooler Master MasterNotepal Pro', 685000, 'Cooler'],
  ['Cooler Master Notepal Ergostand III', 540000, 'Cooler'],
  ['Cooler Master Notepal X3', 430000, 'Cooler']
]));
// { Cooler: 4 }

console.log(productCategories([]));
// Empty data
