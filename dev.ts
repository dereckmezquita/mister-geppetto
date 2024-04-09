import puppeteer, { Page } from 'puppeteer';
import { MisterGeppetto } from './src/MisterGeppetto';

async function main(): Promise<void> {
    const browser = await puppeteer.launch({
        headless: false,
        args: ['--window-size=1920,1080'],
        defaultViewport: {
            width: 1425,
            height: 1080
        },
        slowMo: 10,
        devtools: true
    });

    // const page: Page = (await browser.pages())[0];
    // await page.goto("https://www.google.com");

    const mg = await MisterGeppetto.create(browser);

    await mg.page.goto('https://www.google.com');
}

main().catch(console.error);
