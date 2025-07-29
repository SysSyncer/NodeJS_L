let currentTime = 0;
const totalTime = 'installing...'.length * 1000 + 1000;
const incrementTime = 1000;

process.stdout.write(`installing...\n`);

const interval = setInterval(() => {
    currentTime += incrementTime;
    const p = Math.floor((currentTime/totalTime) * 100)
    process.stdout.clearLine();
    process.stdout.cursorTo(0);
    process.stdout.write(`❚`.repeat(currentTime/1000));
}, incrementTime)

setTimeout(() => {
    clearInterval(interval);
    process.stdout.clearLine();
    process.stdout.cursorTo(0);
    process.stdout.write('Completed!!!\n');
}, totalTime)