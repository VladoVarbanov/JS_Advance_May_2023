function calorieObject(arrOfStr) {
  const result = {};
  for (let i = 0; i < arrOfStr.length; i += 2) {
    result[arrOfStr[i]] = Number(arrOfStr[i + 1]);
  }
  return result;
}
