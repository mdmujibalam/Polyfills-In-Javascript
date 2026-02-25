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

  return { mySetTimeout, myClearTimeout };
}

const { mySetTimeout, myClearTimeout } = createMySetTimeout();

// Test 1: Basic delay
const id1 = mySetTimeout(() => console.log("✅ Basic OK"), 100);

// Test 2: Clear works
const id2 = mySetTimeout(() => console.log("Never fires"), 50);
myClearTimeout(id2); // ✅ Cancelled!

// Test 3: Args passed
mySetTimeout((a, b) => console.log(a + b), 200, 5, 10); // 15

// Test 4: Multiple timers
mySetTimeout(() => {}, 300);
mySetTimeout(() => {}, 500); // Independent IDs!
