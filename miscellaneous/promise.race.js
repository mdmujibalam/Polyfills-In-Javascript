Promise.customRace = function (promises) {
  return new Promise((resolve, reject) => {
    const n = promises.length;

    if (!Array.isArray(promises))
      throw new Error("Promise.customAny can be applied to array only");

    if (n === 0) return;

    for (let i = 0; i < n; i++) {
      Promise.resolve(promises[i])
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          reject(err);
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

Promise.customRace([
  delaySuccess(450, "msg1"),
  delaySuccess(250, "msg2"),
  delaySuccess(210, "msg3"),
  delayRejected(200, "rejectMSG"),
])
  .then((res) => console.log("res1", res))
  .catch((err) => console.log("err1", err));

Promise.customRace([
  delaySuccess(450, "msg1"),
  delaySuccess(250, "msg2"),
  delaySuccess(200, "msg3"),
  delayRejected(100, "rejectMSG"),
])
  .then((res) => console.log("res1", res))
  .catch((err) => console.log("err1", err));

Promise.customRace([
  delayRejected(450, "msg1"),
  delayRejected(250, "msg2"),
  delayRejected(100, "msg3"),
  delayRejected(200, "rejectMSG"),
])
  .then((res) => console.log("res2", res))
  .catch((err) => console.log("err2", err));

Promise.customRace([])
  .then((res) => console.log("res3", res))
  .catch((err) => console.log("err3", err));
