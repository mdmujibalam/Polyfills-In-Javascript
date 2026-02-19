// console.log(this);

// function fun(){
//     console.log("inside",this);
// }
// fun();

/*Next Question*/

// this.name="Mujib";

// console.log(window.name);
// console.log(this.name);

/*Next Question*/

// "use strict"

// const person={
//     name:"Mujib",
//     checkThis: function(){
//         console.log(this);

//         function checkThisAgain(){
//            console.log(this);
//         }

//         checkThisAgain.call(this);
//         //checkThisAgain();
//     }
// }

// person.checkThis();

/*Next Question*/

// const myName = {
//     firstName: "Mujib",
//     lastName: "Alam"
// }

// const fullName= function (arg1,arg2){
//     console.log(`Firstname - ${this.firstName} LastName - ${this.lastName} are ${arg1} & ${arg2}`)
// }

// fullName("Male","Developer");

// fullName.call(myName,"Male","Developer");

// fullName.apply(myName,["Male","Developer"]);

/*Next Question*/

// const obj={
//     name:"Mujib",
//     lastName: "Alam"
// }

// function sayHello(){
//console.log(`Hi ${this.lastName}`);
//     return "Hello" + this.lastName;
// }

// console.log(sayHello());

/*Next Question*/

// const obj1={
//     Name: "Mujib",
//     Age:"25",
//     Gender: "Male",
//     printDetail: function(){
//        console.log(this);
//        console.log(`${this.Name} is ${this.Gender} & ${this.Age} years old`)
//     }
// }

// const obj2={
//     Name: "Hamid",
//     Age:"26",
//     Gender: "Male"
// }

// obj1.printDetail.call(obj2);

/*Next Question*/

// const obj1={
//     Name: "Mujib",
//     Age:"25",
//     Gender: "Male"
// }

// const obj2={
//     Name: "Hamid",
//     Age:"26",
//     Gender: "Male"
// }

// const printDetails=function(){
//     console.log(`${this.Name} is ${this.Gender} & ${this.Age} years old`)
// }

// printDetails.call(obj1);
// printDetails.call(obj2);

/*Next Question*/

// Function.prototype.myCall = function(obj = globalThis, ...args) {
//   // Add function to obj temporarily
//   obj.tempFn = this;
//   // Execute with args
//   const result = obj.tempFn(...args);
//   // Clean up
//   delete obj.tempFn;
//   return result;
// };

Function.prototype.customCall = function (context = globalThis, ...args) {
  if (typeof this !== "function") {
    throw new Error("Not callable");
  }

  let uniqueProp = Math.random();

  while (context[uniqueProp] !== undefined) {
    uniqueProp = Math.random();
  }

  context[uniqueProp] = this;
  const result = context[uniqueProp](...args);
  delete context[uniqueProp];

  return result;
};

const obj1 = {
  Name: "Mujib",
  Age: "25",
  Gender: "Male",
};

const obj2 = {
  Name: "Hamid",
  Age: "26",
  Gender: "Male",
};

const printDetails = function (city, country) {
  console.log(
    `${this.Name} is ${this.Gender} & ${this.Age} years old. He belongs to ${city} from ${country}`,
  );
};

printDetails.customCall(obj1, "Chandigarh", "India");
printDetails.customCall(obj2, "Zirakpur", "Punjab");
