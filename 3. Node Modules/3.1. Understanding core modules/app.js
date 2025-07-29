const path = require('path');
const v8 = require('v8');

const dirUploads = path.join(__dirname, "www", "files", "uploads");
console.log(dirUploads);

console.log(v8.getHeapStatistics());