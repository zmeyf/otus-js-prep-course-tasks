const identifyMonth = require('./hw2.2.js')

describe('gives a month by a number', () => {
    it('2 --> February', () => {
        const logSpy = jest.spyOn(console, 'log').mockImplementation();
        identifyMonth(2);
        expect(logSpy).toHaveBeenCalledWith('February');
        logSpy.mockRestore();
    });
    it('A number is more than 12', () => {
        const logSpy = jest.spyOn(console, 'log').mockImplementation();
        identifyMonth(13);
        expect(logSpy).toHaveBeenCalledWith('Try to write a number again');
        logSpy.mockRestore();
    });
});