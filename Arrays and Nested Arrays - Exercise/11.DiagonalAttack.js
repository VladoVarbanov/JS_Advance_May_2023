function diagonalAttack(input) {
  //
  const matrix = (input = input.map((row) =>
    row.split(" ").map((e) => Number(e))
  ));
  let sumFirstDiagonal = 0;
  let sumSecondDiagonal = 0;

  for (let i = 0; i < matrix.length; i++) {
    const element = matrix[i];
    sumFirstDiagonal += matrix[i];
    sumSecondDiagonal += matrix[i][matrix.length - i - 1];
  }

  if (sumFirstDiagonal === sumSecondDiagonal) {
    for (let i = 0; i < matrix.length; i++) {
      for (let j = 0; j < matrix.length; j++) {
        if (i !== j && i != matrix.length - j - 1) {
          matrix[i][j] = sumFirstDiagonal;
        }
      }
    }
  }
  const result = [];

  for (let i = 0; i < matrix.length; i++) {
    result.push(matrix[i].join(" "));
  }
  const output = result.join("\n");

  return output;
}
diagonalAttack([
  "5 3 12 3 1",
  "11 4 23 2 5",
  "101 12 3 21 10",
  "1 4 5 2 2",
  "5 22 33 11 1",
]);
console.log("====================");
diagonalAttack(["1 1 1", "1 1 1", "1 1 0"]);
