const { chooseYourCar } = require("../03.ChooseYourCar");
const { assert } = require("chai");


describe("Tests …", function () {
    describe("choosingType test", function () {
        it("Chech years", function () {
            assert.throws(() => chooseYourCar.choosingType("Sedan", "red", 1800), "Invalid Year!");
            assert.throws(() => chooseYourCar.choosingType("Sedan", "red", 2030), "Invalid Year!");
            assert.throws(() => chooseYourCar.choosingType("Sedan", "red", 2023), "Invalid Year!");
        });

        it("Throws error if type is not 'Sedan'", () => {
            assert.throws(() => chooseYourCar.choosingType("Test", "Red", 2000),
                "This type of car is not what you are looking for.");
            assert.throws(() => chooseYourCar.choosingType("spyder", "Red", 2000),
                "This type of car is not what you are looking for.");
        });

        it("Should retturn correct message if years car is greater or equal to 2010", () => {
            let expect = "This Red Sedan meets the requirements, that you have.";
            assert.equal(chooseYourCar.choosingType("Sedan", "Red", 2020), expect);
            assert.equal(chooseYourCar.choosingType("Sedan", "Red", 2018), expect);
            assert.equal(chooseYourCar.choosingType("Sedan", "Red", 2010), expect);
        });

        it("Should retturn correct message if years car is less than 2010", () => {
            let expect = "This Sedan is too old for you, especially with that Red color.";
            assert.equal(chooseYourCar.choosingType("Sedan", "Red", 2007), expect);
            assert.equal(chooseYourCar.choosingType("Sedan", "Red", 2003), expect);
            assert.equal(chooseYourCar.choosingType("Sedan", "Red", 1998), expect);
        });
    });

    describe("brandName test", () => {
        it("Should throw error if params is wrong type or index is greater than array length", () => {
            assert.throws(() => { chooseYourCar.brandName("test", "test") });
            assert.throws(() => { chooseYourCar.brandName("test", 2) });
            assert.throws(() => { chooseYourCar.brandName([], "test") });
            assert.throws(() => { chooseYourCar.brandName([], 2) });
            assert.throws(() => { chooseYourCar.brandName([], -1) });
            assert.throws(() => { chooseYourCar.brandName([], 0) });
        });

        it("Return changed array", () => {
            let test = ["BMW", "Toyota", "Peugeot"];
            assert.equal(chooseYourCar.brandName(test, 0), "Toyota, Peugeot");
            assert.equal(chooseYourCar.brandName(test, 1), "BMW, Peugeot");
            assert.equal(chooseYourCar.brandName(test, 2), "BMW, Toyota");
        });
    });

    describe("CarFuelConsumption test", () => {
        it("Should throws error if params is wrong type", () => {
            assert.throws(() => chooseYourCar.carFuelConsumption([], "test"), "Invalid Information!");
            assert.throws(() => chooseYourCar.carFuelConsumption("test", 10), "Invalid Information!");
            assert.throws(() => chooseYourCar.carFuelConsumption(10, []), "Invalid Information!");
            assert.throws(() => chooseYourCar.carFuelConsumption("test", []), "Invalid Information!");
        });

        it("Should throw error if number is negative number", () => {
            assert.throws(() => chooseYourCar.carFuelConsumption(1, 0), "Invalid Information!");
            assert.throws(() => chooseYourCar.carFuelConsumption(0, -1), "Invalid Information!");
            assert.throws(() => chooseYourCar.carFuelConsumption(-2, 2), "Invalid Information!");
            assert.throws(() => chooseYourCar.carFuelConsumption(-2, -10), "Invalid Information!");
        });

        it("Should return correct message of consuption is less or equal to 7", () => {
            let expect = "The car is efficient enough, it burns 2.00 liters/100 km.";
            assert.equal(chooseYourCar.carFuelConsumption(100, 2), expect);
            expect = "The car is efficient enough, it burns 3.66 liters/100 km.";
            assert.equal(chooseYourCar.carFuelConsumption(123, 4.5), expect);
            expect = "The car is efficient enough, it burns 4.00 liters/100 km.";
            assert.equal(chooseYourCar.carFuelConsumption(100, 4), expect);
            expect = "The car is efficient enough, it burns 7.00 liters/100 km.";
            assert.equal(chooseYourCar.carFuelConsumption(100, 7), expect);
        });

        it("Should return correct message of consuption is greater than 7", () => {
            let expect = "The car burns too much fuel - 20.00 liters!";
            assert.equal(chooseYourCar.carFuelConsumption(100, 20), expect);
            expect = "The car burns too much fuel - 30.00 liters!";
            assert.equal(chooseYourCar.carFuelConsumption(100, 30), expect);
            expect = "The car burns too much fuel - 40.00 liters!";
            assert.equal(chooseYourCar.carFuelConsumption(100, 40), expect);
            expect = "The car burns too much fuel - 50.00 liters!";
            assert.equal(chooseYourCar.carFuelConsumption(100, 50), expect);
        });
    });
});