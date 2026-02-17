const arr = [2,5,12,20,50,70,100];

Array.prototype.customForEach = function(callback){

    for(let i=0;i<this.length;i++){
        callback(this[i],i,this);
    }
}

// arr.forEach((item,index,array)=> {
//     console.log(`${index}: ${item*10}`);
//     console.log(array);
// });

arr.customForEach((item,index,array)=> {
    console.log(`${index}: ${item*10}`);
    console.log(array);
});