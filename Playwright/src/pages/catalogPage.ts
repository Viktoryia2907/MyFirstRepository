import { Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class CatalogPage extends BasePage {
    private catalogButtonActive: string;
    private catalogBurgerActive: string;

    constructor(page: Page) {
        super(page);
        this.catalogButtonActive = '.js-mm-opener.btn.active';
        this.catalogBurgerActive = 'button.js-mm-opener.btn';
    }

    async verifyCatalogButtonActive(): Promise<void> {
        await this.verifyElementVisible(this.catalogButtonActive, 'Активная кнопка каталога не видна');
    }

    async verifyCatalogBurgerActive(): Promise<void> {
        await this.verifyElementVisible(this.catalogBurgerActive, 'Активный бургер каталога не виден');
    }

    async clickAndVerifyComparison(page: any) {
        await page.click('.n-item__icon.ic-compare');
        const textElementCompare = await page.waitForSelector('.h-drop__content p');
        const textCompare = await textElementCompare.innerText();
        return textCompare;
    }
}