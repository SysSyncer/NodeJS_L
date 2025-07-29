const process = require('process');

process.stdout.write("This is a standard output statement");
process.stdout.write("\ninput: ");

process.stdin.on("data", (input) => {
    process.stdout.write(`Your input: ${input}`);
    // console.log(answer) prints Buffer value
})