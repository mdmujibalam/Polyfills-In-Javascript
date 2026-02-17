const arr = [2, 8, 10, 16, 21, 27, 30, 50];

Array.prototype.customFind = function (callback) {
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) {
      return this[i];
    }
  }

  return undefined;
};

const firstOddNumber = arr.customFind((item, index, arr) => item % 2 == 1);
//const firstOddNumber = arr.find((item)=> item%2==1);

console.log("originalArray", arr);
console.log("firstOddNumber", firstOddNumber);
