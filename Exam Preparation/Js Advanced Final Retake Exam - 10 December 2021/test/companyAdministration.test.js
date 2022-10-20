const { companyAdministration } = require("../03.CompanyAdministration");
const { assert } = require("chai");

describe("Tests …", function () {
    describe("hiringEmployee tests", function () {
        it("Should throw error if position is not 'Programmer'", function () {
            let expectMsg = "We are not looking for workers for this position.";
            assert.throws(() => companyAdministration.hiringEmployee("test"));
        });

        it("Shoul return correct message if years of experiance is less than 3", () => {
            let expectMsg = "Pesho is not approved for this position.";
            assert.equal(companyAdministration.hiringEmployee("Pesho", "Programmer", 2), expectMsg);
        });

        it("Should return correct message if years of experience is greater than or equal to 3", () => {
            let expectMsg = "Pesho was successfully hired for the position Programmer.";
            assert.equal(companyAdministration.hiringEmployee("Pesho", "Programmer", 4), expectMsg);
            assert.equal(companyAdministration.hiringEmployee("Pesho", "Programmer", 3), expectMsg);
        });
    });

    describe("calculateSalary tests", () => {
        it("Should throw error if param is not a number or a negative number", () => {
            let expectMsg = `Invalid hours`;
            assert.throws(() => companyAdministration.calculateSalary('test'), expectMsg);
            assert.throws(() => companyAdministration.calculateSalary(-1), expectMsg);
        });

        it("Should return correct salary if employee not works more than 160 hours", () => {
            assert.equal(companyAdministration.calculateSalary(60), 900);
            assert.equal(companyAdministration.calculateSalary(140), 2100);
            assert.equal(companyAdministration.calculateSalary(0), 0);
        });

        it("Should add a bonus if employee has been working for more than 160 hours", () => {
            assert.equal(companyAdministration.calculateSalary(161), 3415);
            assert.equal(companyAdministration.calculateSalary(180), 3700);
        });
    });

    describe("firedEmployee tests", () => {
        it("Should throw error if params is not a correct type", () => {
            assert.throws(() => companyAdministration.firedEmployee("test", "test"));
            assert.throws(() => companyAdministration.firedEmployee("test", 1));
            assert.throws(() => companyAdministration.firedEmployee([], "test"));
        });

        it("Should throw error if index is not valid", () => {
            assert.throws(() => companyAdministration.firedEmployee(["test"], 1));
            assert.throws(() => companyAdministration.firedEmployee(["test"], -12));
            assert.throws(() => companyAdministration.firedEmployee(["test"], 2));
        });

        it("Should remove current employee", () => {
            let arr = ["Petar", "Ivan", "George"];
            let expectMsg = "Petar, Ivan";
            assert.equal(companyAdministration.firedEmployee(arr, 2), expectMsg);
            expectMsg = "Petar, George";
            assert.equal(companyAdministration.firedEmployee(arr, 1), expectMsg);
            expectMsg = "Ivan, George";
            assert.equal(companyAdministration.firedEmployee(arr, 0), expectMsg);
            assert.equal(companyAdministration.firedEmployee(["Peter", "Ivan"], 0), "Ivan");
        });
    });
});