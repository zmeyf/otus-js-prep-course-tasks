const whoIsYounger = require('./hw8.3.js')

describe('whoIsYounger', () => {
    it('for user1 birthday 08.05.1985 and user 2 birthday 10.02.1979 should return that user 1 is younger', () => {
        const logSpy = jest.spyOn(console, 'log').mockImplementation();
        whoIsYounger('08.05.1985', '10.02.1979')
        expect(logSpy).toHaveBeenCalledWith('User1 is younger.')
    });
    it('for user1 birthday 08.05.1910 and user 2 birthday 10.02.1979 should return that user 1 is younger', () => {
        const logSpy = jest.spyOn(console, 'log').mockImplementation();
        whoIsYounger('08.05.1910', '10.02.1979')
        expect(logSpy).toHaveBeenCalledWith('User2 is younger.')
    });
    it('for user1 birthday 08.05.1910 and user 2 birthday 10.02.1979 should return that nobody is younger', () => {
        const logSpy = jest.spyOn(console, 'log').mockImplementation();
        whoIsYounger('08.05.2015', '08.05.2015')
        expect(logSpy).toHaveBeenCalledWith('Nobody is younger')
    });
});



