const sumOfIntegers = require('./hw5.1.js')

describe('sum of 10 integers in the array', () => {
    it('10+20+30+40+50+60+70+80+90+100 = 550', () => {
        const logSpy = jest.spyOn(console, 'log').mockImplementation();
        sumOfIntegers([10, 20, 30, 40, 50, 60, 70, 80, 90, 100]);

        expect(logSpy).toHaveBeenCalledWith(550);
        logSpy.mockRestore();
    });
});