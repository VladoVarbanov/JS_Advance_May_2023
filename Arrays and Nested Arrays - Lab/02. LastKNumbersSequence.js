function lastKNumbersSequence(n, k) {
  let arr = [1];
  let temp = 1;
  for (let i = 1; i <= n; i++) {
    if (temp !== k) {
      arr.push(temp);
    }
    temp++;
  }
  return arr;
}
lastKNumbersSequence(6, 3);
lastKNumbersSequence(8, 2);
