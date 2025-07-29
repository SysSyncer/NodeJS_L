const process = require('process');

const questions = [
    "What is your name?",
    "What would you rather be doing?",
    "What is your preferred programming language?"
];

function ask(i=0) {
    process.stdout.write(questions[i] + "\n");
    process.stdout.write("> ");
}

ask();
const answers = [];

process.stdin.on("data", (answer) => {
    answers.push(answer.toString().trim());

    if (answers.length < questions.length) {
        ask(answers.length);
    } else {
        process.exit();
    }
});

process.on("exit", () => {
    console.log(answers)
});