const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch({
        headless: false,
       
    });

    const page = await browser.newPage();
    await page.goto('https://www.amazon.com'); 

    try {
        const title = await page.$eval('.a-color-base.headline.truncate-2line', el => el.textContent);
        console.log(title);
    } catch (error) {
        console.error("Error retrieving title:", error);
    }

    await browser.close();
})();