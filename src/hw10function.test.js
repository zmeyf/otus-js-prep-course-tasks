/**
 * @jest-environment jsdom
 */

const  defineTheString= require('./hw10function.js')

describe('define the string', () => {
    const logSpy = jest.spyOn(console, 'log').mockImplementation();
    it('should define a date', () => {
        defineTheString('2015/01/25')
        expect(logSpy).toHaveBeenCalledWith('It\'s a date!')
    });
    it('should define an email', () => {
        defineTheString('abc@gmail.com')
        expect(logSpy).toHaveBeenCalledWith('It\'s an email!')
    });
    it('should define a phone number', () => {
        defineTheString('+7-921-159-75-53')
        expect(logSpy).toHaveBeenCalledWith('It\'s a phone number!');
    });
    it('should not define the data', () => {
        defineTheString('skvps,345kl')
        expect(logSpy).toHaveBeenCalledWith('The data is undefined!');
    });
});



