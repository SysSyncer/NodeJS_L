const fs = require('fs');

if(fs.existsSync('./accounts/logs.js')) {
    fs.renameSync('./accounts/logs.js', './assets/logs.js');
    console.log(`logs.js moved from accounts to assets`);
} else {
    fs.renameSync('./assets/logs.js', './accounts/logs.js');
    console.log(`logs.js moved from assets to accounts`);
}

if(fs.existsSync('./sample')) {
    fs.rmdir('./sample', (err) => {
        if (err) console.log(err);
    });
} else {
    fs.mkdirSync('./sample');
}

// fs.readdirSync('./accounts').forEach((item) => {
//     fs.renameSync(`./accounts/${item}`, `./library/${item}`);
// });
