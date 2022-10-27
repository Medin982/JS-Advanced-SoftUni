const { mathEnforcer } = require("../04.MathEnforcer");
const { assert } = require("chai");

describe("addFive function works correctly", () => {
    it("Should return correct result with a non-number parameter", () => {
        assert.equal(mathEnforcer.addFive(5), 10);
    });

    it("Should return undefined with a NOT a expected type", () => {
        assert.isUndefined(mathEnforcer.addFive(true));
    });
});

describe("subtractTen function works correctly", () => {
    it("Should return correct result with a non-number parameter", () => {
        assert.equal(mathEnforcer.subtractTen(5), -5);
    });

    it("Should return undefined with a NOT a expected type", () => {
        assert.isUndefined(mathEnforcer.subtractTen(true));
    });
});

describe("sum function works correctly", () => {
    it("Should return correct result with a non-number parameter", () => {
        assert.equal(mathEnforcer.sum(5, 5), 10);
    });

    it("Should return undefined with a NOT a expected type", () => {
        assert.isUndefined(mathEnforcer.sum(true, 10));
    });
});