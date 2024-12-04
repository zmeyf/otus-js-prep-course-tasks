const digitsSum = require('./hw1.3.js')

describe ('adds digits of a 3-digit number', () => {
    it ('123 --> 1 + 2 + 3 = 6', () => {
        const logSpy = jest.spyOn(console, 'log').mockImplementation();
        digitsSum(123);
        expect(logSpy).toHaveBeenCalledWith(6);
        logSpy.mockRestore();
    });
    it ('909 --> 9 + 0 + 9 = 18', () => {
        const logSpy = jest.spyOn(console, 'log').mockImplementation();
        digitsSum(909);
        expect(logSpy).toHaveBeenCalledWith(18);
        logSpy.mockRestore();
    });
});