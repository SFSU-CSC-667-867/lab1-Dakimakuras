// Arrays in js

// arrays can be delared explicitly
const array = [9, 3, 4];

// or with new keyword
const anotherArray = new Array(5);

// access array elements
console.log(array[0]);

// change elements
array[1] = 'hello';

// for practice

// use forEach
const arrayTest = [9, 3, 4];
console.log(arrayTest);
arrayTest.forEach((n) => {
    console.log(n);
});
// use map
const newArr=arrayTest.map((i) => i+1); //(i => i+1) when only 1 number
console.log(newArr);
// use pop
newArr.pop();
console.log(newArr);
// use push
newArr.push(18);
console.log(newArr);
// use shift
newArr.shift();
console.log(newArr);
// use unshift
newArr.unshift(64);
console.log(newArr);
// use filter