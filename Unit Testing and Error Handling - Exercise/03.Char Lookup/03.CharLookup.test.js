const expect = require("chai").expect;

const { it, describe } = require("mocha");
const lookupChar = require("./03.CharLookup");

describe("lookupChar test", function () {
  it("Validation of string input type", function () {
    //Arrange.
    const input1 = 22;
    const input2 = [1, 2, 3];
    const input3 = "Test";
    //Act.
    const result1 = lookupChar(input1, 1);
    const result2 = lookupChar(input2, 1);
    const result3 = lookupChar(input3, 1);
    //Assert.
    expect(result1).to.equal(undefined);
    expect(result2).to.equal(undefined);
    expect(result3).to.not.equal(undefined);
  });

  it("Validation of index input type", function () {
    const input1 = 4.5;
    const input2 = "2";
    const input3 = 3;

    const result1 = lookupChar("test", input1);
    const result2 = lookupChar("test", input2);
    const result3 = lookupChar("test", input3);

    expect(result1).to.equal(undefined);
    expect(result2).to.equal(undefined);
    expect(result3).to.not.equal(undefined);
  });

  it("Check if the index is smaller or even to the length of the string", function () {
    const input1 = 4;
    const input2 = 5;
    const input3 = 3;

    const result1 = lookupChar("test", input1);
    const result2 = lookupChar("test", input2);
    const result3 = lookupChar("test", input3);

    expect(result1).to.equal("Incorrect index");
    expect(result2).to.equal("Incorrect index");
    expect(result3).to.not.equal("Incorrect index");
  });
  it("Check if the index is not smaller then zero", function () {
    const input1 = -1;
    const input2 = -5;
    const input3 = 0;

    const result1 = lookupChar("test", input1);
    const result2 = lookupChar("test", input2);
    const result3 = lookupChar("test", input3);

    expect(result1).to.equal("Incorrect index");
    expect(result2).to.equal("Incorrect index");
    expect(result3).to.not.equal("Incorrect index");
  });
  it("Check if the given char is correct", function () {
    const input1 = 1;
    const input2 = 3;

    const result1 = lookupChar("test", input1);
    const result2 = lookupChar("test", input2);

    expect(result1).to.equal("e");
    expect(result2).to.equal("t");
  });
});
