const {carService} = require("../03. Car Service");
const {assert} = require("chai");


describe("Tests …", function() {
    describe("isitExpensive test", function() {

        it("Should return correct message if issue is 'Engine'", function() {
            let expect = "The issue with the car is more severe and it will cost more money";
            assert.equal(carService.isItExpensive("Engine"), expect);
        });

        it("Should return correct message if issue is 'Transmission'", function() {
            let expect = "The issue with the car is more severe and it will cost more money";
            assert.equal(carService.isItExpensive("Engine"), expect);
        });

        it("Should return correct message if issue is not 'Engine' or 'Transmission'", () => {
            let expect =  `The overall price will be a bit cheaper`;
            assert.equal(carService.isItExpensive("Test"), expect);
        })
     });

    describe("discount test", () => {
        it("Should throws error if params is not number", () => {
            assert.throws(() => carService.discount("test", "test"));
            assert.throws(() => carService.discount(10, "test"));
            assert.throws(() => carService.discount("test", 10));
        });

        it("Should return correct message if count less than 2", () => {
            let expect = "You cannot apply a discount";
            assert.equal(carService.discount(1, 10), expect);
        });

        it("Should applied 1.5 if count is greater than or equal 2 and less than 7", () => {
            let expect = `Discount applied! You saved 1.5$`
            assert.equal(carService.discount(4, 10), expect);
        });

        it("Should applied 3 if count is greater than 7", () => {
            let expect = `Discount applied! You saved 3$`
            assert.equal(carService.discount(10, 10), expect);
        });
    });

    describe("partsToBuy test", () => {
        it("Should throw error if params is not array", () => {
            assert.throws(() => {carService.partsToBuy(1, 2)});
            assert.throws(() => {carService.partsToBuy([], 2)});
            assert.throws(() => {carService.partsToBuy("test", [])});
        });

        it("Should return 0 if partsCatalog is empty", ()=> {
            assert.equal(carService.partsToBuy([], []), 0);
        });

        it("Should return correct sum", () => {
            let parts = [{part: 'part1', price: 10}];
            let neededPart = ['part1'];
            assert.equal(carService.partsToBuy(parts, neededPart), 10);
        });
    });
});