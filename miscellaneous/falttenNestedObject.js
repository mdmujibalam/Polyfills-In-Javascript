function flattenNestedObject(inputObj) {
  const result = {};

  function flattenObject(obj, parent) {
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        const newKey = parent ? `${parent}.${key}` : key;

        if (
          typeof obj[key] === "object" &&
          obj[key] !== null &&
          !Array.isArray(obj[key])
        ) {
          flattenObject(obj[key], newKey);
        } else {
          result[newKey] = obj[key];
        }
      }
    }
  }

  flattenObject(inputObj, "");

  return result;
}

const user1 = {
  fullName: "Mujib",
  gender: "Male",
  address: {
    houseNo: "123",
    pinCode: "854712",
    locality: {
      district: "Zirakpur",
      state: "Punjab",
    },
  },
};

const user2 = {
  name: "Mansi",
  age: 25,
  department: {
    name: "Customer Experience",
    section: "Technical",
    branch: {
      name: "Bangalore",
      timezone: "IST",
    },
  },
  company: {
    name: "SAP",
    customers: ["Ford", "Nestle"],
  },
  skills: ["javascript", "node.js", "html"],
};

console.log("user1", flattenNestedObject(user1));

console.log("user2", flattenNestedObject(user2));

// Obj.hasOwnProperty() Method Implementation

// const user={
//     fullName:"Mujib",
//     age:"30"
// }

// Object.prototype.gender="Male";

// for( const key in user){
//    console.log(key);
// }

// for(const key in user){
//     if(user.hasOwnProperty(key)){
//         console.log(key);
//     }
// }
