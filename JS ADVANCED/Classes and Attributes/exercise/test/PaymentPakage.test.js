const { PaymentPackage } = require("../12.PaymentPackage");
const { assert } = require("chai");

describe("package", () => {
    let paymentPackage;
    beforeEach(() => {
        paymentPackage = new PaymentPackage("Gosho", 10);
    });

    it("Name should be correct", () => {
        assert.equal(paymentPackage._name, "Gosho");
    });

    it("Value should be correct", () => {
        assert.equal(paymentPackage._value, 10);
    });

    it("VAT should be correct", () => {
        assert.equal(paymentPackage._VAT, 20);
        assert.equal(typeof (paymentPackage._VAT), "number");
    });

    it("Active should be correct", () => {
        assert.equal(paymentPackage._active, true);
        assert.isBoolean(paymentPackage._active);
    });
});

describe("Getters test", () => {
    let paymentPackage;
    beforeEach(() => {
        paymentPackage = new PaymentPackage("Gosho", 10);
    });

    it("Instance should be return correct name", () => {
        assert.equal(paymentPackage.name, "Gosho");
    });

    it("Instance should be return correct value", () => {
        assert.equal(paymentPackage.value, 10);
    });

    it("Instance should be return correct VAT", () => {
        assert.equal(paymentPackage.VAT, 20);
    });

    it("Instance should be return correct active", () => {
        assert.isTrue(paymentPackage.active);
    })
});

describe("Setters test", () => {
    let paymentPackage;
    beforeEach(() => {
        paymentPackage = new PaymentPackage("Gosho", 10);
    });

    it("Set correct name", () => {
        assert.equal(paymentPackage.name, "Gosho");
        paymentPackage.name = "Test";
        assert.equal(paymentPackage.name, "Test");
    })

    it("Should throw error if type is not string(name)", () => {
        assert.throws((() => new PaymentPackage(10, 10)));
    });

    it("Should throws error if length is less than 0(name)", () => {
        assert.throws(() => new PaymentPackage("", 10));
    });

    it("Set correct value", () => {
        assert.equal(paymentPackage.value, 10);
        paymentPackage.value = 20;
        assert.equal(paymentPackage.value, 20);
    })

    it("Should throws error if type is not number(value)", () => {
        assert.throws(() => new PaymentPackage("Test", "Test"));
    });

    it("Should throws error if value is negative number(value)", () => {
        assert.throws(() => { new PaymentPackage("Test", -10) });
    });

    it("Set correct VAT", () => {
        assert.equal(paymentPackage.VAT, 20);
        paymentPackage.VAT = 22;
        assert.equal(paymentPackage.VAT, 22);
    });

    it("Should throws error if type is not number(VAT)", () => {
        assert.throws(() => { paymentPackage.VAT = "Test" });
    });

    it("Should throws error if value is negative number(VAT)", () => {
        assert.throws(() => { paymentPackage.VAT = -20 });
    });

    it("Should throws error if type is not boolean(active)", () => {
        assert.throws(() => { paymentPackage.active = "Test" });
    });
});

describe("ToSting test", () => {
    it("Should return correct output", () => {
        let expect = "Package: Test\n- Value (excl. VAT): 10\n- Value (VAT 20%): 12";
        let package = new PaymentPackage("Test", 10);
        assert.equal(package.toString(), expect);
    })
});