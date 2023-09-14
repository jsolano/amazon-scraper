const { describe, expect, test} = require('@jest/globals');
const { amazonSearchScraper } = require('../../scraper/amazon-search-scraper');


describe('amazonSearchScraper async function', () => {
    test('Skip on null amazonURL param', async () => {
        await expect(amazonSearchScraper()).rejects.toMatch('Error while scraping: amazonSearchURL is null');
    });

    test('Skip on non amazonURL param', async () => {
        const responseData = {"products": [], "scrapRate": "NaN%", "timeScrapElapsed": 0};
        await expect(amazonSearchScraper('https://www.google.ca/')).resolves.toEqual(responseData);
    });

    test('Return a list of scraped products', async () => {
        await expect(amazonSearchScraper('https://www.amazon.ca/s?k=headphones&crid=RTA3XZQLNO7X&sprefix=head%2Caps%2C111&ref=nb_sb_ss_ts-doa-p_1_4')).resolves.toBeTruthy();
    });
});