import { MisterGeppetto } from '../src/MisterGeppetto';
import puppeteer, { Browser } from 'puppeteer';

let browser: Browser;
beforeAll(async () => {
    browser = await puppeteer.launch({
        headless: true,
        args: ['--window-size=1920,1080'],
        defaultViewport: {
            width: 1425,
            height: 1080
        },
        slowMo: 10,
        devtools: true
    });
});

describe('MisterGeppetto', () => {
    it('should return a string', async () => {
        const mg = await MisterGeppetto.create(browser);
        // go to google.com
        await mg.page.goto('https://www.google.com');
        // get the title
        const title = await mg.page.title();
        // check if the title is correct
        expect(title).toBe('Google');
    });
});

afterAll(async () => {
    await browser.close();
});
