const { describe, it } = require("mocha");
const mathEnforcer = require("./04.MathEnforcer");
const expect = require("chai").expect;

describe("mathEnforcer test", function () {
  describe("addFive", function () {
    it("Checking is addFive have the correct input type", function () {
      expect(mathEnforcer.addFive("5")).to.be.undefined;
      expect(mathEnforcer.addFive([1, 2])).to.be.undefined;
      expect(mathEnforcer.addFive(null)).to.be.undefined;
      expect(mathEnforcer.addFive({})).to.be.undefined;
      expect(mathEnforcer.addFive(undefined)).to.be.undefined;
    });

    it("Check the output of summing 20 + 5 is 25", function () {
      expect(mathEnforcer.addFive(1)).to.eq(6);
      expect(mathEnforcer.addFive(-4)).to.eq(1);
      expect(mathEnforcer.addFive(1.5)).to.be.closeTo(6.5, 0.001);
    });
  });

  describe("subtractTen", function () {
    it("Checking is subtractTen have the correct input type", function () {
      expect(mathEnforcer.subtractTen("5")).to.be.undefined;
      expect(mathEnforcer.subtractTen([1, 2])).to.be.undefined;
      expect(mathEnforcer.subtractTen(null)).to.be.undefined;
      expect(mathEnforcer.subtractTen({})).to.be.undefined;
      expect(mathEnforcer.subtractTen(undefined)).to.be.undefined;
    });

    it("Check the output of subtraction by - 10 ", function () {
      expect(mathEnforcer.subtractTen(10)).to.equal(0);
      expect(mathEnforcer.subtractTen(0)).to.equal(-10);
      expect(mathEnforcer.subtractTen(-5)).to.equal(-15);
      expect(mathEnforcer.subtractTen(20.5)).to.be.closeTo(10.5, 0.01);
    });
  });

  describe("sum", function () {
    it("Checking is sum have the correct input type", function () {
      expect(mathEnforcer.sum("5", 2)).to.be.undefined;
      expect(mathEnforcer.sum([1, 2], 2)).to.be.undefined;
      expect(mathEnforcer.sum(null, 2)).to.be.undefined;
      expect(mathEnforcer.sum({}, 2)).to.be.undefined;
      expect(mathEnforcer.sum(undefined, 2)).to.be.undefined;

      expect(mathEnforcer.sum(2, "5")).to.be.undefined;
      expect(mathEnforcer.sum(2, [1, 2])).to.be.undefined;
      expect(mathEnforcer.sum(2, null)).to.be.undefined;
      expect(mathEnforcer.sum(2, {})).to.be.undefined;
      expect(mathEnforcer.sum(2, undefined)).to.be.undefined;
      expect(mathEnforcer.sum("2", "2")).to.be.undefined;
    });

    it("Check the output of summing 5 + 5 is 10", function () {
      expect(mathEnforcer.sum(5, 5)).to.eq(10);
      expect(mathEnforcer.sum(-10, 5)).to.eq(-5);
      expect(mathEnforcer.sum(-10, -5)).to.eq(-15);
      expect(mathEnforcer.sum(10, 5.5)).to.be.closeTo(15.5, 0.01);
      expect(mathEnforcer.sum(5.5, 10)).to.be.closeTo(15.5, 0.01);
      expect(mathEnforcer.sum(-10, -5.5)).to.be.closeTo(-15.5, 0.01);
    });
  });
});
