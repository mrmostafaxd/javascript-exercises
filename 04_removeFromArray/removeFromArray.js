const removeFromArray = function (inputArray, ...elementsToBeDeleted) {
  const newArray = [];
  inputArray.forEach((el) => {
    if (!elementsToBeDeleted.includes(el)) newArray.push(el);
  });
  return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
