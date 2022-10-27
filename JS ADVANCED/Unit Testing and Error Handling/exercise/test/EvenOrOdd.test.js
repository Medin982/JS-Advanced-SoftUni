const { isOddOrEven } = require("../02.EvenOrOdd");
const { assert } = require("chai");

describe("Invalid argumets", () => {
    it("Should return undefined if passing boolean type at an arguments", () => {
        assert.isUndefined(isOddOrEven(true));
    });

    it("Should return undefined if passing integer type at an arguments", () => {
        assert.isUndefined(isOddOrEven(9));
    });
});

describe("Test function works correctly", () => {
    it("Should return even after add 'name' as argument", () => {
        assert.equal(isOddOrEven("name"), "even");
    });

    it("Shuld return odd after add 'two' as argument", () => {
        assert.equal(isOddOrEven("two"), "odd");
    });

    it("Should return correctly result after add multiple different strings", () => {
        assert.equal(isOddOrEven("city"), "even");
        assert.equal(isOddOrEven("postCode"), "even");
        assert.equal(isOddOrEven("words"), "odd");
    });
});