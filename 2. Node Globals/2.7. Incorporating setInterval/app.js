const process = require('process');
const waitTime = 10000;
const waitInterval = 1000;
let currentTime = 0;


const incrementTime = () => {
    currentTime += waitInterval;
    process.stdout.clearLine();
    process.stdout.cursorTo(0);
    process.stdout.write(`Clock is ticking... ${currentTime/1000}\b`);
}

const interval = setInterval(incrementTime, waitInterval);

setTimeout(() => {
    clearInterval(interval);
    console.log(`TimeUp!!!`);
}, waitTime);