// Async Pipe and Compose

const add5 = async (x) => x + 5;
const multiplyBy4 = async (x) => x * 4;
const subtractBy3 = async (x) => x - 3;

const compose =
  (...functions) =>
  (input) => {
    return functions.reduceRight(
      (acc, fn) => acc.then(fn),
      Promise.resolve(input),
    );
  };

const pipe = 
  (...functions) =>
  (input) => {
    return functions.reduce((acc, fn) => acc.then(fn), Promise.resolve(input));
  };


 // This is incorrect because compose returns a promise and we cannot use await outside of an async function
// const res= await compose(subtractBy3, multiplyBy4, add5)(12);
// console.log(res);

//Either use .then() or wrap it in an async function to use await

compose(subtractBy3, multiplyBy4, add5)(12)
.then((res) => console.log(res));


(async ()=>{
    const res2 = await pipe(subtractBy3, multiplyBy4, add5)(12);
    console.log(res2);
})();