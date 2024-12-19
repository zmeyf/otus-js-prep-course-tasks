const circle = require("./hw9.2function.js");

describe('should return a circumference and an area for a circle radius given', () => {
    it('should return "Enter a correct number!" for not a number', () => {
        const logSpy = jest.spyOn (console, 'log').mockImplementation();
        circle('a')
        expect(logSpy).toHaveBeenCalledWith("Enter a correct number!")
        logSpy.mockRestore();
    });
    it('should return "The circumference is 18.84955592153876. The area of the circle is 28.274333882308138." for raduis=3', () => {
        const logSpy = jest.spyOn (console, 'log').mockImplementation();
        circle(3)
        expect(logSpy).toHaveBeenCalledWith(`The circumference is 18.84955592153876.\nThe area of the circle is 28.274333882308138.`)
        logSpy.mockRestore();
    });
});