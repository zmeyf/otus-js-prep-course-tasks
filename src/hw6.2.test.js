const isWord = require('./hw6.2.js')

describe('identifies if the string is a word', () => {
    it('"cats and dogs" is not a word', () => {
        const result = isWord('cats and dogs');
        expect(result).toBe(false);
    });
    it('"Summer" is a word', () => {
        const result = isWord('Summer');
        expect(result).toBe(true);
    });
    it('" " is not a word', () => {
        const result = isWord(' ');
        expect(result).toBe(false);
    });
    it('An empty string is not defined', () => {
        const result = isWord('');
        expect(result).toBe("Not defined");
    });
});
