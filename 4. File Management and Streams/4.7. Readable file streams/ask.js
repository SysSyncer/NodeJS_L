let questions = [
    "What is your name?",
    "What would you rather be doing?",
    "What is your preferred programming language?"
];

let answers = [];

function ask(i=0) {
    process.stdout.write(`${questions[i]}\n`);
    process.stdout.write(`> `);
}

ask();

process.stdin.on('data', (data) => {
    answers.push(data.toString().trim());

    if(answers.length < questions.length) {
        ask(answers.length);
    } else {
        process.exit();
    }
})

process.on('exit', () => {
    console.log(answers);
});