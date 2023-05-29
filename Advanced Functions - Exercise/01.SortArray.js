function sortArray(arrayOfNumbers, type) {
  //
  const dict = {
    asc: (a, b) => a - b,
    desc: (a, b) => b - a,
  };

  const result = arrayOfNumbers.sort(dict[type]);
  return result;
}
sortArray([14, 7, 17, 6, 8], "asc");
