const { bookSelection } = require("../03.Bookselection");
const { assert } = require("chai");

describe("Tests …", function () {
    describe("isGenreSuitable", () => {
        it("Should return correct message", () => {
            let expect = "Books with Horror genre are not suitable for kids at 12 age";
            assert.equal(bookSelection.isGenreSuitable("Horror", 12), expect);
            expect = "Books with Thriller genre are not suitable for kids at 10 age";
            assert.equal(bookSelection.isGenreSuitable("Thriller", 10), expect);
        });

        it("Should return correct message if books is not Thriller ot Horror and age is greater than 12", () => {
            let expect = "Those books are suitable";
            assert.equal(bookSelection.isGenreSuitable("Test", 10), expect);
            assert.equal(bookSelection.isGenreSuitable("Horror", 15), expect);
        });
    });

    describe("isItAffordable test", () => {
        it("Should throws error if pararms is not correct type", () => {
            assert.throws(()=> bookSelection.isItAffordable("test", "test"));
            assert.throws(()=> bookSelection.isItAffordable("test", 10));
            assert.throws(()=> bookSelection.isItAffordable(10, "test"));
        });

        it("Should return message if budget is less than 0", () => {
            let expect = "You don't have enough money";
            assert.equal(bookSelection.isItAffordable(10, 5), expect);
        });

        it("Should return correct message if budget is enough to buy books", () => {
            let expect = "Book bought. You have 5$ left";
            assert.equal(bookSelection.isItAffordable(5, 10), expect);
        });
    });

    describe("suitableTitles tests", () => {
        it("Shuuld throws error if params is not correct type", () => {
            assert.throws(() => bookSelection.suitableTitles("test", 10));
            assert.throws(() => bookSelection.suitableTitles("test", "test"));
            assert.throws(() => bookSelection.suitableTitles([], 10));
        });

        it("Should return correct books by given genre", () => {
            let books = [{title: "Test", genre: "Thriller"}, {title: "Test1", genre: "Horror"}];
            let expect = ["Test1"];
            assert.equal(bookSelection.suitableTitles(books, "Horror").join(" "), expect.join(" "));
            assert.equal(bookSelection.suitableTitles(books, "Comedy").join(" "), [].join(" "));
        });
    });
});