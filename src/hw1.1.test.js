const timesAndAdd = require('./hw1.1.js')

describe ('shows in console results of multiplication and sum of two numbers', () => {
    it('3 * 7 = 21, 3 + 7 = 10', () => {
        const logSpy = jest.spyOn(console, 'log').mockImplementation();
        timesAndAdd(3, 7);

        expect(logSpy).toHaveBeenCalledWith(21, 10);
        logSpy.mockRestore();
    });
    it('-5 * 2 = -10, -5 + 2 = -3', () => {
        const logSpy = jest.spyOn(console, 'log').mockImplementation();
        timesAndAdd(-5, 2);

        expect(logSpy).toHaveBeenCalledWith(-10, -3);
        logSpy.mockRestore();
    })
});