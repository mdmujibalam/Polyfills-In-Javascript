//Create an async task runner where async functions are run one after the other. You can provide
//the number of concurrent tasks that can be performed (by default 1).

class TaskRunner {
  constructor(concurrency = 1) {
    this.concurrency = concurrency;
    this.queue = [];
    this.runningTasks = 0;
  }

  async push(task) {
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
    } catch (error) {
      reject(error);
    } finally {
      this.runningTasks -= 1;

      if (this.queue.length && this.runningTasks < this.concurrency) {
        const nextTask = this.queue.shift();
        this.execute(nextTask);
      }
    }
  }
}

const runner = new TaskRunner(2);

const tasks = [1000, 500, 800, 300].map(
  (delay) => () =>
    new Promise((r) =>
      setTimeout(() => {
        console.log(`Task ${delay}ms done`);
        r(delay);
      }, delay),
    ),
);

// These run 2 at a time!
Promise.all(tasks.map((task) => runner.push(task))).then(console.log);
