function squareOfStars(input) {
  if (input === undefined) {
    input = 5;
  }
  let arr = Array(input)
    .fill([])
    .map((el) => (el = Array(input).fill("*")));
  arr.forEach((row) => {
    console.log(row.join(" "));
  });
}
squareOfStars(1);
console.log("======================");
squareOfStars(5);
console.log("======================");
squareOfStars(7);
console.log("======================");
squareOfStars();
