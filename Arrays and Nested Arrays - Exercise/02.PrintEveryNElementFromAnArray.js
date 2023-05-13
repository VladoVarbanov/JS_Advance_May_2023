function printElementFromArray(arr, num) {
  let output = [];
  for (let i = 0; i < arr.length; i += num) {
    const element = arr[i];
    output.push(element);
  }
  return output;
}
console.log(printElementFromArray(["5", "20", "31", "4", "20"], 2));
console.log(printElementFromArray(["dsa", "asd", "test", "tset"], 2));
