Function.prototype.customApply = function (context = globalThis, args) {
  if (typeof this !== "function") {
    throw new Error("Not Callable");
  }

  let uniqueProp = Math.random();

  if (context[uniqueProp] !== undefined) uniqueProp = Math.random();

  context[uniqueProp] = this;
  const result = context[uniqueProp](...args);
  delete context[uniqueProp];

  return result;
};

const obj3 = {
  Name: "Mujib",
  Age: "25",
  Gender: "Male",
};

const obj4 = {
  Name: "Hamid",
  Age: "26",
  Gender: "Male",
};

const printDetails = function (city, country) {
  console.log(
    `${this.Name} is ${this.Gender} & ${this.Age} years old. He belongs to ${city} from ${country}`,
  );
};

printDetails.customApply(obj3, ["Chandigarh", "India"]);
printDetails.customApply(obj4, ["Zirakpur", "Punjab"]);
