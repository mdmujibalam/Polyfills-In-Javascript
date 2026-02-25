function createMySetTimeout() {
  let timerID = 0;

  const timerMap = new Map();

  function mySetTimeout(callback, delay = 0, ...args) {
    const id = timerID++;
    timerMap.set(id, Date.now()); // Store start time too

    const check = () => {
      const startTime = timerMap.get(id);
      if (!startTime) return; // Cancelled

      if (Date.now() - startTime >= delay) {
        callback(...args);
        timerMap.delete(id); // Auto-cleanup
      } else {
        requestIdleCallback(check);
      }
    };

    requestIdleCallback(check);
    return id;
  }

  function myClearTimeout(id) {
    if (timerMap.has(id)) {
        timerMap.delete(id);
    }
  }

  function clearAllTimeouts (){
    timerMap.clear();
  }

  return { mySetTimeout, myClearTimeout, clearAllTimeouts };
}

const { mySetTimeout, myClearTimeout, clearAllTimeouts } = createMySetTimeout();

const id1 = mySetTimeout(() => console.log("✅ Basic OK"), 100);

const id2 = mySetTimeout(() => console.log("Never fires"), 50);
myClearTimeout(id2); // ✅ Cancelled!

mySetTimeout((a, b) => console.log(a + b), 200, 5, 10); 

mySetTimeout(() => {console.log("3000ms called")}, 3000);
mySetTimeout(() => {console.log("5000ms called")}, 5000); 

//clearAllTimeouts();
