const theBiggestNumber = require('./hw2.1.js');

describe ('shows the biggest number', () => {
    it ('10 and 60 --> 60', () => {
        const logSpy = jest.spyOn(console, 'log').mockImplementation();
        theBiggestNumber(10, 60);
        expect(logSpy).toHaveBeenCalledWith(60);
        logSpy.mockRestore();
    });
    it ('10 and 10 --> 10', () => {
        const logSpy = jest.spyOn(console, 'log').mockImplementation();
        theBiggestNumber(10, 10);
        expect(logSpy).toHaveBeenCalledWith(10);
        logSpy.mockRestore();
    });
});