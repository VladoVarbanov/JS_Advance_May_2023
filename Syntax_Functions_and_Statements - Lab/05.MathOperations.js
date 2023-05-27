function mathOperations(num1, num2, operant) {
  let operation = {
    "+": num1 + num2,
    "-": num1 - num2,
    "*": num1 * num2,
    "/": num1 / num2,
    "%": num1 % num2,
    "**": Math.pow(num1, num2),
  };
  console.log(operation[operant]);
}
mathOperations(5, 6, "+");
mathOperations(3, 5.5, "*");
