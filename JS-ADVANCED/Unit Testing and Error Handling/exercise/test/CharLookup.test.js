const { lookupChar } = require("../03.CharLookup");
const { assert } = require("chai");

describe("Test function works correctly", () => {
    it("Should return undefined if first parameter is NOT a expected type", () => {
        assert.isUndefined(lookupChar(1, 1));
    });

    it("Should return undefined if second parameter is NOT a expected type", () => {
        assert.isUndefined(lookupChar("test", "test"));
    });

    it("Should return undefined if second parametes is a double", () => {
        assert.isUndefined(lookupChar("test", 0.2));
    });

    it("Should return 'Incorrect index' if value of the index is incorrect(biggest then string lenthg)", () => {
        assert.equal(lookupChar("test", 6), "Incorrect index");
    });

    it("Should return 'Incorrect index' if value of the index is incorrect(negative number)", () => {
        assert.equal(lookupChar("test", -2), "Incorrect index");
    });

    it("Should return character at the specified index", () => {
        assert.equal(lookupChar("test", 1), "e");
    });
});