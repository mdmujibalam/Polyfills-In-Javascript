//Debouncing is a performance optimization technique where a function gets executed only after a certain delay

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


function searchFun(value){
  console.log("Searching for:", value);
}

const search= debounce(searchFun, 1000);

search("H");
search("He");
search("Hel");
search("Hell");
search("Hello");