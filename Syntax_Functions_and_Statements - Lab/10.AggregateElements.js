function aggregateElements(input) {
  let sum = input.reduce((acc, curr) => (acc += curr), 0);
  let inverseValue = input.reduce((acc, curr) => (acc += 1 / curr), 0);
  let concat = input.join("");
  console.log(sum);
  console.log(inverseValue);
  console.log(concat);
}
aggregateElements([1, 2, 3]);
aggregateElements([2, 4, 8, 16]);
