const { describe, it } = require("mocha");
const expect = require("chai").expect;

const isOddOrEven = require("./02.EvenOrOdd");

describe("isOddOrEven test", function () {
  it("Check the type of the input", function () {
    //Arrange.
    const input1 = [1, 2, 3];
    const input2 = { test: "test", test2: "testing" };
    const input3 = 22;
    const input4 = NaN;
    const input5 = "";
    const input6 = "Test";
    //Act.
    const result1 = isOddOrEven(input1);
    const result2 = isOddOrEven(input2);
    const result3 = isOddOrEven(input3);
    const result4 = isOddOrEven(input4);
    const result5 = isOddOrEven(input5);
    const result6 = isOddOrEven(input6);

    //Assert.
    expect(result1).to.be.undefined;
    expect(result2).to.be.undefined;
    expect(result3).to.be.undefined;
    expect(result4).to.be.undefined;
    expect(result5).to.not.be.undefined;
    expect(result6).to.not.be.undefined;
  });

  it("Check if the length of the string is even", function () {
    //Arrange.
    const input1 = "Test";
    const input2 = "Tested";
    const input3 = "Testing";
    //Act.
    const result1 = isOddOrEven(input1);
    const result2 = isOddOrEven(input2);
    const result3 = isOddOrEven(input3);
    //Assert.
    expect(result1).to.equal("even");
    expect(result2).to.equal("even");
    expect(result3).to.not.equal("even");
  });

  it("Check if the length of the string is odd", function () {
    //Arrange.
    const input1 = "Testing";
    const input2 = "Paper";
    const input3 = "Flaing";
    //Act.
    const result1 = isOddOrEven(input1);
    const result2 = isOddOrEven(input2);
    const result3 = isOddOrEven(input3);
    //Assert.
    expect(result1).to.equal("odd");
    expect(result2).to.equal("odd");
    expect(result3).to.not.equal("odd");
  });
});
