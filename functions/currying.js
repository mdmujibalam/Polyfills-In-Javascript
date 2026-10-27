
//  <<<<<<   Curry Function (Hard Coded) That Can Take 3 Parameters Only As Arguments >>>>>>>

// function curryMultiply(fn){
//     return function curried(a){
//         return function(b){
//             return function(c){
//                 return fn(a,b,c);
//             }
//         }
//     }
// }

//  <<<<< Curry Function which can dynamically handle multiple arguments >>>>>

// function curry(fn) {
//   return function curried(...args) {
//     if (args.length >= fn.length) {
//       return fn(...args);
//     }

//     return function (...nextArgs) {
//       return curried(...args, ...nextArgs);
//     };
//   };
// }

// function multiply(a, b, c, d, e) {
//   return a * b * c * d * e;
// }

// console.log(curry(multiply)(2)(3)(6)(10)(4));

//infinite Curry Sum without fixed arity
// function infiniteCurrySum(initial = 0) {
//   let total=initial;

//   function next(value){
//     total+=value;
//     return next;
//   }

//   next.valueOf=()=> total;

//   next.toString=()=> String(total);

//   return next;
// }

console.log(infiniteCurrySum(1)(2)(3));
console.log(+infiniteCurrySum(1)(2)(3)(4));
console.log(+infiniteCurrySum(1)(2)(3)(5));
console.log(`${infiniteCurrySum(1)(2)(3)(6)}`);
