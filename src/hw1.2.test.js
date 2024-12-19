const addStringsLength = require('./hw1.2.js');

describe ('add lengths of two strings',() => {
    it('not empty strings', () => {
       const logSpy = jest.spyOn(console, 'log').mockImplementation();
       addStringsLength('abd%','tyuii')
       expect(logSpy).toHaveBeenCalledWith(9);
       logSpy.mockRestore();
    });
    it('with one empty string', () => {
        const logSpy = jest.spyOn(console, 'log').mockImplementation();
        addStringsLength('abd%','')
        expect(logSpy).toHaveBeenCalledWith(4);
        logSpy.mockRestore();
    });
    it('with both empty strings', () => {
        const logSpy = jest.spyOn(console, 'log').mockImplementation();
        addStringsLength('','')
        expect(logSpy).toHaveBeenCalledWith(0);
        logSpy.mockRestore();
    });
});