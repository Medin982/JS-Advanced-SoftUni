const { isSymmetric } = require('../05.CheckForSymmetry');
const { expect } = require('chai');

describe('isSymetric', () => {
    it('should function isnt take array as an argument and return false', () => {
        let input = 'Is not array';
        let res = isSymmetric(input);
        expect(res).to.be.false;
    });

    it('should return false on isSymmetric("hello")', () => {
        expect(isSymmetric("hello")).to.be.false;
    });

    it('should return true on isSymmetric([])', () => {
        expect(isSymmetric([])).to.be.true;
    });

    it('should return true if the array is symmtric', () => {
        let input = [1, 2, 1];
        let res = isSymmetric(input);
        expect(res).to.be.true;
    });

    it("should return false if array isn't symmetric", () => {
        let input = [1, 2, 3];
        let res = isSymmetric(input);
        expect(res).to.be.false;
    })
});