# Amazon Result Scraper

Amazon Result Scraper is a Javascript library for extracting the following data:

- Scraping Rate Quality.
- Cheapest Product.
- Highest Rating Product.
- Soonest Arriving Product.

## Installation

Node 16+ is required.

Install the scraper using the package manager [npm](https://nodejs.org/en/download/).

```bash
npm install
```

## Usage

```bash

# Example for Amazon US
node amazon-scraper.js --url='https://www.amazon.com/s?k=headphones&crid=VS7GDL0WY0ZR&sprefix=headphones%2Caps%2C522&ref=nb_sb_noss_2'

# Example for Amazon CAN
node amazon-scraper.js --url='https://www.amazon.ca/s?k=headphones&crid=RTA3XZQLNO7X&sprefix=head%2Caps%2C111&ref=nb_sb_ss_ts-doa-p_1_4'

# outputs
Scraping Amazon search page...
Analyzing Product Data...
Results:
*********************************************************************************************************

 Scraping Rate Quality: 94%

 Cheapest Product: www.amazon.ca/Maxell-199845-Adjustable-Headphones-Microphone/dp/B09JT2ZL8C/ref=sr_1_33?crid=RTA3XZQLNO7X&keywords=headphones&qid=1694196257&sprefix=head%2Caps%2C111&sr=8-33

 Highest Rating Product: www.amazon.ca/sspa/click?ie=UTF8&spc=MTo4NzcwMDEzNjE2MDU2MTU6MTY5NDE5NjI1NzpzcF9zZWFyY2hfdGhlbWF0aWM6MzAwMDQyMDE2NTc3NzAyOjo0Ojo&url=%2FBluetooth-Headphones-Cancelling-Waterproof-Earphones%2Fdp%2FB0CC5QW1X2%2Fref%3Dsxin_17_pa_sp_search_thematic_sspa%3Fcontent-id%3Damzn1.sym.fff4d389-5f12-4a3d-bbdb-de5278b37977%253Aamzn1.sym.fff4d389-5f12-4a3d-bbdb-de5278b37977%26crid%3DRTA3XZQLNO7X%26cv_ct_cx%3Dheadphones%26keywords%3Dheadphones%26pd_rd_i%3DB0CC5QW1X2%26pd_rd_r%3D73dc2840-74d4-4e49-badd-efd80f0ee09a%26pd_rd_w%3DtmsfG%26pd_rd_wg%3D1XP5D%26pf_rd_p%3Dfff4d389-5f12-4a3d-bbdb-de5278b37977%26pf_rd_r%3DXJGFH8FFQ5BS3DPPN6XF%26qid%3D1694196257%26sbo%3DRZvfv%252F%252FHxDF%252BO5021pAnSA%253D%253D%26sprefix%3Dhead%252Caps%252C111%26sr%3D1-5-acb80629-ce74-4cc5-9423-11e8801573fb-spons%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9zZWFyY2hfdGhlbWF0aWM%26psc%3D1

 Soonest Arriving Product: www.amazon.ca/sspa/click?ie=UTF8&spc=MTo0NTIzODgxODYxMTM1NjE1OjE2OTQxOTYyNTc6c3BfYXRmOjMwMDAyNzM4MjE5NTIwMjo6MDo6&url=%2Fsoundcore-Cancelling-Headphones-Bluetooth-Transparency%2Fdp%2FB0C3HCD34R%2Fref%3Dsr_1_2_sspa%3Fcrid%3DRTA3XZQLNO7X%26keywords%3Dheadphones%26qid%3D1694196257%26sprefix%3Dhead%252Caps%252C111%26sr%3D8-2-spons%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9hdGY%26psc%3D1

*********************************************************************************************************
```

## License

[MIT](https://choosealicense.com/licenses/mit/)
