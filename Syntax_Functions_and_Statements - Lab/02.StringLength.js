function stringLength(str1, str2, str3) {
  const strArr = [str1, str2, str3];
  const strLength = [];
  for (const word of strArr) {
    strLength.push(word.length);
  }
  let result = 0;
  result = strLength.reduce((acc, length) => (acc += length), 0);
  let average = Math.floor(result / strLength.length);
  console.log(result);
  console.log(average);
}
stringLength("chocolate", "ice cream", "cake");
console.log("========================");
stringLength("pasta", "5", "22.3");
