class TaskRunner{
  
  constructor(concurrency){
    this.concurrency=concurrency;
    this.queue=[];
    this.runningTasks=0;
  }
  
  addTask(task){
    if(this.runningTasks < this.concurrency){
      this.runningTasks+=1;
      this.executeTask(task);
    }
    else{
      this.queue.push(task);
    }
  }
  
  async executeTask(task){
    try{
      await task();
    }catch(err){
      console.log("Errr occurred");
    }finally{
      this.runningTasks--;
      this.drain();
    }
  }

  drain(){
    while(this.runningTasks < this.concurrency && this.queue.length > 0){
      const newTask= this.queue.shift();
      this.runningTasks+=1;
      this.executeTask(newTask);
    }
  }
}

const delay = (ms) =>
  new Promise(resolve => setTimeout(resolve, ms));

const task1= async ()=>{
  console.log("t1 started");
  await delay(1000);
  console.log("t1 finished");
}

const task2= async ()=>{
  console.log("t2 started");
  await delay(800);
  console.log("t2 finished");
}

const task3= async ()=>{
  console.log("t3 started");
  await delay(1500);
  console.log("t3 finished");
}

const task4= async ()=>{
  console.log("t4 started");
  await delay(2000);
  console.log("t4 finished");
}

const task5= async ()=>{
  console.log("t5 started");
  await delay(1700);
  console.log("t5 finished");
}

const taskList= [task1,task2,task3,task4,task5];

const taskRunner = new TaskRunner(3);

taskList.forEach((task)=>{
  taskRunner.addTask(task);
});

