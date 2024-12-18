const triangle = require('./hw9.1.js')

describe('Is it a right triangle?', () => {
    it('A triangle with sides 3,4,5 is right', () => {
        const logSpy = jest.spyOn (console, 'log').mockImplementation();
        triangle(3,4,5)
        expect(logSpy).toHaveBeenCalledWith("This is a right triangle.")
        logSpy.mockRestore();
    });
    it('A triangle with sides 3,4,5 is right', () => {
        const logSpy = jest.spyOn (console, 'log').mockImplementation();
        triangle(5,10,15)
        expect(logSpy).toHaveBeenCalledWith("This is not a right triangle.")
        logSpy.mockRestore();
    });
});