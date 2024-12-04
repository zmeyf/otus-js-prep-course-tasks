const addTwoNumbers = require('./addition.js');


describe ('should add two numbers', () => {
    it('adds 5 and 10', () => {
        const logSpy = jest.spyOn(console, 'log').mockImplementation();
        addTwoNumbers (5, 10);

        expect(logSpy).toHaveBeenCalledWith(15);
        logSpy.mockRestore();
    });
});