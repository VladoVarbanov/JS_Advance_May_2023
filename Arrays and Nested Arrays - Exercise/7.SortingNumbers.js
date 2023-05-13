function sortingNumbers(arr) {
  const output = [];
  arr.sort((a, b) => a - b);
  let arrHalfLength = Math.floor(arr.length / 2);
  for (let i = 0; i < arrHalfLength; i++) {
    output.push(arr.shift());
    output.push(arr.pop());
    if (arr.length === 1) {
      output.push(arr.shift());
    }
  }
  return output;
}
console.log(sortingNumbers([1, 65, 3, 52, 48, 63, 31, -3, 18, 56, 10]));
