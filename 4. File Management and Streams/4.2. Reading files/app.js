const fs = require('fs');

let content = fs.readFileSync('./file.txt', 'utf-8');

console.log(content)