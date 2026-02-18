function App() {
  
  const debounce = (fun, delay) => {
    let timerId;

    return function (...args) {
      if (timerId) clearTimeout(timerId);

      timerId = setTimeout(() => fun(...args), delay);
    };
  };

  const callSearchAPI = (query) => {
    console.log("query for search==>", query);
  };

  const debouncedSearch = debounce(callSearchAPI, 1000);

  console.log('debouncedSearch recreated:', debouncedSearch);


  return (
    <>
      <div style={{ textAlign: "center", margin: "20px" }}>
        <input type="text" onChange={(e) => debouncedSearch(e.target.value)} />
      </div>
    </>
  );
}

export default App;
