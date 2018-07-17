const expect = require('chai').expect;
const tempConverter = require('../src/tempConverter');

describe('Temperature Converter', () => {
    it('exists with 2 Conversion functions', () => {
        expect(tempConverter).to.be.ok;
        expect(typeof tempConverter.ConvertToCfromF).to.equal("function");
        expect(typeof tempConverter.ConvertToFfromC).to.equal("function");
        }
    );

    describe('Converts to C from F', () => {
        it('takes in a valid argument of type number', () => {
            expect(() => tempConverter.ConvertToCfromF()).throws("Argument must be a valid number");
        });
        it('returns 0 for converting 32 F', () => {
            expect(tempConverter.ConvertToCfromF(32)).to.equal(0);
        });
        it('returns 20 for converting 68 F', () => {
            expect(tempConverter.ConvertToCfromF(68)).to.equal(20);
        });

    });

    describe('Converts to F from C', () => {
        it('takes in a valid argument of type number', () => {
            expect(() => tempConverter.ConvertToFfromC()).throws("Argument must be a valid number");
        });
        it('returns 32 for converting 0 C', () => {
            expect(tempConverter.ConvertToFfromC(0)).to.equal(32);
        });
        it('returns 68 for converting 20 C', () => {
            expect(tempConverter.ConvertToFfromC(20)).to.equal(68);
        });
    });
});