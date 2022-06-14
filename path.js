const path = require('path')

console.log(__filename);

//file nomi
console.log(path.basename(__filename));

// biz turgan file farmati qaytadi
console.log(path.extname(__filename));

// biz turgan filegacha bolgan yolni qaytaradi
console.log(path.dirname(__filename));

//biz turgan file haqida toliq malumot
console.log(path.parse(__filename));

//
console.log(path.join(__dirname, 'public', 'index.js'));