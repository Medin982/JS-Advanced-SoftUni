const {sum} = require('../04.SumOfNumbers');
const {expect} = require('chai');

describe('sum', () =>{
    it('should return the sum of the values of all elements inside the array', () =>{
        let input = [1, 2, 3];

        let res = sum(input);

        expect(res).to.be.equal(6);
    });
});