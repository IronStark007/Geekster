const EventEmitter = require('events')
const event = new EventEmitter();

event.on('click', () => {
    console.log("I am emmited from diff file");
});

module.exports = event;