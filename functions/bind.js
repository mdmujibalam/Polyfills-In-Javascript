Function.prototype.customBind = function (context = globalThis, ...args) {
  if (typeof this !== "function") {
    throw new Error("Not Callable");
  }

  const callback = this;

  return function (...newArgs) {
    let uniqueProp = Math.random();

    while (context[uniqueProp] !== undefined) uniqueProp = Math.random();

    context[uniqueProp] = callback;
    const result = context[uniqueProp](...args, ...newArgs);

    delete context[uniqueProp];

    return result;
  };
};

const obj5 = {
  Name: "Mujib",
  Age: "25",
  Gender: "Male",
};

const obj6 = {
  Name: "Hamid",
  Age: "26",
  Gender: "Male",
};

const printDetails = function (city, province) {
  console.log(
    `${this.Name} is ${this.Gender} & ${this.Age} years old. He belongs to ${city} from ${province}`,
  );
};

const bindedDetails1 = printDetails.customBind(obj5);
const bindedDetails2 = printDetails.customBind(obj5, "Koderma");
const bindedDetails3 = printDetails.customBind(obj5, "Chandigarh", "India");

bindedDetails1("Zirakpur", "Punjab");
bindedDetails2("Jharkhand");
bindedDetails3();
