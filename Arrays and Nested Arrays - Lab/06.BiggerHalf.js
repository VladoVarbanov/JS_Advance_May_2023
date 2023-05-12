function biggerHalf(arr) {
  let result = [];
  arr.sort((a, b) => a - b);
  let halfLength = Math.ceil(arr.length / 2);
  for (let i = arr.length - 1; i >= arr.length - halfLength; i--) {
    result.push(arr[i]);
  }
  result.reverse();
  return result;
}

console.log(biggerHalf([4, 7, 2, 5]));
