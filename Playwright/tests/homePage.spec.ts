import { test, expect, Page } from '@playwright/test';
import { PageFactory } from '../src/pages/pageFactory';
import { URLS } from '../const/consts';


test.describe('5 Element - HomePage', () => {

    let page: Page;
    let pageFactory: PageFactory;
    let homePage: ReturnType<PageFactory['getHomePage']>;
    let navigationBar: ReturnType<PageFactory['getNavigationBar']>;

    test.beforeEach(async ({ browser }) => {
        page = await browser.newPage();
        pageFactory = new PageFactory(page);
        homePage = pageFactory.getHomePage();
        navigationBar = pageFactory.getNavigationBar();
        await homePage.navigateTo();
    });

    test.afterAll(async () => {
        await page.close();
    });

    test('На главной странице есть главный баннер', async () => {
        await homePage.verifyMainBanner();
    });

    test.skip('Клик на "Вход" открывает модальное окно', async () => {
        await page.click('.h-drop__text');
        await page.waitForSelector('.modal-popup.modal-login ', { timeout: 5000 });
        const modalIsVisible = await page.isVisible('.modal-popup.modal-login');
        expect(modalIsVisible).toBe(true);
    });

    test('Футер виден на главной странице', async () => {
        const footerVisible = await page.isVisible('footer');
        expect(footerVisible).toBe(true);
    });

    test('Проверка адреса ссылки раздела "Акции', async () => {
        await page.click('a:has-text("Акции")');
        await expect(page).toHaveURL(URLS.ACTIONS);
    });

    test('Oбновление страницы по клику на баннер', async () => {
        await page.click('img[alt="header logo"]');
        await expect(page).toHaveURL(URLS.BASE_URL);
    });
});