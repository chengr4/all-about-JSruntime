// get back the class
// if want custom extend from class
// otherwise just for emitting and handling events create instance
const EventEmitter = require('events')

const customEmitter = new EventEmitter()

// on: listen for an event
// emit: emit an event

// additional arguments
// built-in modules utilize it

customEmitter.on('response', (name, id) => {
  console.log(`data recieved user ${name} with id:${id}`)
})

customEmitter.on('response', (x) => {
  console.log(`some other logic here ${x}`)
})

// emitting the "response" event
customEmitter.emit('response', 'john', 34)