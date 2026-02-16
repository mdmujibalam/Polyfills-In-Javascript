const arr= [1,2,3,4,5];

Array.prototype.customMap= function(callback){
  const myArr=this;

  const result=[];
  for(let i=0;i<myArr.length;i++){
    result[i]= callback(myArr[i],i);
  }
  return result;
}

//const newArr = arr.map((item,index)=> item*2);

const newArr = arr.customMap((item,index)=> item*2);

console.log("newArr", newArr);