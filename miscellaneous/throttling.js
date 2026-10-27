
//Throttling is also a performance optimization technique where a function is executed only once during a fixed interval of time
const btn = document.getElementById("login-btn");

const callLoginAPI = (query) => {
  console.log("Login API called", query);
};

const throttle = (fun, delay) => {
  let flag = false;

  return function (...args) {
    if (flag)return;

      flag = true;
      fun(...args);
      setTimeout(() => {
        flag = false;
      }, delay);
    
  };
};

function scroll(){
  console.log("Scroll triggered");
}

const throttleScroll= throttle(scroll,1000);

throttleScroll();
throttleScroll();
throttleScroll();



