const { createCalculator } = require("../07.AddSubtract");
const { assert } = require("chai");

describe("Test createCalculator functionality", () => {

    let calc;

    beforeEach(function () {
        calc = createCalculator();
    })

    it("Should return an 0 if we cannot take arguments", () => {
        assert.equal(calc.get(), 0);
    });

    it("Should retunt 4 after add 2 and 2", () => {
        calc.add(2);
        calc.add(2);
        assert.equal(calc.get(), 4);
    });

    it("Should return 3 after add(6) and subtract(3)", () => {
        calc.add(6);
        calc.subtract(3);
        assert.equal(calc.get(), 3);
    });

    it("Should return 5 after add(3), add(5), subtract(4), add(1)", () => {
        calc.add(3);
        calc.add(5);
        calc.subtract(4);
        calc.add(1);
        assert.equal(calc.get(), 5);
    });

    it("Should return NaN after add String as argument", () => {
        calc.add("test");
        assert.isNaN(calc.get());
    });

    it("Should return NaN after subtract Strins as argument", () => {
        calc.subtract("test");
        assert.isNaN(calc.get());
    });

    it("Should return object", ()=> {
        assert.isObject(calc);
    });
});