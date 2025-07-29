const waitTime = 3000;

console.log(`Setting a ${waitTime/1000} second delay`);

setTimeout(() => {
    console.log(`Done`);
}, waitTime);