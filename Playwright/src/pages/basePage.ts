import { Page } from '@playwright/test';

export abstract class BasePage {
    protected page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    protected async verifyElementVisible(selector: string, errorMessage: string): Promise<void> {
        const elementVisible = await this.page.isVisible(selector);
        if (!elementVisible) {
            throw new Error(errorMessage);
        }
    }
}