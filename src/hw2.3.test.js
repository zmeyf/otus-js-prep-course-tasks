const circleInSquare = require('./hw2.3.js')

describe ('checks if a circle fits into a square', () => {
    it ('a circle area = 2, a square area = 10 --> fits --> true', () => {
        const logSpy = jest.spyOn(console, 'log').mockImplementation();
        circleInSquare(2, 10);
        expect(logSpy).toHaveBeenCalledWith(true);
        logSpy.mockRestore();
    });
    it ('a circle area = 20, a square area = 10 --> does not fit --> false', () => {
        const logSpy = jest.spyOn(console, 'log').mockImplementation();
        circleInSquare(20, 10);
        expect(logSpy).toHaveBeenCalledWith(false);
        logSpy.mockRestore();
    });

});