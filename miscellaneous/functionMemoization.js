function memoizefun(fun) {
  const cache = {};

  return function (...args) {
    const key = JSON.stringify(args);

    if (cache[key]) return cache[key];

    return (cache[key] = fun(...args));
  };
}

function expensiveFun(a, b, c) {
  const val = a * b * c;
  let result = 0;

  for (let i = 0; i < val; i++) {
    result += i;
  }

  return result;
}

const memoizeFunWrapper = memoizefun(expensiveFun);

const time1 = new Date();
console.log(memoizeFunWrapper(100, 200, 300));
console.log(new Date() - time1);

const time2 = new Date();
console.log(memoizeFunWrapper(100, 200, 300));
console.log(new Date() - time2);
