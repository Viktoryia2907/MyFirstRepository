import { Page } from '@playwright/test';

export class CatalogPage {
    private page: Page;
    private catalogButtonActive: string;
    private catalogBurgerActive: string;


    constructor(page: Page) {
        this.page = page;
        this.catalogButtonActive = '.js-mm-opener.btn.active';
        this.catalogBurgerActive = 'button.js-mm-opener.btn';


    }

    async verifyCatalogButtonActive(): Promise<void> {
        const catalogButtonActiveVisible = await this.page.isVisible(this.catalogButtonActive);
        if (!catalogButtonActiveVisible) {
            throw new Error('Catalog button active is not visible');
        }
    }

    async verifyCatalogBurgerActive(): Promise<void> {
        const verifyCatalogBurgerActiveVisible = await this.page.isVisible(this.catalogBurgerActive);
        if (!verifyCatalogBurgerActiveVisible) {
            throw new Error('Catalog burger active is not visible');
        }
    }
}