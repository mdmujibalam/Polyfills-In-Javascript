Promise.customAllSettled = function (promises) {
  return new Promise((resolve, reject) => {
    if (!Array.isArray(promises))
      throw new Error("Promse.customAllSettled is not an array");

    const n = promises.length;
    const result = [];
    let completedPromises = 0;

    //edge case
    if (n === 0) {
      resolve([]);
      return;
    }

    for (let i = 0; i < n; i++) {
      Promise.resolve(promises[i])
        .then((val) => {
          result[i] = { status: "fulfilled", value: val };
          completedPromises++;

          if (completedPromises === n) resolve(result);
        })
        .catch((err) => {
          result[i] = { status: "rejected", reason: err };
          completedPromises++;

          if (completedPromises === n) resolve(result);
        });
    }
  });
};

const delaySuccess = (ms, msg) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(msg);
    }, ms);
  });
};

const delayReject = (ms, msg) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(msg);
    }, ms);
  });
};

Promise.customAllSettled([
  delaySuccess(400, "msg1"),
  delayReject(200, "err1"),
  delaySuccess(300, "msg2"),
])
  .then((res) => console.log("res1", res))
  .catch((err) => console.log("err1", err));

Promise.customAllSettled([])
  .then((res) => console.log("res2", res))
  .catch((err) => console.log("err2", err));

Promise.customAllSettled([
  delaySuccess(400, "msg1"),
  "hello",
  delaySuccess(300, "msg2"),
])
  .then((res) => console.log("res3", res))
  .catch((err) => console.log("err3", err));

Promise.customAllSettled([delayReject(200, "err1"), delayReject(250, "err2")])
  .then((res) => console.log("res4", res))
  .catch((err) => console.log("err4", err));
