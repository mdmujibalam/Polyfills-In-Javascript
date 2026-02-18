const btn = document.getElementById("login-btn");

const callLoginAPI = (query) => {
  console.log("Login API called", query);
};

const throttle = (fun, delay) => {
  let flag = false;

  return function (...args) {
    if (!flag) {
      flag = true;
      fun(...args);
      setTimeout(() => {
        flag = false;
      }, delay);
    }
  };
};

const throttleWrapper = throttle(callLoginAPI, 2000);

btn.addEventListener("click", () =>
  throttleWrapper({ name: "Mujib", password: "1234" }),
);

// btn.addEventListener("click", ()=>callLoginAPI({"name":"Mujib", "password":"1234"}));
