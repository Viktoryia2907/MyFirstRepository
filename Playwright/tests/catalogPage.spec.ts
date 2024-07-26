import { test, expect, Page } from '@playwright/test';
import { PageFactory } from '../src/pages/pageFactory';
import { locatorBonusy, locatorPodarky, locatorPredzakazy, locatorRassrochkaISupercredity, locatorSkidkiIPromokody } from '../const/consts';


test.describe('5 Element - catalogPage', () => {

    let page: Page;
    let pageFactory: PageFactory;
    let homePage: ReturnType<PageFactory['getHomePage']>;
    let catalogPage: ReturnType<PageFactory['getCatalogPage']>;
    let navigationBar: ReturnType<PageFactory['getNavigationBar']>;

    test.beforeEach(async ({ browser }) => {
        page = await browser.newPage();
        pageFactory = new PageFactory(page);
        homePage = pageFactory.getHomePage();
        catalogPage = pageFactory.getCatalogPage();
        navigationBar = pageFactory.getNavigationBar();
        await homePage.navigateTo();
        await homePage.navigationBar.goToCatalogPage();
    });

    test.afterEach(async () => {
        await page.close();
    });

    test('Переход на страницу каталога', async () => {
        await catalogPage.verifyCatalogButtonActive();
    });

    test('Переход наличия разделов и их текстов', async () => {
        const section1 = page.locator(locatorRassrochkaISupercredity);
        await expect(section1).toBeVisible();
        await expect(section1).toHaveText('Рассрочка и суперкредиты');

        const section2 = page.locator(locatorPodarky);
        await expect(section2).toBeVisible();
        await expect(section2).toHaveText('Подарки');

        const section3 = page.locator(locatorPredzakazy);
        await expect(section3).toBeVisible();
        await expect(section3).toHaveText('Предзаказы');


        const section4 = page.locator(locatorSkidkiIPromokody);
        await expect(section4).toBeVisible();
        await expect(section4).toHaveText('Скидки и промокоды');

        const section5 = page.locator(locatorBonusy);
        await expect(section5).toBeVisible();
        await expect(section5).toHaveText('Бонусы');
    });

    test('Проверка клика на "Сравнение"', async () => {
        await page.click('.n-item__icon.ic-compare');
        const textElementCompare = await page.waitForSelector('.h-drop__content p');
        const textCompare = await textElementCompare.innerText();
        expect(textCompare).toBe('Пока не добавлено ни одного товара для сравнения');
        await catalogPage.verifyCatalogBurgerActive();
    });
});


