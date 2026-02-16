const arr = [2, 3, 5, 10, 20];

Array.prototype.customReduce = function (callback, initialVal = 0) {
  let val = initialVal;

  for (let i = 0; i < this.length; i++) {
    val = callback(val, this[i], i , this);
  }

  return val;
};

const sum = arr.customReduce((acc, curr) => acc + curr, 10);

//const sum = arr.reduce((acc,curr, index, arr)=>acc+curr,0);

console.log("original Arr", arr);
console.log("sum==>", sum);
