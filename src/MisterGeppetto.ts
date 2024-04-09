import { Browser, Page } from 'puppeteer';

export class MisterGeppetto {
    #page?: Page;

    constructor(private browser: Browser) {}

    public get page(): Page {
        if (!this.#page) {
            throw new Error('MisterGeppetto has not been initialised.');
        }
        return this.#page;
    }

    public set page(page: Page) {
        this.#page = page;
    }

    public async initialise(): Promise<void> {
        const pages = await this.browser.pages();
        if (pages.length === 0) {
            this.#page = await this.browser.newPage();
        }
        this.#page = pages[0];
    }

    public static async create(browser: Browser): Promise<MisterGeppetto> {
        const geppetto = new MisterGeppetto(browser);
        await geppetto.initialise();
        return geppetto;
    }
}
