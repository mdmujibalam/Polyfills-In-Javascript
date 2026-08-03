//Q1

const p = new Promise((resolve) => {
 console.log(1);
 setTimeout(() => {
 resolve();
 });
});
Promise.resolve().then(() => console.log(2));
setTimeout(() => console.log(3));
p.then(() => console.log(4));
setTimeout(() => console.log(5));

//Q2

Promise.resolve().then(() => {
    console.log('1');
    Promise.resolve().then(() => console.log('2'));
}).then(() => console.log('3'));

Promise.resolve().then(() => console.log('4'));

//Q3

async function foo() {
    console.log('a');
    await null;
    console.log('b');
}

console.log('start');
foo();
console.log('end');

//Q4

setTimeout(() => console.log('timeout 1'), 0);

Promise.resolve()
    .then(() => console.log('promise 1'))
    .then(() => {
        setTimeout(() => console.log('timeout 2'), 0);
    });

console.log('sync');

//Q5

async function a() {
    console.log('a start');
    await b();
    console.log('a end');
}

async function b() {
    console.log('b start');
    await c();
    console.log('b end');
}

async function c() {
    console.log('c');
}

a();
console.log('main end');


//Q6

// console.log('start');

// setTimeout(() => console.log('timeout'), 0);

// Promise.resolve().then(function handler() {
//     console.log('promise');
//     Promise.resolve().then(handler); 
// });

// console.log('end');

//Q7

async function run() {
    for (let i = 0; i < 3; i++) {
        await new Promise((resolve) => setTimeout(resolve, 0));
        console.log(i);
    }
}

console.log('before');
run();
console.log('after');

//Q8

console.log(1);

setTimeout(() => console.log(2), 0);

Promise.resolve()
    .then(() => {
        console.log(3);
        return new Promise((resolve) => setTimeout(resolve, 0));
    })
    .then(() => console.log(4));

(async () => {
    console.log(5);
    await null;
    console.log(6);
})();

console.log(7);

//Q9

Promise.resolve().then(() => console.log(1)).then(() => console.log(2));
Promise.resolve().then(() => console.log(3)).then(() => console.log(4));

//Q10

Promise.resolve().then(() => {
    console.log('outer 1');
    Promise.resolve().then(() => console.log('inner 1'));
    console.log('outer 2');
}).then(() => {
    console.log('outer 3');
});

//Q11

Promise.resolve().then(() => {
    console.log('1');
    Promise.resolve().then(() => {
        console.log('2');
        Promise.resolve().then(() => {
            console.log('3');
        });
    });
});

Promise.resolve().then(() => {
    console.log('4');
});

//Q12

Promise.resolve().then(() => {
    console.log('outer 1');
    return Promise.resolve().then(() => console.log('inner 1'));
}).then(() => {
    console.log('outer 3');
});

//Q13

Promise.resolve().then(() => {
    console.log('A');
    setTimeout(() => console.log('B'), 0);
    return Promise.resolve().then(() => console.log('C'));
}).then(() => {
    console.log('D');
});

setTimeout(() => console.log('E'), 0);

//Q14

for (let i = 0; i < 3; i++) {
    Promise.resolve().then(() => console.log('loop', i));
}
console.log('sync done');

//Q15

Promise.resolve(1)
    .then((val) => {
        console.log('A', val);
        return Promise.resolve(val + 1).then((v) => {
            console.log('B', v);
            return v + 1;
        });
    })
    .then((val) => console.log('C', val));