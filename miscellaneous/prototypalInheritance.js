//<<<<<<<-------Example 1 -------------->>>>>>

const obj1={
    fullName:"Md Mujib Alam",
    address:"Koderma",
    age:"26",
}

const obj2={
    fullName:"Hamid",
    address:"Dhanbad",
    age:"25",
}

Object.prototype.getUserInfo=function(){
    return `My name is ${this.fullName} who is from ${this.address}`
}

console.log(typeof Object);
//Shows: function

console.log(obj1.getUserInfo());
//Shows: My name is Md Mujib Alam who is from Koderma
console.log(obj2.getUserInfo());
//Shows: My name is Hamid who is from Dhanbad

console.log(obj1.hasOwnProperty("getUserInfo"));
//Shows: false

console.log("obj1.__proto__", obj1.__proto__);

//Explanation : Plain objects DON'T have their own .prototype 
// But every plain objects inherits from Object.prototype

//<<<<<<<-------Example 2 -------------->>>>>>

// Step 1: Create a "parent template" (function with .prototype)
// function Car(make) {
//   this.make = make;
// }

// Car.prototype.drive = function() { return 'Vroom!'; };

// // Step 2: Create child - it gets a "parent pointer"
// const toyota = new Car('Toyota');

// // NOW THE 3 THINGS:
// console.log('=== THE 3 DIFFERENT THINGS ===');

// // 1. [[Prototype]] - HIDDEN INTERNAL LINK (use getPrototypeOf to see)
// console.log('[[Prototype]] of toyota:', Object.getPrototypeOf(toyota));
// // Shows: Car.prototype object

// // 2. __proto__ - SAME AS ABOVE but accessible directly
// console.log('toyota.__proto__:', toyota.__proto__);
// // Shows: EXACT SAME Car.prototype object

// // 3. .prototype - EXISTS ONLY ON FUNCTIONS (not instances!) AND SAME AS ABOVE
// console.log('Car.prototype:', Car.prototype); 
// // Shows: Car.prototype object

// console.log('toyota.prototype', toyota.prototype); 
// // undefined! (toyota is NOT a function)


//<<<<<<<-------Example 3  -------------->>>>>>


// const p1={
//     fName:"Mujib",
//     lName:"Alam",
//     getfullName (){
//        return `${this.fName} ${this.lName}`
//     }
// }

// const p2= Object.create(p1);

// console.log(p2.fName);

// p2.__proto__.fName="Hamid";

// console.log(p1.fName);
//Shows: Hamid


