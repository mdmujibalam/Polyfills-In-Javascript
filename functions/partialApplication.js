//  <<<<<<   Partial Application Function (Hard Coded) That Can Take 5(2 Fixed, 3 remaining) Parameters Only As Arguments >>>>>>>

// function partialMultiply(a,b){
//     return function(c,d,e){
//         return a*b*c*d*e;
//     }

// }

//  <<<<< Partila Application Function which can dynamically handle multiple arguments >>>>>

// function partialMultiply(fn,...fixedArgs ){
//     return function(...remainingArgs){
//         return fn(...fixedArgs,...remainingArgs);
//     }

// }

// function multiply(a,b,c,d,e){
//     return a*b*c*d*e;
// }

// console.log(partialMultiply(multiply,2,3)(4,5,10));
//console.log(partialMultiply(2,3)(4,5,10));

//Partial curry sum without fixed arity
function partial(...initialArgs) {
    const args=[...initialArgs];

    function next(...nextArgs){
        args.push(...nextArgs);
        return next;
    }

    next.valueOf=()=> args.reduce((acc,curr)=>acc+curr,0);

    next.toString=()=> String(next.valueOf());
    //next.toString=()=> String(args.reduce((acc,curr)=>acc+curr,0));

    return next;
}

console.log(+partial(1)(2)(3));
console.log(+partial(1,2,3)(4,5));