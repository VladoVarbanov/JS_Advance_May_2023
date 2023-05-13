function extractIncreasingSubsetFromArray(arr) {
  const output = [];
  arr.reduce((acc, val) => {
    if (acc <= val) {
      output.push(val);
      acc = val;
    }
    return acc;
  }, Number.MIN_SAFE_INTEGER);

  return output;
}
console.log(
  extractIncreasingSubsetFromArray([-100, 3, 8, 4, 10, 12, 3, 2, 24])
);
// console.log("===================================");
console.log(extractIncreasingSubsetFromArray([20, 3, 2, 15, 6, 1]));
