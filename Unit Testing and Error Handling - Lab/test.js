const chai = require("chai").expect;
const sum = require("./04.SumOfNumbers");

describe("sum function", function () {
  it("should sum integers correctly", function () {
    // Arrange.
    let arr = [1, 2, 3];

    // Act.
    let result = sum(arr);

    // Assert.
    chai.expect(result).to.equal(6);
  });

  it("should sum floating point numbers correctly", function () {
    // Arrange.
    let arr = [1.1, 2.2];

    // Act.
    let result = sum(arr);

    // Assert.
    chai.expect(result).to.be.approximately(3.3, 0.001);
  });
});
