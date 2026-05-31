Promise.customAny = function (promises) {
  return new Promise((resolve, reject) => {
    const n = promises.length;
    const result = [];
    let rejectedCount = 0;

    if (!Array.isArray(promises))
      throw new Error("Promise.customAny can be applied to array only");

    //edge case
    if (n === 0) {
      reject(new AggregateError(result, "All promises were rejected"));
      return;
    }

    for (let i = 0; i < n; i++) {
      Promise.resolve(promises[i])
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          rejectedCount++;
          result[i] = err;

          if (rejectedCount === n) {
            reject(new AggregateError(result, "All promises were rejected"));
          }
        });
    }
  });
};

const delaySuccess = (ms, msg) =>
  new Promise((resolve, reject) =>
    setTimeout(() => {
      resolve(msg);
    }, ms),
  );

const delayRejected = (ms, msg) =>
  new Promise((resolve, reject) =>
    setTimeout(() => {
      reject(msg);
    }, ms),
  );

Promise.customAny([
  delaySuccess(450, "msg1"),
  delaySuccess(250, "msg2"),
  delaySuccess(200, "msg3"),
  delayRejected(200, "rejectMSG"),
])
  .then((res) => console.log("res1", res))
  .catch((err) => console.log("err1", err));

Promise.customAny([
  delayRejected(450, "msg1"),
  delayRejected(250, "msg2"),
  delayRejected(200, "msg3"),
  delayRejected(200, "rejectMSG"),
])
  .then((res) => console.log("res2", res))
  .catch((err) => console.log("err2", err));

Promise.customAny([])
  .then((res) => console.log("res3", res))
  .catch((err) => console.log("err3", err));
