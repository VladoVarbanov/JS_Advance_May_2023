function circleArea(input) {
  let type = typeof input;
  if (type !== "number") {
    console.log(
      `We can not calculate the circle area, because we receive a ${type}.`
    );
    return;
  }
  const area = Math.PI * Math.pow(input, 2);
  console.log(area.toFixed(2));
}
circleArea(5);
circleArea("name");
