const maxAndMin = require('./hw5.3.js')

describe('finds the biggest and the smallest numbers in the array', () => {
    it('[20,  40,  60,  80, 100, 120, 140, 160, 180, 200] --> 200, 20', () => {
        const logSpy = jest.spyOn(console, 'log').mockImplementation();
        maxAndMin([20,  40,  60,  80, 100, 120, 140, 160, 180, 200]);

        expect(logSpy).toHaveBeenCalledWith(200, 20);
        logSpy.mockRestore();
    });
});
