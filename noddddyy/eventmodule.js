const { log } = require('node:console');
const EventEmitter = require('node:events');

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();
myEmitter.on('waterfull', () => {
  console.log('shut upp u motor');
  setTimeout(() =>{
    console.log("please shut uppps its a genral reminderrr..!");
  },3000);
});
myEmitter.emit('event');