function magicMatrices(arr) {
  let magicNum = arr[0].reduce((acc, val) => acc + val, 0);

  for (let i = 0; i < arr.length; i++) {
    if (arr.length !== arr[i].length) return false;
    if (magicNum !== arr[i].reduce((acc, val) => acc + val, 0)) return false;
    let sum = 0;
    for (let j = 0; j < arr[i].length; j++) {
      const element = arr[j][i];
      sum += element;
    }
    if (magicNum !== sum) return false;
  }
  return true;
}
console.log(
  magicMatrices([
    [4, 5, 6],
    [6, 5, 4],
    [5, 5, 5],
  ])
);
console.log("===========================");
console.log(
  magicMatrices([
    [11, 32, 45],
    [21, 0, 1],
    [21, 1, 1],
  ])
);
console.log("===========================");
console.log(
  magicMatrices([
    [1, 0, 0],
    [0, 0, 1],
    [0, 1, 0],
  ])
);
