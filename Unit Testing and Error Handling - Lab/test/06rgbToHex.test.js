const expect = require("chai").expect;
const { it, describe } = require("mocha");
const rgbToHexColor = require("../06.RGBToHex");

describe("rgbToHex", function () {
  it("with non integer red, should return undefined", function () {
    //Arrange.
    let red1 = 12.5;
    let red2 = "100";
    let green = 100;
    let blue = 100;

    //Act
    let result1 = rgbToHexColor(red1, green, blue);
    let result2 = rgbToHexColor(red2, green, blue);
    //Assert
    expect(result1).to.be.undefined;
    expect(result2).to.be.undefined;
  });

  it("with red with edge case values, should return correct result", function () {
    //Arrange.
    let red1 = 0;
    let red2 = 255;
    let red3 = -1;
    let red4 = 256;
    let green = 100;
    let blue = 100;

    //Act
    let result1 = rgbToHexColor(red1, green, blue);
    let result2 = rgbToHexColor(red2, green, blue);
    let result3 = rgbToHexColor(red3, green, blue);
    let result4 = rgbToHexColor(red4, green, blue);
    //Assert
    expect(result1).to.equal("#006464");
    expect(result2).to.equal("#FF6464");
    expect(result3).to.be.undefined;
    expect(result4).to.be.undefined;
  });
  it("with non integer blue, should return undefined", function () {
    //Arrange.
    let blue1 = 12.5;
    let blue2 = "100";
    let green = 100;
    let red = 100;

    //Act
    let result1 = rgbToHexColor(red, green, blue1);
    let result2 = rgbToHexColor(red, green, blue2);
    //Assert
    expect(result1).to.be.undefined;
    expect(result2).to.be.undefined;
  });

  it("with blue with edge case values, should return correct result", function () {
    //Arrange.
    let blue1 = 0;
    let blue2 = 255;
    let blue3 = -1;
    let blue4 = 256;
    let green = 100;
    let red = 100;

    //Act
    let result1 = rgbToHexColor(red, green, blue1);
    let result2 = rgbToHexColor(red, green, blue2);
    let result3 = rgbToHexColor(red, green, blue3);
    let result4 = rgbToHexColor(red, green, blue4);
    //Assert
    expect(result1).to.equal("#646400");
    expect(result2).to.equal("#6464FF");
    expect(result3).to.be.undefined;
    expect(result4).to.be.undefined;
  });
  it("with non integer green, should return undefined", function () {
    //Arrange.
    let green1 = 12.5;
    let green2 = "100";
    let blue = 100;
    let red = 100;

    //Act
    let result1 = rgbToHexColor(red, green1, blue);
    let result2 = rgbToHexColor(red, green2, blue);
    //Assert
    expect(result1).to.be.undefined;
    expect(result2).to.be.undefined;
  });

  it("with green with edge case values, should return correct result", function () {
    //Arrange.
    let green1 = 0;
    let green2 = 255;
    let green3 = -1;
    let green4 = 256;
    let blue = 100;
    let red = 100;

    //Act
    let result1 = rgbToHexColor(red, green1, blue);
    let result2 = rgbToHexColor(red, green2, blue);
    let result3 = rgbToHexColor(red, green3, blue);
    let result4 = rgbToHexColor(red, green4, blue);
    //Assert
    expect(result1).to.equal("#640064");
    expect(result2).to.equal("#64FF64");
    expect(result3).to.be.undefined;
    expect(result4).to.be.undefined;
  });
});
