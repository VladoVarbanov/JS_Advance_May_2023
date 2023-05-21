function subtract() {
  // console.log('TODO:...');
  const numOne = document.getElementById("firstNumber").value;
  const numTwo = document.getElementById("secondNumber").value;
  const result = document.getElementById("result");
  result.textContent = Number(numOne) - Number(numTwo);
}
