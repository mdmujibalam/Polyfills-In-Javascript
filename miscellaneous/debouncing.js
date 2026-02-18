const callSearchAPI = (query) => {
  console.log("Search API called:", query);
};

const debounce = (fun, delay) => {
  let timerId;
  return function (...args) {
    if (timerId) clearTimeout(timerId);

    timerId = setTimeout(() => fun(...args), delay);
  };
};

const debouncedSearch = debounce(callSearchAPI, 1000);

const textInput = document.getElementById("textInput");

textInput.addEventListener("input", (e) => debouncedSearch(e.target.value));
