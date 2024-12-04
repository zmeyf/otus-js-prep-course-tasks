// import { console } from 'jest';
// import { cons } from './console.js';
const cons = require('./console.js');

describe ('Test cons', () => {
    it('returns "Hello, World!"', () => {
        const logSpy = jest.spyOn(console, 'log').mockImplementation();
        cons();

        expect(logSpy).toHaveBeenCalledWith('Hello, World!');
        logSpy.mockRestore();
    });
});
