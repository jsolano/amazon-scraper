const { describe, expect, test} = require('@jest/globals');
const { getPrice,
        getAmazonProductLink,
        getDaysToDelivery,
        printResults,
        analyzeProducts } = require('../../util/utils');
const { products, productScores } = require('./data');
const moment = require('moment');
const now = moment();
const currentYear = now.year();
const tomorrow = now.add(1, 'days').format("ddd, MMM DD");      

describe('getPrice function', () => {
    test('Skip on null price param', () => {
        expect(getPrice()).toBeUndefined();
    });

    test('Skip on non string price param', () => {
        expect(getPrice(100)).toBeUndefined();
    });

    test('Return the number 100 of $100 string', () => {
        expect(getPrice('$100')).toBe(100);
    });
});

describe('getAmazonProductLink function', () => {
    const hostName = 'www.amazon.ca';
    const path = '/Koss-Portable-Headphone-Adjustable-Headband/dp/B00KHAB8RW/ref=sr_1_16?crid=RTA3XZQLNO7X&keywords=headphones&qid=1694646424&sprefix=head%2Caps%2C111&sr=8-16';
    const amazonLink = `${hostName}${path}`;
    test('Skip on null hostName param', () => {
        expect(getAmazonProductLink(null, path)).toBeUndefined();
    });

    test('Skip on null path param', () => {
        expect(getAmazonProductLink(hostName, null)).toBeUndefined();
    });

    test('Return a valid amazon link', () => {
        expect(getAmazonProductLink(hostName, path)).toBe(amazonLink);
    });
});

describe('getDaysToDelivery function', () => { 
    test('Skip on null soonestArriving param', () => {
        expect(getDaysToDelivery(null)).toBeUndefined();
    });

    test('Return a valid delivery day number', () => {
        expect(getDaysToDelivery(tomorrow)).toBeGreaterThanOrEqual(0);
    });
});

describe('printResults function', () => {
    const scrapRate=  '95%';
    const timeScrapElapsed = 2;
    console.log = () => {};
    test('Skip on null productScores param', () => {
        expect(printResults(null, scrapRate, timeScrapElapsed)).toBeUndefined();
    });

    test('Skip on null scrapRate param', () => {
        expect(printResults(productScores, null, timeScrapElapsed)).toBeUndefined();
    });

    test('Skip on null scrapRate param', () => {
        expect(printResults(productScores, scrapRate, null)).toBeUndefined();
    });

    test('Print console results', () => {
        expect(printResults(productScores, scrapRate, timeScrapElapsed)).toBeFalsy();
    });
});

describe('analyzeProducts function', () => {
    const url=  'https://www.amazon.ca/s?k=headphones&crid=RTA3XZQLNO7X&sprefix=head%2Caps%2C111&ref=nb_sb_ss_ts-doa-p_1_4';
   
    test('Skip on null product param', () => {
        expect(analyzeProducts(null, url)).toBeUndefined();
    });

    test('Skip on null url param', () => {
        expect(analyzeProducts(products, null)).toBeUndefined();
    });

    test('Return a valid productScores Object', () => {
        expect(analyzeProducts(products, url)).toEqual(productScores);
    });
});