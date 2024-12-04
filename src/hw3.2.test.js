const multiplicationTableFor7 = require('./hw3.2.js')

describe('shows multiplication table for 7', () => {
    it('7 x 1 = 7, ...7 x 9 = 63', () => {
        const logSpy = jest.spyOn(console, 'log').mockImplementation();
        multiplicationTableFor7();

        expect(logSpy).toHaveBeenCalledTimes(9);
        expect(logSpy).toHaveBeenCalledWith("7 x 1 = 7");
        expect(logSpy).toHaveBeenCalledWith("7 x 2 = 14");
        expect(logSpy).toHaveBeenCalledWith("7 x 3 = 21");
        expect(logSpy).toHaveBeenCalledWith("7 x 4 = 28");
        expect(logSpy).toHaveBeenCalledWith("7 x 5 = 35");
        expect(logSpy).toHaveBeenCalledWith("7 x 6 = 42");
        expect(logSpy).toHaveBeenCalledWith("7 x 7 = 49");
        expect(logSpy).toHaveBeenCalledWith("7 x 8 = 56");
        expect(logSpy).toHaveBeenCalledWith("7 x 9 = 63");
        logSpy.mockRestore();
    });
});
