const promiseExample = () => {
  return new Promise((resolve) => {
    setTimeout(() => { resolve('Hello') }, 3000);
  });
};

promiseExample()
  .then((res) => res+ 'World')
  .then((res) => console.log(res))
  .catch((e) => console.log('I am an error sadBois')); //catches errors up to current line

console.log('hi');