const fs = require('fs');

if(fs.existsSync('./madeup')) {
    console.log(`Folder already exists`);
} else {
    fs.mkdir("madeup", (err) => {
        if (err) {
            console.log(`Error: ${err}`);
        } else {
            console.log(`Directory created`);
        }
    })
}