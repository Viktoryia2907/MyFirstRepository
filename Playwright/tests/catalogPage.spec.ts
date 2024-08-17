import { test, expect, Page } from '@playwright/test';
import { PageFactory } from '../src/pages/pageFactory';
import { SECTIONSTEXT, Locators, textCompare } from '../const/consts';



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

    test.afterAll(async () => {
        await page.close();
    });

    test('Переход на страницу каталога', async () => {
        await catalogPage.verifyCatalogButtonActive();
    });

    test('Переход наличия разделов и их текстов', async () => {
        const sections = [
            { locator: Locators.RASSROCHKA_I_SUPERCREDITY, text: SECTIONSTEXT.section1Text },
            { locator: Locators.PODARKY, text: SECTIONSTEXT.section2Text },
            { locator: Locators.PREDZAKAZY, text: SECTIONSTEXT.section3Text },
            { locator: Locators.SKIDKI_I_PROMOKODY, text: SECTIONSTEXT.section4Text },
            { locator: Locators.BONUSY, text: SECTIONSTEXT.section5Text },
        ];

        for (const section of sections) {
            const element = page.locator(section.locator);
            await expect(element).toBeVisible();
            await expect(element).toHaveText(section.text);
        }
    });

    test('Проверка клика на "Сравнение"', async () => {
        const textCompare = await catalogPage.clickAndVerifyComparison(page);
        expect(textCompare).toBe(textCompare);
        await catalogPage.verifyCatalogBurgerActive();
    });
});