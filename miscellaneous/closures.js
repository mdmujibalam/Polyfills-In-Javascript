//Example 1

// const calculateFactorial = function (times = 1) {
//   return function (num) {
//     return num * times;
//   };
// };

// let data1= calculateFactorial(5);
// console.log(data1(3));

// let data2= calculateFactorial(6);
// console.log(data2(4));


//Example 2
// const counter= function(count=0){

//     return function(){
//         count++;
//         return count;
//     }
// }

// let res1= counter();
// console.log(res1());
// console.log(res1());

// let res2= counter(10);
// console.log(res2());

//Example 3
// for(var i=0;i<3;i++){
//     setTimeout(()=>console.log(i),100);
// }

// for( var i=0;i<3;i++){
//     (function(j){
//         setTimeout(()=>console.log(j),100);
//     })(i)
// }

// for(let i=0;i<3;i++){
//     console.log('Iteration i:', i);
//     setTimeout(()=>console.log(i),100);
// }


