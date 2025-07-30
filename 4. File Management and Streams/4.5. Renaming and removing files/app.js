const fs = require('fs');

if(!fs.existsSync('./sample.md')) {
    fs.writeFileSync(__dirname+'/sample.md', 'This file is to be deleted by unlinkSync method');
} else {
    console.log(`sample.md file is about to get deleted in 5 seconds`);
    setTimeout(() => {
        // fs.unlinkSync('./sample.md')
        fs.unlink('./sample.md', (err) => console.log(err?.message)); // asynchronous
    }, 5000);
} 

if(fs.existsSync('./config.js')) {
    fs.renameSync('./config.js', './lib/config.js' 
    );
} else {
    fs.renameSync('./lib/config.js', './config.js');
}

fs.rename('./lib/notes.md', './notes.md', (err) => {
    if(err) console.log(`Files doesn't exists`)
    else console.log('Notes markdown file moved');
})

