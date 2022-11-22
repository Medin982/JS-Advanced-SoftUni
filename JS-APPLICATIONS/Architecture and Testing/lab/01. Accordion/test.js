const { chromium } = require('playwright-chromium');
const { expect } = require('chai');

let browser, page;

describe('E2E tests', async function () {
    this.timeout(3000);

    before(async () => { browser = await chromium.launch(); });
    after(async () => { await browser.close() });
    beforeEach(async () => { page = await browser.newPage(); });
    afterEach(async () => { await page.close(); });

    it('loads static page', async () => {
        await page.goto('http://localhost:5500/');
    
    });

    // it('has working More button', async () => {
    //     await page.goto('http://localhost:5500/');
    //     await page.click("text=More");
    // })
});