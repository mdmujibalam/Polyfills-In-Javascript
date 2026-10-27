function flattenNestedObject(obj){
   const res={};

   function flattenHelper(currObj, parent){
          
          for(const key in currObj){
             if(Object.prototype.hasOwnProperty.call(currObj,key)){
                const value= currObj[key];

                const newKey = Array.isArray(currObj) ? `${parent}[${key}]` : parent ? `${parent}.${key}` : key;
                
                if(value !== null && (typeof value ==="object" || Array.isArray(value))){
                    flattenHelper(value, newKey);
                }else{
                    res[newKey]=value;
                }
             }
          }

   }

   flattenHelper(obj,"");

   return res;
}

const user1 = {
  fullName: "Mujib",
  gender: "Male",
  address: {
    houseNo: "123",
    pinCode: "854712",
    locality: {
      district: "Zirakpur",
      state: "Punjab",
    },
  },
};

const user2 = {
  name: "Mansi",
  age: 25,
  department: {
    name: "Customer Experience",
    section: "Technical",
    branch: {
      name: "Bangalore",
      timezone: "IST",
    },
  },
  company: {
    name: "SAP",
    customers: ["Ford", "Nestle"],
  },
  skills: ["javascript", "node.js", "html"],
};

const user3={
  a: 1,
  b: {
    c: 2,
    d: [3, { e: 4 }]
  },
  f: 'hello',
  address:{
    pin:"2541",
    stateInfo:{
        state:"JH"
    }
  },
  hobbies:["A","B","C"]
};

console.log("user1", flattenNestedObject(user1));

console.log("user2", flattenNestedObject(user2));

console.log("user3", flattenNestedObject(user3));

// Obj.hasOwnProperty() Method Implementation

// const user={
//     fullName:"Mujib",
//     age:"30"
// }

// Object.prototype.gender="Male";

// for( const key in user){
//    console.log(key);
// }

// for(const key in user){
//     if(user.hasOwnProperty(key)){
//         console.log(key);
//     }
// }
