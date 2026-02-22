Promise.customRace = function (promises) {
  return new Promise((resolve, reject) => {
    if (!Array.isArray(promises)) {
      throw new TypeError("Promise.race accepts only array");
    }

    const total = promises.length;

    // if (total === 0)
    //   return reject(new AggregateError([], "All promises were rejected"));

    for (let i = 0; i < total; i++) {
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

async function fetchUser(userId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      //resolve("mdmujibalam");
      reject("2000 ms error");
    }, 2000);
  });
}

async function fetchPosts(userId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(["Post1", "Post2", "Post3"]);
      //reject("3000 ms error");
    }, 3000);
  });
}

async function fetchProfile(userId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // resolve({
      //   profileId: "mdmujibalam",
      //   name: "Md Mujib Alam",
      //   address: "Chandigarh",
      // });
      reject("1500 ms error");
    }, 15000);
  });
}

async function loadDashboard(userId) {
  try {
    const res = await Promise.customRace([
      fetchUser(userId), // 2000ms
      fetchPosts(userId), // 3000ms
      fetchProfile(userId), // 1500ms
    ]);

    console.log("Dashboard loaded:", res);
  } catch (error) {
    console.error("Failed to load dashboard:", error);
  }
}

loadDashboard(123);

//Example2

// const p1 = new Promise((resolve,reject)=> setTimeout(()=>reject('p1 resolved'),1000));
// const p2 = new Promise((resolve,reject)=> setTimeout(()=>reject('p2 resolved'),200));
// const p3 = new Promise((resolve,reject)=> setTimeout(()=>reject('p3 resolved'),3000));

// Promise.any([p1,p2,p3])
//        .then((res)=>{
//         console.log(res);
//        })
//        .catch(err=>{
//         console.log("All promises were rejected");
//        })
