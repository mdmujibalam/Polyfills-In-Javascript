
const groupBy = (collection, iteratee) => {
  return collection.reduce((acc, curr) => {

    const key = typeof iteratee === "function" ? iteratee(curr) : curr[iteratee];

    if (!acc[key]) {
      acc[key] = [curr];
    } else {
      acc[key].push(curr);
    }

    return acc;
  }, {});
};

const users = [
  { name: "Mujib", age: 25, city: "Patna" },
  { name: "Hamid", age: 3, city: "Patna" },
  { name: "Rahul", age: 25, city: "Delhi" },
];

// Test 1: Property string
console.log(groupBy(users, 'age'));
//console.log(groupBy(users, "city"));

// Test 2: Function
//console.log(groupBy(users, user => user.age >= 25 ? 'adult' : 'minor'));

// Test 3: Numbers
//const numbers = [6.1, 4.2, 6.3, 2.9];
//console.log(groupBy(numbers, Math.floor));

// Test 4: Empty array
//console.log(groupBy([], "age"));
