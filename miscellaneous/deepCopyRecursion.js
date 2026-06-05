function deepCopy(item) {
  if (item === null || typeof item !== "object") return item;

  // if(Array.isArray(item)){
  //    return  item.map((val)=>deepCopy(val));
  // }
  if (Array.isArray(item)) return item.map(deepCopy);

  const res = {};

  for (let key in item) {
    if (Object.prototype.hasOwnProperty.call(item, key)) {
      res[key] = deepCopy(item[key]);
    }
  }

  return res;
}

const obj = {
  name: "Mujib",
  age: "26",
  address: {
    state: "Jharkahnd",
    city: {
      mohalla: "Shahid Chowk",
      district: "Koderma",
    },
  },
  hobbies: ["Coding", "Playing BB", "Travelling"],
  greet() {
    return `Hi, I am ${this.name} and I am ${this.age} years old`;
  },
};
// const obj2= Object.create(null);
const obj1 = deepCopy(obj);

const deepCopiedObj = deepCopy(obj1);
console.log("deepCopy", deepCopiedObj);
deepCopiedObj.name = "Hamid";
console.log("Greet after modification:", deepCopiedObj.greet());
console.log("original", obj);
