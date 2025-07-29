const events = require('events');

const emitter = new events.EventEmitter();

emitter.on('message', (user, message) => {
    console.log(`${user}: ${message}`)
})

emitter.emit('message', 'computer', 'Hello World');

emitter.on('echo', (role, input) => {
    process.stdout.write(`${role}: ${input}\n`)
})

process.stdin.on('data', (input) => {
    if (input.toString().trim() === "exit") {
        process.exit();
    }
    emitter.emit('echo', 'user', input.toString().trim())
})
