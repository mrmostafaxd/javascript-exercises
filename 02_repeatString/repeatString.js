const repeatString = function (str, noOfRepeats) {
  if (noOfRepeats < 0) return 'ERROR';

  let resultString = '';
  for (let i = 0; i < noOfRepeats; i++) {
    resultString += str;
  }
  return resultString;
};

// Do not edit below this line
module.exports = repeatString;
