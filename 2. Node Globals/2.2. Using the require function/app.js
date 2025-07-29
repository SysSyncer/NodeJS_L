const path = require('path');

console.log(__dirname);
console.log(__filename);

console.log(`Filename: ${path.basename(__filename)}`)

for (key in global) {
    console.log(key);
}