const arr = [2, 3, 5, 8, 12, 20, 25, 40, 51];

Array.prototype.customFilter = function (callback) {
  const result = [];

  for (let i = 0; i < this.length; i++) {
    const val = callback(this[i], i);

    if (val) result.push(this[i]);
  }

  return result;
};

// const evenArr= arr.filter((item,index)=> item%2 == 0);

// const oddArr= arr.filter((item,index)=> item%2 == 1);

const evenArr = arr.customFilter((item, index) => item % 2 == 0);

const oddArr = arr.customFilter((item, index) => item % 2 == 1);

console.log("originalArr", arr);

console.log("evenArr", evenArr);

console.log("oddArr", oddArr);
