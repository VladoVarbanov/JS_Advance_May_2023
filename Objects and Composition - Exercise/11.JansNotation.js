function jansNotation(arr) {
  // Declare dictionary with operands and methods behind.
  const clacMap = {
    "+": (a, b) => a + b,
    "-": (a, b) => b - a,
    "*": (a, b) => a * b,
    "/": (a, b) => b / a,
  };
  const clonedArr = [...arr];
  const numbers = [];

  for (let i = 0; i <= arr.length; i++) {
    if (i === arr.length) {
      if (numbers.length === 1) {
        return numbers[0];
      }
      return "Error: too many operands!";
    }

    if (typeof clonedArr[i] === "number") {
      numbers.push(clonedArr[i]);
    } else {
      const operand = clonedArr[i];

      if (numbers.length < 2) {
        return "Error: not enough operands!";
      }
      const numA = numbers.pop();
      const numB = numbers.pop();
      const result = clacMap[operand](numA, numB);
      numbers.push(result);
    }
  }
}
jansNotation([3, 4, "+"]);
// 7
console.log("==========================");
jansNotation([5, 3, 4, "*", "-"]);
// -7
