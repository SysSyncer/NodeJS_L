const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

module.exports = (questions, done) => {
    const answers = [];

    const questionAnswered = (answer) => {
        answers.push(answer.trim());

        if(answers.length < questions.length) {
            rl.question(questions[answers.length] + " ", questionAnswered);
        } else {
            done(answers);
        }
    }

    rl.question(questions[0] + " ", questionAnswered);
}