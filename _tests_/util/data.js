'use strict'
const moment = require('moment');
const now = moment();
const currentYear = now.year();
const tomorrow = now.add(1, 'days').format("ddd, MMM DD");
const afterTomorrow = now.add(2, 'days').format("ddd, MMM DD");

exports.products = JSON.parse(`
[
    {
        "title":"zihnic Bluetooth Headphones Over Ear, Foldable Wireless and Wired Stereo Headset Micro SD/TF, FM for iPhone/Samsung/iPad/PC/TV,Soft Earmuffs &Light Weight for Prolonged Wearing (Gold)",
        "price":"$34.99",
        "rating":"4.9",
        "soonerDelivery":"${afterTomorrow}",
        "link":"/gp/bestsellers/videogames/403538011/ref=sr_bs_53_403538011_1"
    },{
        "title":"Uliptz Wireless Bluetooth Headphones, 65H Playtime Over Ear Headphones with Microphone, 6EQ Sound Modes Wireless Headphones, Foldable Bluetooth 5.3 Headphones for Travel/Office/PC (Black)",
        "price":"$6.99",
        "rating":"4.4",
        "soonerDelivery":"${afterTomorrow}",
        "link":"/Bluetooth-Headphones-BERIBES-Microphone-Lightweight/dp/B0B8YNRS6D/ref=sr_1_15?crid=RTA3XZQLNO7X&keywords=headphones&qid=1694648057&sprefix=head%2Caps%2C111&sr=8-15"
    },
    {
        "title":"BERIBES Bluetooth Headphones Over Ear,65H Playtime and 6 EQ Modes Wireless Headphones with Microphone,Immersive Bass,HiFi Stereo,Foldable Lightweight Headset with Built-in HD Mic for Cellphone/PC/Ect.",
        "price":"$29.99",
        "rating":"4.4",
        "soonerDelivery":"${tomorrow}",
        "link":"/sspa/click?ie=UTF8&spc=MTo0MDg1OTU1ODM4MTQzNjIwOjE2OTQ2NDgwNTc6c3BfYXRmOjIwMDExNDkyNjUwODU5ODo6MDo6&url=%2FBERIBES-Bluetooth-Headphones-Microphone-Lightweight%2Fdp%2FB09LYF2ST7%2Fref%3Dsr_1_3_sspa%3Fcrid%3DRTA3XZQLNO7X%26keywords%3Dheadphones%26qid%3D1694648057%26sprefix%3Dhead%252Caps%252C111%26sr%3D8-3-spons%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9hdGY%26psc%3D1"
    }
]`);

exports.productScores = JSON.parse(' \
{ \
    "cheapestProductURL": "www.amazon.ca/Bluetooth-Headphones-BERIBES-Microphone-Lightweight/dp/B0B8YNRS6D/ref=sr_1_15?crid=RTA3XZQLNO7X&keywords=headphones&qid=1694648057&sprefix=head%2Caps%2C111&sr=8-15", \
    "highestRatingProductURL": "www.amazon.ca/gp/bestsellers/videogames/403538011/ref=sr_bs_53_403538011_1", \
    "soonestArrivingProductURL": "www.amazon.ca/sspa/click?ie=UTF8&spc=MTo0MDg1OTU1ODM4MTQzNjIwOjE2OTQ2NDgwNTc6c3BfYXRmOjIwMDExNDkyNjUwODU5ODo6MDo6&url=%2FBERIBES-Bluetooth-Headphones-Microphone-Lightweight%2Fdp%2FB09LYF2ST7%2Fref%3Dsr_1_3_sspa%3Fcrid%3DRTA3XZQLNO7X%26keywords%3Dheadphones%26qid%3D1694648057%26sprefix%3Dhead%252Caps%252C111%26sr%3D8-3-spons%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9hdGY%26psc%3D1" \
}');