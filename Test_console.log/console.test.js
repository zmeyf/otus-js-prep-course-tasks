// import { console } from 'jest';
// import { cons } from './console.js';
const cons = require('./console.js');

jest.spyOn(console, 'log').mockImplementation(() => {
    return cons();
});

expect(cons()).toEqual('Hello, World!');