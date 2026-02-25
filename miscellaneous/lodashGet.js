function get(obj, path, defaultValue) {
  // Convert the path to an array if it's not already
  const pathArray = Array.isArray(path) ? path : path.replace(/\[(\d+)\]/g, ".$1").split(".").filter(Boolean);

  const result = pathArray.reduce((acc, key) => acc && acc[key], obj);

  return result === undefined ? defaultValue : result;
}

const data = {
  user: [
    {
      profile: {
        name: "John Doe",
        age: 30,
      },
    },
    {
      userData: {
        pinCode: "112233",
        gender: "Male",
      },
    },
  ],
};

console.log(get(data, "user[0].profile.name")); // Output: 'John Doe'
console.log(get(data, "user[1].userData.gender")); // Output: "Male"
console.log(get(data, "user[0].profile.gender", "Not specified")); // Output: 'Not specified'
console.log(get(data, ["user", "0", "profile", "age"])); // Output: 30
