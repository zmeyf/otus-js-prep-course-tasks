sumOfIntegers = require('./hw3.1.js')

describe('adds integers from 50 to 100 inclusively', () => {
    it('sum of numbers from 50 to 100 must be 3825', () => {
        const logSpy = jest.spyOn(console, 'log').mockImplementation();
        sumOfIntegers();
        expect(logSpy).toHaveBeenCalledWith(3825);
        logSpy.mockRestore();
    });
});