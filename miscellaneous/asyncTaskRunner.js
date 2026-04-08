class TaskRuner {
  constructor(concurrency = 1) {
    this.concurrency = concurrency;
    this.queue = [];
    this.runningTasks = 0;
  }

  push(task) {
    return new Promise((resolve, reject) => {
      if (this.runningTasks < this.concurrency) {
        this.execute({ task, resolve, reject });
      } else {
        this.queue.push({ task, resolve, reject });
      }
    });
  }

  async execute(taskObj) {
    const { task, resolve, reject } = taskObj;
    this.runningTasks += 1;

    try {
      const result = await task();
      resolve(result);
    } catch (err) {
      reject(err);
    } finally {
      this.runningTasks -= 1;

      if (this.queue.length > 0 && this.runningTasks < this.concurrency) {
        const currTask = this.queue.shift();
        this.execute(currTask);
      }
    }
  }
}

const delays = [1000, 500, 800, 300, 600, 400];

const tasks = delays.map(
  (delay) =>
   function(){
    return   new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(delay);
        console.log(`Task ${delay}ms done`);
      }, delay);
    })}
);

const runner = new TaskRuner(3);

Promise.all(tasks.map((task) => runner.push(task)));
