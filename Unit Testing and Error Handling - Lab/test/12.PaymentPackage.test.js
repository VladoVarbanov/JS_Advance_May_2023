const chai = require("chai");
const { describe } = require("mocha");
const expect = chai.expect;
const assert = chai.assert;

class PaymentPackage {
  constructor(name, value) {
    this.name = name;
    this.value = value;
    this.VAT = 20; // Default value
    this.active = true; // Default value
  }
  get name() {
    return this._name;
  }
  set name(newValue) {
    if (typeof newValue !== "string") {
      throw new Error("Name must be a non-empty string");
    }
    if (newValue.length === 0) {
      throw new Error("Name must be a non-empty string");
    }
    this._name = newValue;
  }
  get value() {
    return this._value;
  }
  set value(newValue) {
    if (typeof newValue !== "number") {
      throw new Error("Value must be a non-negative number");
    }
    if (newValue < 0) {
      throw new Error("Value must be a non-negative number");
    }
    this._value = newValue;
  }
  get VAT() {
    return this._VAT;
  }
  set VAT(newValue) {
    if (typeof newValue !== "number") {
      throw new Error("VAT must be a non-negative number");
    }
    if (newValue < 0) {
      throw new Error("VAT must be a non-negative number");
    }
    this._VAT = newValue;
  }
  get active() {
    return this._active;
  }
  set active(newValue) {
    if (typeof newValue !== "boolean") {
      throw new Error("Active status must be a boolean");
    }
    this._active = newValue;
  }
  toString() {
    const output = [
      `Package: ${this.name}` + (this.active === false ? " (inactive)" : ""),
      `- Value (excl. VAT): ${this.value}`,
      `- Value (VAT ${this.VAT}%): ${this.value * (1 + this.VAT / 100)}`,
    ];
    return output.join("\n");
  }
}

// Should throw an error
try {
  const hrPack = new PaymentPackage("HR Services");
} catch (err) {
  console.log("Error: " + err.message);
}
const packages = [
  new PaymentPackage("HR Services", 1500),
  new PaymentPackage("Consultation", 800),
  new PaymentPackage("Partnership Fee", 7000),
];
console.log(packages.join("\n"));
const wrongPack = new PaymentPackage("Transfer Fee", 100);
// Should throw an error
try {
  wrongPack.active = null;
} catch (err) {
  console.log("Error: " + err.message);
}

// Error: Value must be a non-negative number
// Package: HR Services
// - Value (excl. VAT): 1500
// - Value (VAT 20%): 1800
// Package: Consultation
// - Value (excl. VAT): 800
// - Value (VAT 20%): 960
// Package: Partnership Fee
// - Value (excl. VAT): 7000
// - Value (VAT 20%): 8400
// Error: Active status must be a boolean

describe("Tests for PaymentPackage", () => {
  describe("Tests for the Name", () => {
    it("constructor", () => {
      const instance = new PaymentPackage("Name", 100);
      assert.equal(instance._name, "Name", "1");
      assert.equal(instance._value, 100, "3");
      assert.equal(instance._VAT, 20, "4");
      assert.equal(instance._active, true, "5");
    });
    it("throw new Error if the Name is a number", () => {
      expect(() => new PaymentPackage(123, 213)).to.throw(
        "Name must be a non-empty string"
      );
    });

    it("throw new Error if the Name is a string array", () => {
      expect(() => new PaymentPackage(["a", "b", "c"], 213)).to.throw(
        "Name must be a non-empty string"
      );
    });

    it("throw new Error if the Name is an empty string", () => {
      expect(() => new PaymentPackage("", 213)).to.throw(
        "Name must be a non-empty string"
      );
    });

    it("should not throw error", () => {
      expect(() => new PaymentPackage("abc", 213)).not.to.throw(
        "Name must be a non-empty string"
      );
    });
  });

  describe("Tests for the Value", () => {
    it("set value to null", () => {
      const instance = new PaymentPackage("Name", 100);

      assert.doesNotThrow(() => {
        instance.value = 0;
      });
    });

    it("throw new Error if the Value is string", () => {
      expect(() => new PaymentPackage("abc", "abc")).to.throw(
        "Value must be a non-negative number"
      );
    });

    it("throw new Error if the Value is array", () => {
      expect(() => new PaymentPackage("abc", [1, 2, 3])).to.throw(
        "Value must be a non-negative number"
      );
    });

    it("throw new Error if the Value is negative number", () => {
      expect(() => new PaymentPackage("abc", -123)).to.throw(
        "Value must be a non-negative number"
      );
    });

    it("should not throw error", () => {
      expect(() => new PaymentPackage("abc", 213)).not.to.throw(
        "Value must be a non-negative number"
      );
    });
  });

  describe("Tests for the VAT", () => {});
  describe("Tests for the Active", () => {});
  describe("Tests for the toString method", () => {});
});
