'use strict';

const URL = require('url').URL;
const amazonHostNames = ['www.amazon.com','amazon.com', 'www.amazon.ca', 'amazon.ca'];

exports.isAmazonSearchURL = (urlString) => {
    if (!urlString) return false;
    try {
        const amazonSearchURL = new URL(urlString);
        if (amazonHostNames.includes(amazonSearchURL.hostname) && amazonSearchURL.pathname === '/s') {
            return true;
        } else {
            return false;
        }
    } catch (e) {
        return false;
    }
}