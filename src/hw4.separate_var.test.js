const sepVars = require('./hw4.separate_var.js')

describe('makes separate variables', () => {
    it('variables name, age, role', () => {
        const logSpy = jest.spyOn(console, 'log').mockImplementation();
        sepVars({ name: 'John', age: 18, role: 'admin' });
        expect(logSpy).toHaveBeenCalledWith('John', 18, 'admin');
        logSpy.mockRestore();
    });
});