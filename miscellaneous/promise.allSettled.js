Promise.customAllSettled = function (promises) {
  return new Promise((resolve, reject) => {
    if (!Array.isArray(promises)) {
      throw new TypeError("Promise.allSettled accepts only array");
    }

    let completed = 0;
    let result = [];
    const total = promises.length;

    if (total === 0) return resolve(result);

    for (let i = 0; i < total; i++) {
      Promise.resolve(promises[i])
        .then((res) => {
          result[i] = { status: "fulfilled", value: res };
          completed++;

          if (completed === total) resolve(result);
        })
        .catch((err) => {
          result[i] = { status: "rejected", reason: err };
          completed++;

          if (completed === total) resolve(result);
        });
    }
  });
};

async function fetchUser(userId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("mdmujibalam");
      //    reject("2000 ms error")
    }, 2000);
  });
}

async function fetchPosts(userId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(["Post1", "Post2", "Post3"]);
      //reject("3000 ms error")
    }, 3000);
  });
}

async function fetchProfile(userId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        profileId: "mdmujibalam",
        name: "Md Mujib Alam",
        address: "Chandigarh",
      });
      //reject("1500 ms error")
    }, 1500);
  });
}

async function loadDashboard(userId) {
  try {
    const [user, posts, profile] = await Promise.customAllSettled([
      fetchUser(userId), // 2000ms
      fetchPosts(userId), // 3000ms
      fetchProfile(userId), // 1500ms
    ]);

    console.log("Dashboard loaded:", { user, posts, profile });
  } catch (error) {
    console.error("Failed to load dashboard:", error);
  }
}

loadDashboard(123);
