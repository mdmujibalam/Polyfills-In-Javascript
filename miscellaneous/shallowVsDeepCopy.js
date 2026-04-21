const  originalObj={
    name:"Mujib",
    age:"26",
    address:{
        city:"Koderma",
        pinCode:"825418"
    },
    currentTime: new Date(),
    map: new Map([['a',12]]),
    set: new Set([2,2,12,8]),
   // func:()=>{console.log("Hi")}
}

// const shallowCopyObj= {...originalObj};
const shallowCopyObj= Object.assign({},originalObj);



//const deepCopyObj=JSON.parse(JSON.stringify(originalObj));
const deepCopyObj= structuredClone(originalObj);

shallowCopyObj.name="Hamid";
shallowCopyObj.age="30";
shallowCopyObj.address.city="Patna";
shallowCopyObj.address.pinCode="1112233"


console.log("originalObj", originalObj);
console.log("shallowCopyObj", shallowCopyObj);
console.log("deepCopyObj", deepCopyObj);

// console.log("\n=== TOP-LEVEL PROPERTIES (look identical) ===");
// console.log("originalObj.name:", originalObj.name);        // "Mujib"
// console.log("shallowCopyObj.name:", shallowCopyObj.name);  // "Mujib" 
// console.log("deepCopyObj.name:", deepCopyObj.name);       // "Mujib"

// console.log("\n=== NESTED MAP TEST ===");
// console.log("Map types:");
// console.log("Original map:", originalObj.map instanceof Map);           // true
// console.log("Shallow map:", shallowCopyObj.map instanceof Map);         // true  
// console.log("Deep map:", deepCopyObj.map instanceof Map);  

// console.log("\n=== DATE TEST ===");
// console.log("Original time:", originalObj.currentTime);
// console.log("Shallow time:", shallowCopyObj.currentTime); 
// console.log("Deep time:", deepCopyObj.currentTime);

// originalObj.currentTime.setSeconds(0);  // Modify original date
// console.log("\nAfter original.currentTime.setSeconds(0):");
// console.log("Shallow time changed?", shallowCopyObj.currentTime.getSeconds()); // 0 (changed!)
// console.log("Deep time changed?", deepCopyObj.currentTime.getSeconds());       // original seconds (unchanged!)

// console.log("\n=== REFERENCE CHECK ===");
// console.log("map refs same?", originalObj.map === shallowCopyObj.map);     // true ❌
// console.log("map refs same?", originalObj.map === deepCopyObj.map);       //false