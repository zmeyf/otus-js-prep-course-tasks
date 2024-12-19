const powNum1 = require('./hw6.3.js');

describe('raises a number to a power', () => {
    it('2**2 = 4', () => {
        const result = powNum1(2, 2);
        expect(result).toBe(4);
    });
    it('2**2 = 4', () => {
        const result = powNum1(5, 4);
        expect(result).toBe(625);
    });
});