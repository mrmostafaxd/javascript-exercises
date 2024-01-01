const sumAll = function (start, end) {
  if (typeof start !== 'number' || typeof end !== 'number') return 'ERROR';

  if (start < 0 || end < 0) return 'ERROR';

  if (start > end) [start, end] = [end, start];

  let totalSum = 0;
  for (let i = start; i <= end; i++) {
    totalSum += i;
  }
  return totalSum;
};

console.log(sumAll(1, 4));

// Do not edit below this line
module.exports = sumAll;
