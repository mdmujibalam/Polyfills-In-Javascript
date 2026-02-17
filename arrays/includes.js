const arr = [3, 12, 7, 15, 20, 22, 12, 80, 50];

Array.prototype.customInclude = function (val, fromIndex) {
  const n = this.length;
  let startIdx;

  if (fromIndex < 0) {
    startIdx = Math.max(0, n + fromIndex);
  } else {
    startIdx = Math.min(n, fromIndex);
  }

  for (let i = startIdx; i < n; i++) {
    if (val == this[i]) return true;
  }

  return false;
};

const num1 = arr.customInclude(22, 2);
const num2 = arr.customInclude(22, -6);
const num3 = arr.customInclude(22, -10);
const num4 = arr.customInclude(22, 10);

// const num1 = arr.includes(22, 2);
// const num2 = arr.includes(22, -6);
// const num3 = arr.includes(22, -10);
// const num4 = arr.includes(22, 10);

console.log("num1", num1);
console.log("num2", num2);
console.log("num3", num3);
console.log("num4", num4);
