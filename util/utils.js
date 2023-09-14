'use strict'
const moment = require('moment');

const URL = require('url').URL;

exports.getPrice = (price) => {
    if (!price || (typeof price !== 'string')) return;
    return Number(price.replace('$', ''));
}

exports.getAmazonProductLink = (hostName, path) => {
    if (!hostName || !path) return; 
    return `${hostName}${path}`;
}

exports.getDaysToDelivery = (soonestArriving) => {
    if (!soonestArriving) return;
    const now = moment();
    const currentYear = now.year();
    // Need to remove day from the scrapped text to create moment format 'MMM DD, YYYY'
    const deliveryDate = moment(`${soonestArriving.split(',')[1]}, ${currentYear}`, 'MMM DD, YYYY');
    return deliveryDate.diff(now, 'days');
}

exports.analyzeProducts = (products, url) => {
    if (!products || !url) return;

    const amazonSearchURL = new URL(url);

    let cheapestPrice = 1000000; // close to zero will be great!
    let highestRating = 0; // 5.0 is the highest
    let soonestArriving = 100;  // days

    let cheapestProductURL;
    let highestRatingProductURL;
    let soonestArrivingProductURL;

    products.forEach(product => {
        const productPrice = this.getPrice(product.price);
        if (productPrice < cheapestPrice) {
            cheapestPrice = productPrice;
            cheapestProductURL = this.getAmazonProductLink(amazonSearchURL.hostname, product.link);
        }

        const productRating = Number(product.rating);
        if (productRating > highestRating) {
            highestRating = productRating;
            highestRatingProductURL = this.getAmazonProductLink(amazonSearchURL.hostname, product.link);
        }

        const productSoonestArriving = this.getDaysToDelivery(product.soonerDelivery);
        if (productSoonestArriving < soonestArriving) {
            soonestArriving = productSoonestArriving;
            soonestArrivingProductURL = this.getAmazonProductLink(amazonSearchURL.hostname, product.link);
        }
    });

    return ({ cheapestProductURL, highestRatingProductURL, soonestArrivingProductURL });
}

exports.printResults = (productScores, scrapRate, timeScrapElapsed) => {
    if (!productScores || !scrapRate || !timeScrapElapsed) return;

    console.log(` `);
    console.log('*********************************************************************************************************');
    console.log(` `);
    console.log(` Scraping Rate Quality: ${scrapRate},  Total time taken: ${timeScrapElapsed} milliseconds`);  
    console.log(` `);
    console.log(` Cheapest Product: ${productScores.cheapestProductURL}`);
    console.log(` `);
    console.log(` Highest Rating Product: ${productScores.highestRatingProductURL}`);
    console.log(` `);
    console.log(` Soonest Arriving Product: ${productScores.soonestArrivingProductURL}`);
    console.log(` `);
    console.log('*********************************************************************************************************');
    console.log(` `);
}