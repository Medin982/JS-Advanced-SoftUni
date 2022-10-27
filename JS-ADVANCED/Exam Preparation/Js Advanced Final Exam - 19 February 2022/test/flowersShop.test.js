const { flowerShop } = require("../03.FlowersShop");
const { assert } = require("chai");

describe("Tests …", function () {
    describe("calcPriceOfFlowers tests", function () {
        it("Should throw error if params in not correct type", function () {
            assert.throws(() => flowerShop.calcPriceOfFlowers([], [], []));
            assert.throws(() => flowerShop.calcPriceOfFlowers([], [], 1));
            assert.throws(() => flowerShop.calcPriceOfFlowers([], 2, []));
            assert.throws(() => flowerShop.calcPriceOfFlowers("test", 2, []));
        });

        it("Should return correct message and result", () => {
            let expect = "You need $10.00 to buy Test!";
            assert.equal(flowerShop.calcPriceOfFlowers("Test", 2, 5), expect);
        });
    });
    
    describe("checkFlowersAvailable tests" ,() => {
        it("Should return correct message if flowers are sold", () => {
            let arr = ["Rose", "Lily", "Orchid"];
            let expect = `The Black Orchid are sold! You need to purchase more!`;
            assert.equal(flowerShop.checkFlowersAvailable("Black Orchid", arr), expect);
        });

        it("Should return correct message if flowers are available", () => {
            let arr = ["Rose", "Lily", "Orchid"];
            let expect = `The Orchid are available!`;
            assert.equal(flowerShop.checkFlowersAvailable("Orchid", arr), expect);
        })
    });

    describe("sellFlowers tests" ,() => {
        it("Should throw error if params is not a correct type", () => {
            assert.throws(() => flowerShop.sellFlowers("test", []));
            assert.throws(() => flowerShop.sellFlowers(10, 10));
            assert.throws(() => flowerShop.sellFlowers([], "test"));
        });

        it("Should throw error if space is less than 0 or space is greater than gardens", () => {
            assert.throws(() => flowerShop.sellFlowers([], 1));
            assert.throws(() => flowerShop.sellFlowers(["some"], -1));
            assert.throws(() => flowerShop.sellFlowers(["some"], 4));
        });

        it("Should retirn correct result" ,() => {
            let arr = ["Rose", "Lily", "Orchid"];
            let expect = "Rose / Orchid";
            assert.equal(flowerShop.sellFlowers(arr, 1), expect);
            expect = "Lily / Orchid";
            assert.equal(flowerShop.sellFlowers(arr, 0), expect);
        });
    });
});