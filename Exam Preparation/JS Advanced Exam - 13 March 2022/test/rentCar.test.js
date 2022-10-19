const {rentCar} = require("../03.RentCar");
const {assert} = require("chai");

describe("Tests …", function() {
    describe("searchCar test", () => {
        it("Should throw error if params is not correct type", () => {
            let expect = "Invalid input!";
            assert.throws(() => rentCar.searchCar("test", 1), expect);
            assert.throws(() => rentCar.searchCar("test", "test"), expect);
            assert.throws(() => rentCar.searchCar([], []), expect);
        });

        it("Should throw error if no such models", () => {
            let expect = "There are no such models in the catalog!";
            assert.throws(() => rentCar.searchCar([], "bmw"), expect);
        });

        it("Should return correct message if find models", () => {
            let shop = ["Volkswagen", "BMW", "Audi"];
            let expect = "There is 1 car of model BMW in the catalog!";
            assert.equal(rentCar.searchCar(shop, "BMW"), expect);
        })
     });
     
     describe("calculatePriceOfCar test", () => {
        it("Should throw error if params is not correct type", () => {
            let expect = "Invalid input!";
            assert.throws(() => rentCar.calculatePriceOfCar(1, "test"), expect);
            assert.throws(() => rentCar.calculatePriceOfCar("test", "test"), expect);
            assert.throws(() => rentCar.calculatePriceOfCar(5, 5), expect);
        });

        it("Should throw error if no such models", () => {
            let expect = "No such model in the catalog!";
            assert.throws(() => rentCar.calculatePriceOfCar("test", 5), expect);
        });

        it("Should return correct message if model such in catalog", () => {
            let expect = "You choose Volkswagen and it will cost $60!";
            assert.equal(rentCar.calculatePriceOfCar("Volkswagen", 3), expect);
        });
     });

     describe("checkBudget test", () => {
        it("Should throw error if params is not valid", () => {
            let expect = "Invalid input!";
            assert.throws(() => rentCar.checkBudget([], [], []), expect);
            assert.throws(() => rentCar.checkBudget([], [], 1), expect);
            assert.throws(() => rentCar.checkBudget([], 1, 1), expect);
            assert.throws(() => rentCar.checkBudget(1, [], 1), expect);
            assert.throws(() => rentCar.checkBudget(1, 1, []), expect);
        });

        it("Should return correct message if budget is less than cost", () => {
            let expect = "You need a bigger budget!";
            assert.equal(rentCar.checkBudget(10, 10, 90), expect);
        });

        it("Should return correct message if budget is more than cost", () => {
            let expect = "You rent a car!";
            assert.equal(rentCar.checkBudget(10, 10, 120), expect);
            assert.equal(rentCar.checkBudget(10, 10, 100), expect);
        });
     });
});