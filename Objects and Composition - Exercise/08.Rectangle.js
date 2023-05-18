function rectangle(width, height, color) {
  const rectangleProto = {
    width: Number(width),
    height: Number(height),
    color: `${color.charAt(0).toUpperCase()}${color.slice(1)}`,
    calcArea: function () {
      return this.width * this.height;
    },
  };

  //   console.log(rectangleProto);
  return rectangleProto;
}
let rect = rectangle(4, 5, "red");
console.log(rect.width);
console.log(rect.height);
console.log(rect.color);
console.log(rect.calcArea());

rectangle();
