function greatestCommonDivisor(firstNum, secondNum) {
  while (secondNum) {
    const temp = secondNum;
    secondNum = firstNum % secondNum;
    firstNum = temp;
  }
  console.log(firstNum);
}
greatestCommonDivisor(15, 5);
