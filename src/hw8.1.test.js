const defineAweekday = require('./hw8.1.js');

describe ('should return a weekday by a date', () => {
    it('should return "Tuesday" for 17.12.2024', () => {
        let input = "17.12.2024";
        const logSpy = jest.spyOn(console, 'log').mockImplementation();
        defineAweekday (input);
        expect(logSpy).toHaveBeenCalledWith('The weekday of your date is Tuesday.');
        logSpy.mockRestore();
    });
});