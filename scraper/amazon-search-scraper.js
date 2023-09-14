'use strict';

const { firefox } = require('playwright');

exports.amazonSearchScraper = (amazonSearchURL) => new Promise(async (resolve, reject) => {
    if (!amazonSearchURL) reject('Error while scraping: amazonSearchURL is null');

    const browser = await firefox.launch();
    const context = await browser.newContext();
    const page = await context.newPage();
    try {
        await page.goto(amazonSearchURL);
        //scrap all result products
        
        const { products, productScrapCount, timeScrapElapsed } = await page.$$eval('.s-card-container', allProducts => {
            const products = []
            const startScrapTime = Date.now();

            let productScrapCount = 0;
            allProducts.forEach((product) => {
                const title = product.querySelector('div.s-title-instructions-style h2 a span')?.innerText;
                productScrapCount +=  (typeof title === 'string') ? 0.2 : 0;

                const price = product.querySelector('div.s-price-instructions-style div a span.a-price span')?.innerText;
                productScrapCount +=  (typeof price === 'string') ? 0.2 : 0;

                const rating = product.querySelector('div.a-section.a-spacing-none.a-spacing-top-micro span.a-size-base')?.innerText;
                productScrapCount +=  (typeof rating === 'string') ? 0.2 : 0;

                const soonerDelivery = product.querySelectorAll('span.a-color-base.a-text-bold')[1]?.innerText;
                productScrapCount +=  (typeof soonerDelivery === 'string') ? 0.2 : 0;

                const link = product.querySelector('a.a-link-normal')?.getAttribute('href');
                productScrapCount +=  (typeof link === 'string') ? 0.2 : 0;
                products.push({ title, price, rating, soonerDelivery, link });
            });
            const endScrapTime = Date.now();
            const timeScrapElapsed = endScrapTime - startScrapTime;
            return { products, productScrapCount, timeScrapElapsed };
        })
        const scrapRate = `${Math.round((productScrapCount/products.length) * 100).toString()}%`;
        resolve({ products, scrapRate, timeScrapElapsed });
    } catch (error) {
        reject(`Error while scraping: ${error}`);
    } finally {
        await browser.close();
    }
});
