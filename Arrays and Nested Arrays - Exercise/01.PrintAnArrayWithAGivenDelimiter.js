function printArrayWithDelimiter(arr, str) {
  console.log(arr.join(`${str}`));
}
printArrayWithDelimiter(["One", "Two", "Three", "Four", "Five"], "-");
