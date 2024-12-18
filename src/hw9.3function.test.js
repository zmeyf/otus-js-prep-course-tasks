/**
 * @jest-environment jsdom
 */

const equation = require('./hw9.3function.js');

describe('should find roots for a quadratic equation', () => {
    it('should return "There are no roots...', () => {
        const logSpy = jest.spyOn(console, 'log').mockImplementation();
        equation('5 1 7');
        expect(logSpy).toHaveBeenCalledWith("There are no roots for this equation.");
    });
    it('for "4 6 0" should return "0, -1,5)', () => {
        const logSpy = jest.spyOn(console, 'log').mockImplementation();
        equation('4 6 0');
        expect(logSpy).toHaveBeenCalledWith("0, -1.5");
    });
});