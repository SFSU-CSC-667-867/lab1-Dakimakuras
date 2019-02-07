// Declaring with the function keyword
function hi() {
  console.log('Say Hello');
}

hi();

// arrow functions
const arrow = (test) => {
  console.log(test);
}

arrow('hi')

// for practice

// make an arrow function with no block body
const arrowTestFunc = (somevariable) => somevariable + 1; //equal to returning somevariable+1
console.log(arrowTestFunc(41));
// make a function that returns a function
const arrayFuncReturnFunc = () => () =>console.log('this is weird');

const a = arrayFuncReturnFunc();
a();

const anotherFunc = arrayFuncReturnFunc;
anotherFunc()();