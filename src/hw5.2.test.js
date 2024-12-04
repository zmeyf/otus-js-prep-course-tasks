const doubleArray = require('./hw5.2.js')

describe('double each integer in the array', () => {
    it('[10, 20, 30, 40, 50, 60, 70, 80, 90, 100] --> [20,  40,  60,  80, 100, 120, 140, 160, 180, 200]', () => {
        const logSpy = jest.spyOn(console, 'log').mockImplementation();
        doubleArray([10, 20, 30, 40, 50, 60, 70, 80, 90, 100]);

        expect(logSpy).toHaveBeenCalledWith([20,  40,  60,  80, 100, 120, 140, 160, 180, 200]);
        logSpy.mockRestore();
    });
});
