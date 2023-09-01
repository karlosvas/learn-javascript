"use strict";

// Cuando sabemos que hay ciertos datos que se van a repetir es necesario trabajarse con memorizers.
let cache = [];
const memoizer = (func) => {
  return (e) => {
    const index = e.toString();
    if (cache[index] == undefined) {
      cache[index] = func(e);
    }
    return cache[index];
  };
};
const hacerAlgo = (num) => {
  const a = 20;
  const b = 12;
  let c = 0;
  for (let i = num - 1; i >= 0; i--) {
    for (let j = i - 1; j >= 0; j--) {
      c += a * b;
    }
  }
  return c;
};

const ejecutarCode = (func) => {
  const date = new Date();
  func;
  console.log(hacerAlgo(60000));
  console.log(new Date() - date);
};

const memo = memoizer(hacerAlgo);

console.log("Con memo");
const dateM1 = new Date();
memo(9000);
console.log(new Date() - dateM1);
const dateM2 = new Date();
memo(9000);
console.log(new Date() - dateM2);

console.log("Sin memo");
ejecutarCode(hacerAlgo(9000));
ejecutarCode(hacerAlgo(9000));
