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
  produk = {};
  for (var i = 0; i < products.length; i++) {
    arrProduk = Object.keys(produk);
    if (arrProduk.indexOf(products[i][2]) === -1) {
      produk[products[i][2]] = 1;
    } else {
      produk[products[i][2]] += 1;
    }
  }
  return produk;
}

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
