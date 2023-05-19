function calc() {
  // TODO: sum = num1 + num2
  let numOne = document.getElementById("num1");
  let numTwo = document.getElementById("num2");
  let num1 = Number(numOne.value);
  let num2 = Number(numTwo.value);
  let sum = document.getElementById("sum");
  sum.value = num1 + num2;
}
