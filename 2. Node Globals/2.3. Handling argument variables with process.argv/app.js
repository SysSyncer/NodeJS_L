const process = require('process');

function grab(flag) {
    const value = process.argv[process.argv.indexOf(flag) + 1];
    return value;
}

let user = grab("--user");
let greeting = grab("--greeting");

console.log(`User: ${user}\nGreeting: ${greeting}`);