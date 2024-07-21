import puppeteer, { Browser, Page } from "puppeteer";
import { xPathActions } from "../const/consts";
import { site } from "../const/consts";
import { xPathForBurger } from "../const/consts";
import { xPathForSearch } from "../const/consts";
import { xPathForTV } from "../const/consts";
import { xPathForLoyalty } from "../const/consts";
import { SECONDS } from "../const/consts";


describe("Test", () => {
    let page: Page;
    let browser: Browser;

    beforeAll(async () => {
        browser = await puppeteer.launch({
            headless: false,
        });
        page = await browser.newPage();
        await page.setViewport({ width: 1080, height: 1024 });
    }, 70 * SECONDS);

    afterAll(async () => {
        await browser.close();
    }, 70 * SECONDS);

    beforeEach(async () => {
        await page.goto(site);
    });

    it("Наличие кнопки-бургера Каталог", async () => {
        let element = await page.waitForSelector(xPathForBurger)
        expect(await element?.isVisible()).toBeTruthy()
    }, 70 * SECONDS);

    it("Поиск товара", async () => {
        await page.waitForSelector(xPathForSearch);
        await page.type(xPathForSearch, 'телевизор');
        await page.keyboard.press('Enter');
        try {
            await page.waitForSelector(xPathForTV, { timeout: 70000 });
            console.log('Результаты поиска найдены!');
        } catch (error) {
            console.log('Результаты поиска не найдены! Ошибка');
        }
    }, 150 * SECONDS);

    it("Клик на кнопку", async () => {
        await page.waitForSelector(xPathForLoyalty);
        await page.click(xPathForLoyalty);
        try {
            await page.waitForNavigation({ timeout: 60000 });
        } catch (error) {
            console.error("Ошибка навигации:", error);
        }
    }, 70 * SECONDS);

    it("Наличие кнопки Акции", async () => {
        let element = await page.waitForSelector(xPathActions)
        expect(await element?.isVisible()).toBeTruthy()
    }, 70 * SECONDS);

    it("Наличие изображения 5 элемент", async () => {
        const element = await page.$('img[src="/resources/images/logo_.svg"]');
        expect(element).not.toBeNull();
    }, 70 * SECONDS);
});

