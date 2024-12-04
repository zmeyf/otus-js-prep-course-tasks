const addRole = require('./hw4.role.js')

describe('add a role to the object', () => {
    it('role is admin', () => {
        const logSpy = jest.spyOn(console, 'log').mockImplementation();
        addRole({name: 'John', age: 18,}, 'admin');

        expect(logSpy).toHaveBeenCalledWith({ name: 'John', age: 18, role: 'admin' });
        logSpy.mockRestore();
    });
});
