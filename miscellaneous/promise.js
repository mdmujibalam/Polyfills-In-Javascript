function customPromise(executor) {
  const PENDING = "pending";
  const FULFILLED = "fulfilled";
  const REJECTED = "rejected";

  let state = PENDING;
  let value = null;
  let successHandlers = [];
  let errorHandlers = [];

  function resolve(val) {
    if (state === PENDING) {
      state = FULFILLED;
      value = val;
      // Execute all success handlers
      successHandlers.forEach((fn) => fn(value));
    }
  }

  function reject(reason) {
    if (state === PENDING) {
      state = REJECTED;
      value = reason;
      // Execute all error handlers
      errorHandlers.forEach((cb) => cb(value));
    }
  }

  // "then" method returns a promise
  this.then = function (callback, errorCallback) {
    return new customPromise(function (resolve, reject) {
      // Handle the success callback asynchronously
      function handleSuccess() {
        try {
          const result = callback ? callback(value) : value;
          //check if the result of then is also a promise
          if (result && typeof result.then === "function") {
            result.then(resolve, reject);
          } else {
            resolve(result);
          }
        } catch (err) {
          reject(err);
        }
      }

      function handleError() {
        try {
          if (errorCallback && typeof errorCallback === "function") {
            const result = errorCallback(value);
            if (result && typeof result.then === "function") {
              result.then(resolve, reject);
            } else {
              resolve(result);
            }
          } else {
            reject(value); // Propagate rejection down chain
          }
        } catch (err) {
          reject(err);
        }
      }

      if (state === FULFILLED) {
        setTimeout(handleSuccess, 0);
      } else if (state === REJECTED) {
        // Add this!
        setTimeout(handleError, 0);
      } else if (state === PENDING) {
        successHandlers.push(handleSuccess);
        errorHandlers.push(handleError); // Add to errorHandlers too
      }
    });
  };

  // The catch method to add error handlers (syntactic sugar for .then(null, errorCallback))
  this.catch = function (errorCallback) {
    return this.then(null, errorCallback); 
  };

  try {
    executor(resolve, reject);
  } catch (error) {
    reject(error);
  }
}

//Example1

// const myPromise = new customPromise((resolve, reject) => {
//   setTimeout(() => {
//     //resolve("Resolved !!!")
//     reject("rejected !!!");
//   }, 2000);
// });

// myPromise
//          .then((res)=> console.log(`Promise Successfully ${res}`))
//          .catch((err)=> console.log(`Error occurred ${err}`))

// myPromise.then(
//   (res) => {
//     console.log(`Promise Successfully ${res}`);
//   },
//   (error) => {
//     console.log(`Error Occurred ${error}`);
//   },
// );

//Example2

async function delay() {
  return new customPromise((resolve, reject) => {
    setTimeout(() => {
      resolve("12");
      //reject("rejected !");
    }, 2000);
  });
}

async function delay2(id) {
  return new customPromise((resolve, reject) => {
    setTimeout(() => {
      resolve(`Resolved with id ${id}`);
      //reject("rejected !");
    }, 2000);
  });
}

async function callAPI() {
  try {
    const res = await delay();
    const ans = await delay2(res);
    console.log(ans);
  } catch (err) {
    console.log(`Error occurred ${err}`);
  }
}

callAPI();
