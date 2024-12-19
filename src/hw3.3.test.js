const arithmeticMean = require('./hw3.3.js')

describe('gives the arithmetic mean of odd integers in the range from 0 to the number given', () => {
    it('6 --> 3', () =>{
    const logSpy = jest.spyOn(console, 'log').mockImplementation();
    arithmeticMean(6);
    expect(logSpy).toHaveBeenCalledWith(3);
    logSpy.mockRestore();
    });
});