function largestNumber(num1, num2, num3) {
  const numArr = [num1, num2, num3];
  const largestNum = numArr.sort((a, b) => b - a);

  console.log(`The largest number is ${largestNum[0]}.`);
}
largestNumber(5, -3, 16);
largestNumber(-3, -5, -22.5);
