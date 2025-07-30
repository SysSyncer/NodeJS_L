const fs = require('fs');

// let stream = fs.createReadStream('./chat-logs/ben.log', 'utf-8', (err, chatLog) => {
//     console.log(`File Read ${chatLog.length}`);
// })

// let data;

// stream.once('data', (chunk) => {
//     console.log(chunk)
// })

let data;

let stream = fs.createReadStream('./chat-logs/ben.log', 'utf-8');

stream.once('data', (chunk) => {
    data += chunk;
    console.log(chunk.length)
})

stream.on('end', () => {
    console.log(data.length);
})

console.log(`Reading the file`);