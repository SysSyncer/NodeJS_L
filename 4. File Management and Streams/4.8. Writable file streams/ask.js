const process = require('process');
const fs = require('fs');

let answerStream;

const questions = [
    "What is your name?",
    "What do you do for living?",
    "What do you do in your free time?"
]

let answers = [];

function ask(i=0) {
    process.stdout.write(`${questions[i]}\n`);
    process.stdout.write(`> `);
}

ask();

process.stdin.once('data', (data) => {
    let name = data.toString().trim();
    let fileName = `./${name}.md`
    if(fs.existsSync(fileName)) {
        fs.unlinkSync(fileName);
    }
    answerStream = fs.createWriteStream(fileName);

    answerStream.write(`Question Answers for ${name}\n======\n`);
})

process.stdin.on('data', (data) => {
    let answer = data.toString().trim();

    answerStream.write(`Question: ${questions[answers.length]}\n`)
    answerStream.write(`Answer: ${answer}\n`, () => {
        if(answers.length < questions.length) {
            ask(answers.length);
        } else {
            process.exit();
        }
    });

    answers.push(answer);

});

process.on('exit', () => {
    answerStream.close();
    console.log(answers);
})