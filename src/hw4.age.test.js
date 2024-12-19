const addAge = require('./hw4.age.js')

describe('add an age to the object', () => {
    it('age in the object = 18', () => {
    const logSpy = jest.spyOn(console, 'log').mockImplementation();
    addAge({name: 'John',},18);
    expect(logSpy).toHaveBeenCalledWith({ name: 'John', age: 18 });
    logSpy.mockRestore();
    });
});
