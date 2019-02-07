// there are 3 basic ways to declare variables in js

// Var, but don't use this one anymore
var test =  3;

// let, is like var, but block scoped, and not allowed to re-declare
let hello = 'world'; // Notice strings use single quotes
hello = 5; // changing the type of variable is okay, in this case string to number.

// const is a constant
const iAmAConstant = 9;

// objects
// variables can also be objects
const obj = {};

// objects can dynamically add and remove properties
obj.a = 9;

// For Practice

// declare an object with an object as a property
const testVar={
    y: 8,
    x: 32,
    o: {
        a: 'hello world',
        b: 'hi',
    },
};
console.log(testVar);
// delete a property
delete testVar.y;
console.log(testVar);
// change a property
testVar.x='changed';
console.log(testVar)
//add a property
testVar.new=16;
console.log(testVar);