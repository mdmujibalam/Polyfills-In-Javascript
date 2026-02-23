Array.prototype.customFlat = function (depth = 1) {
  const result = [];

  function flatten(arr, currentDepth) {
    //base case
    if (currentDepth === 0) {
      result.push(...arr);
      return;
    }

    for (let i = 0; i < arr.length; i++) {
      if (Array.isArray(arr[i])) {
        flatten(arr[i], currentDepth - 1);
      } else {
        result.push(arr[i]);
      }
    }
  }

  flatten(this, Math.max(0, depth));
  return result;
};

const arr = [2, 5, [10, 20], 9, [4, 6, [8, 61, [100]]], 98];
const arr2 = [2, 5, 10, 20, 9, 4, 6, [8, 61, 100], 98];

const flattenedArr = arr.customFlat(3);

console.log(flattenedArr);
