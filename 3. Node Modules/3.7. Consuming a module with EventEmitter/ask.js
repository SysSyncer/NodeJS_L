const collectAnswers = require("./lib/collectAnswers");

const questions = [
    "What is your name?",
    "Where do you live?",
    "What are you going to do with NodeJS?"
];

const answerEvents = collectAnswers(questions, (answers) => {
    console.log(answers);
    process.exit();
});

answerEvents.on('answer', (answer) => {
    console.log(`Your answer is '${answer}'`);
})
