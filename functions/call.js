//  console.log(this);

// function fun(){
//     console.log("inside",this);
// }
// fun();

/*Next Question*/

// this.name="Mujib";

// console.log(window.name);
// console.log(this.name);

/*Next Question*/

// "use strict" mode sets global window object to undefined

// "use strict"

// const person={
//     name:"Mujib",
//     checkThis: function(){
//         console.log(this);

//         function checkThisAgain(){
//            console.log(this);
//         }

//         // checkThisAgain.call(this);
//          checkThisAgain();
//     }
// }

//  person.checkThis();

// "use strict" mode sets global window object to undefined

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
// console.log(`Hi ${this.lastName}`);
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


// const person1={
//     name:"Mujib",
//     age:26,
//     greet(){
//      console.log(`Hi, I am ${this.name}`);
//     }
// }

// person1.greet();
// const greet=person1.greet;
// greet();


// const emp1={
//     name:"Hamid",
//     empCode: "112233",
//     role:"Frontend Developer"
// }

// const emp2={
//     name:"Mujib",
//     empCode: "445566",
//     role:"Backend Developer"
// }

// function sayHello(age){
//     console.log(`Hi, I am ${this.name} and I am ${age} years old & I am a ${this.role}`);
// }

// sayHello.call(emp2,26);

// ❌ Bad — storing DOM reference that gets removed
const elements = {
  button: document.getElementById("btn"),   // reference stored
  modal:  document.getElementById("modal")  // reference stored
}

// later you remove the element from DOM
document.body.removeChild(document.getElementById("modal"))

// but elements.modal still holds reference in JS!
// modal is removed from page but NOT from memory ❌
console.log(elements.modal)  // still accessible → memory leak

// ✅ Fix — clear the reference after removing from DOM
document.body.removeChild(document.getElementById("modal"))
elements.modal = null  // ✅ now garbage collector can free it