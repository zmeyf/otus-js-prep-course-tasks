/**
 * @jest-environment jsdom
 */

const hw7Module = require('./hw7.js');

describe ('the page with the text of 3 to 5 paragraphs', () => {

    beforeEach(() => {
        const cont = document.createElement("div")
        cont.setAttribute("id", "testPage");
        document.querySelector("body").appendChild(cont)
        hw7Module.fiveParagraphs(cont);

    });
    it('three paragraphs should exist', () => {
        const el = document.querySelector('body');
        const bd = el.querySelector( '#testPage')
        const par = bd.querySelector("p")
        expect((par.querySelectorAll("p").length === 3));
    });
    it('the button should exist', () => {
        const el = document.querySelector('body');
        const bd = el.querySelector( '#testPage')
        const bt = bd.querySelector('.button')
        expect(bt).toBeTruthy();
   });
    it('the input field should exist', () => {
        const el = document.querySelector('body');
        const bd = el.querySelector( '#testPage')
        expect(bd.querySelector('.text-field')).toBeTruthy();
    });
    it('if the input field is empty, the button should be hidden', () => {
        const el = document.querySelector('body');
        const bd = el.querySelector( '#testPage')
        const bt = bd.querySelector('.button')
        const input = bd.querySelector('.text-field');
        input.value = 0;
        expect(bt.hidden).toBeTruthy();
    });
    it('one paragraph should be added', () => {
        const el = document.querySelector('body');
        const bd = el.querySelector( '#testPage')
        const bt = bd.querySelector('.button')
        const input = bd.querySelector('.text-field');
        input.value = "abc";
        bt.click()
        expect(bd.querySelectorAll('p').length === 4);
        // expect(bd.querySelectorAll('p')[3].innerHTML).toBe("abc");
    });
    it('there should be no more than five paragraphs', () => {
        const el = document.querySelector('body');
        const bd = el.querySelector( '#testPage')
        const bt = bd.querySelector('.button')
        const input = bd.querySelector('.text-field');
        input.value = 'abc';
        bt.click()
        input.value = 'abc';
        bt.click()
        input.value = 'abc';
        bt.click()
        expect(bd.querySelectorAll('p').length === 5);
    });
});