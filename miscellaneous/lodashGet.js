// function get(obj, path, defaultValue) {
//   // Convert the path to an array if it's not already.
//   const pathArray = Array.isArray(path) ? path : path.split(".");

//   // Reduce over the path array to find the nested value.
//   const result = pathArray.reduce((acc, key) => acc && acc[key], obj);

//   // Return the resolved value or the default value if undefined.
//   return result === undefined ? defaultValue : result;
// }

// const data = {
//   user: [
//     {
//       profile: {
//         name: "John Doe",
//         age: 30,
//       },
//     },
//   ],
// };


// const get = (obj, path) => {
//   // if path is not a string or array of string
//   if (path === '' || path.length == 0) return undefined;
  
//   // if path is an array, concatenate it and form a string
//   // to handle a single case of string
//   if (Array.isArray(path)) path = path.join('.');
  
//   // filter out the brackets and dot
//   let exactPath = [];
//   for (let i = 0; i < path.length; i++) {
//     if (path[i] !== '[' && path[i] !== ']' && path[i] !== '.') {
//       exactPath.push(path[i]);
//     }
//   }
  
//   // get the value of the path in the sequence
//   const value = exactPath.reduce((source, path) => source[path], obj);
  
//   // if not found return undefined
//   return value ? value : undefined;
// }

// console.log(get(data, "user[0].profile.name")); // Output: 'John Doe'
// console.log(get(data, "user[0].profile.gender", "Not specified")); // Output: 'Not specified'
// console.log(get(data, ["user", "0", "profile", "age"])); // Output: 30
