Promise.customAll = function (promises) {
  return new Promise((resolve, reject) => {
    if (!Array.isArray(promises)) {
      throw new TypeError("Promise.all accepts only array");
    }

    let completed = 0;
    let result = [];
    const total = promises.length;

    if (total === 0) return resolve(result);

    for (let i = 0; i < total; i++) {
      Promise.resolve(promises[i])
        .then((res) => {
          result[i] = res;
          completed++;

          if (completed === total) resolve(result);
        })
        .catch((err) => reject(err));
    }
  });
};

async function fetchUser(userId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("mdmujibalam");
       //reject("2000 ms error")
    }, 2000);
  });
}

async function fetchPosts(userId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(["Post1", "Post2", "Post3"]);
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
    const [user, posts, profile] = await Promise.all([
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
