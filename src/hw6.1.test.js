const diff = require('./hw6.1.js')
// const isWord = require('./hw6.1.js')
// const powNum1 = require('./hw6.1.js')
// const powNum2 = require('./hw6.1.js')

describe('gives a difference between two numbers', () => {
    it('5, 145 --> 140', () => {
        const result = diff(5, 145);
        expect(result).toBe(140);
    });
});