// Find elements by class in DOM without using inbuilt property

document.findByClass = function (requiredClass) {
  const root = this.body;
  //console.log("root=>", root);

  function search(node) {
    const result = [];

    //console.log("here",node.classList);
    if (node.classList.contains(requiredClass)) {
      result.push(node);
    }

    for (let element of node.children) {
      const childResults = search(element);
      result.push(...childResults);
    }

    return result;
  }

  return search(root);
};

const targets = document.findByClass("target");
console.log(targets);
console.log(targets.length); // 2
console.log(targets[0]?.textContent); // "Target 1"

// const targets = document.getElementsByClassName("target");
// console.log(targets);
