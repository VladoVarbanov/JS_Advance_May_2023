function sumOfNumbers(num1, num2) {
  const numOne = Number(num1);
  const numTwo = Number(num2);
  let result = 0;
  for (let i = numOne; i <= numTwo; i++) {
    result += i;
  }
  console.log(result);
}
sumOfNumbers("1", "5");
sumOfNumbers("-8", "20");
