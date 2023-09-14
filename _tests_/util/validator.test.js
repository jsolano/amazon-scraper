const { describe, expect, test} = require('@jest/globals');
const { isAmazonSearchURL } = require('../../util/validator');    

describe('isAmazonSearchURL function', () => {
    test('Skip on null url param', () => {
        expect(isAmazonSearchURL()).toBeFalsy();
    });

    test('Skip on non url string param', () => {
        expect(isAmazonSearchURL('something')).toBeFalsy();
    });

    test('Accept an amazon search URL', () => {
        expect(isAmazonSearchURL('https://www.amazon.ca/s?k=headphones&crid=RTA3XZQLNO7X&sprefix=head%2Caps%2C111&ref=nb_sb_ss_ts-doa-p_1_4')).toBeTruthy();
    });

    test('Reject valid non amazon URL ', () => {
        expect(isAmazonSearchURL('https://www.google.ca/')).toBeFalsy();
    });
});