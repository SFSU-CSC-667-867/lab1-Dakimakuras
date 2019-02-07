setImmediate(() => console.log('Now'));
process.nextTick(() => console.log('Hello')); //last of current pull cycle
setImmediate(() => console.log('Now 2')); //sets to top of next pull cycle
console.log('world');