function retryPromiseNTimes(promiseFn, retries = 3) {
  return new Promise((resolve, reject) => {
    promiseFn()
      .then(resolve)
      .catch((err) => {
        if (retries > 0) {
          console.log("Retrying..., retries left", retries - 1);
          retryPromiseNTimes(promiseFn, retries - 1)
            .then(resolve)
            .catch(reject);
        } else {
          reject(err);
        }
      });
  });
}

const buggyPromise = () => {
  return new Promise((resolve, reject) => {
    const value = Math.random() - 0.4;

    setTimeout(() => {
      if (value > 0.5) {
        resolve("resolved");
      } else {
        reject("rejected");
      }
    }, 1000);
  });
};

retryPromiseNTimes(buggyPromise, 4)
  .then((res) => console.log("Success", res))
  .catch((err) => console.log("Failed", err));
