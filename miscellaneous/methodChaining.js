// Method Chaining can be implemented in three ways in Javascript :
// 1) Chaining with Classes
// 2) Chaining with Objects
// 3) Chaining with Functions

//1)Chaining with Classes

// class Calculator {
//   constructor(value) {
//     this.val = value;
//   }

//   add(value) {
//     this.val += value;
//     return this;
//   }

//   subtract(value) {
//     this.val -= value;
//     return this;
//   }

//   multiply(value) {
//     this.val *= value;
//     return this;
//   }

//   divide(value) {
//     if (value !== 0){
//     this.val /= value;
//     }
//     return this;
//   }

//   pow(value) {
//     this.val **= value;
//     return this;
//   }

//   getResult() {
//     return this.val;
//   }
// }

// const res = new Calculator(20).add(5).divide(5).multiply(2).getResult();
// console.log(res);

// 2) Chaining With Objects

// const Calculator = {
//   val: 0,

//   add: function (value) {
//     this.val += value;
//     return this;
//   },

//   subtract: function (value) {
//     this.val -= value;
//     return this;
//   },

//   multiply: function (value) {
//     this.val *= value;
//     return this;
//   },
//   divide: function (value) {
//     if (value !== 0) {
//       this.val /= value;
//     }
//     return this;
//   },
//   pow: function (value) {
//     this.val **= value;
//     return this;
//   },
//   getValue: function () {
//     return this.val;
//   },
// };

// const result = Calculator.add(20).add(10).divide(10).multiply(5).subtract(3).getValue();
// console.log(result);

// 3)Chaining With Functions

const Calculator = function () {
  this.val = 0;

  this.add = (value) => {
    this.val += value;
    return this;
  };

  this.subtract = (value) => {
    this.val -= value;
    return this;
  };

  this.multiply = (value) => {
    this.val *= value;
    return this;
  };

  this.divide = (value) => {
    if (value !== 0) {
      this.val /= value;
    }
    return this;
  };

  this.getValue = () => this.val;
};

const res = new Calculator()
  .add(10)
  .multiply(2)
  .divide(5)
  .multiply(3)
  .getValue();
console.log(res);
