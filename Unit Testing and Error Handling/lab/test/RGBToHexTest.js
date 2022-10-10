const { rgbToHexColor } = require('../06.RGBToHex');
const { expect } = require('chai');

describe('rgbToHex', () => {
    it('should function take three arguments', () => {
        let input = 'red';
        let res = rgbToHexColor(input);
        expect(res).to.be.undefined;
    });

    it('should retunr undefined if any of the arguments are not expected range', () => {
        let input1 = 10;
        let input2 = 20;
        let input3 = 300;
        let res = rgbToHexColor(input1, input2, input3);
        expect(res).to.be.undefined;
    });

    it('should return undefined of any of arguments are of an invalid type',() => {
        let input1 = 'red';
        let input2 = 20;
        let input3 = 30;
        let res = rgbToHexColor(input1, input2, input3);
        expect(res).to.be.undefined;
    });

    it('should return the same color in hexadecimal format', () =>{
        let input1 = 10;
        let input2 = 20;
        let input3 = 30;
        let res = rgbToHexColor(input1, input2, input3);
        expect(res).to.be.equals('#0A141E');
    });
});