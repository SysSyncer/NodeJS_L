const readline = require("readline");
const {EventEmitter} = require("events");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

module.exports = (questions, done) => {
    const answers = [];
    const emitter = new EventEmitter();

    const questionAnswered = (answer) => {
        answers.push(answer.trim());
        emitter.emit('answer', answer)
        if(answers.length < questions.length) {
            rl.question(questions[answers.length] + " ", questionAnswered);
        } else {
            done(answers);
        }
    }

    rl.question(questions[0] + " ", questionAnswered);
    return emitter;
}