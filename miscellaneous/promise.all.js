Promise.customAll = function (promises) {
  return new Promise((resolve, reject) => {
    if (!Array.isArray(promises))
      throw new Error("Promise.customAll is only applicable to Array");

    const n = promises.length;
    const result = new Array(n);
    let count = 0;

    //edge case
    if (n === 0) {
      resolve([]);
      return;
    }

    for (let i = 0; i < n; i++) {
      Promise.resolve(promises[i])
        .then((val) => {
          result[i] = val;
          count++;

          if (count === n) resolve(result);
        })
        .catch((err) => reject(err));
    }
  });
};

const delayResolved = (ms, message) =>
  new Promise((resolve, reject) =>
    setTimeout(() => {
      resolve(message);
    }, ms),
  );

const delayRejected = (ms, message) =>
  new Promise((resolve, reject) =>
    setTimeout(() => {
      reject(message);
    }, ms),
  );

//Test Case1
Promise.customAll([
  delayResolved(400, "successMsg1"),
  delayResolved(250, "successMsg2"),
  delayResolved(200, "successMsg3"),
])
  .then((res) => console.log("res1", res))
  .catch((err) => console.log("err1", err));

//Test Case2
Promise.customAll([
  delayResolved(400, "successMsg1"),
  "val",
  delayResolved(200, "successMsg3"),
])
  .then((res) => console.log("res2", res))
  .catch((err) => console.log("err2", err));

//Test Case3
Promise.customAll([
  delayResolved(400, "successMsg1"),
  Promise.reject("errMsg2"),
  delayResolved(200, "successMsg3"),
])
  .then((res) => console.log("res3", res))
  .catch((err) => console.log("err3", err));

//Test Case4
Promise.customAll([])
  .then((res) => console.log("res4", res))
  .catch((err) => console.log("err4", err));
