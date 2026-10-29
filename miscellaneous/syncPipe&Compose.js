//Synchronous Pipe and Compose

const add5=(x)=> x+5;
const multiplyBy4=(x)=> x*4;
const subtractBy3=(x)=> x-3;

// const res=subtractBy3(multiplyBy4(add5(12)));
// console.log(res);

const compose=(...functions) => (input) => {
    return functions.reduceRight((acc,fn)=>fn(acc),input);
}

const pipe=(...functions)=>(input)=>{
    return functions.reduce((acc,fn)=>fn(acc),input);
}

const res1= compose(subtractBy3,multiplyBy4,add5);
console.log(res1(12));

const res2= pipe(subtractBy3,multiplyBy4,add5);
console.log(res2(12));