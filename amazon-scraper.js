'use strict';

const { isAmazonSearchURL } = require('./util/validator');
const { amazonSearchScraper } = require('./scraper/amazon-search-scraper');
const { analyzeProducts, printResults } = require('./util/utils');

(async () => {
    try {
        // Get arg URL from command line
        const { url } = require('yargs').argv;

        if (isAmazonSearchURL(url)) {
            // Scrap amazon result page and return raw product data and scrapRate to measure the quality of the 
            // collected data. As scrapping is very dynamic and depends on external webs site structure, we need 
            // to monitoring the results to determine effective ways to increase efficiency and quality.  
            console.log('Scraping Amazon search page...');
            const { products, scrapRate } = await amazonSearchScraper(url);

            console.log('Analyzing Product Data...');
            const { cheapestProductURL, highestRatingProductURL, soonestArrivingProductURL } = analyzeProducts(products, url);
            
            console.log('Results:');
            printResults(cheapestProductURL, highestRatingProductURL, soonestArrivingProductURL, scrapRate);
        } else {
            console.log('An amazon search url (US or CAN) as an argument is required, using the following format --url=\'https://www.amazon.{com|ca}/s{searchString}\'');
        }
    } catch (error) {
        console.log(error);
    }
})();