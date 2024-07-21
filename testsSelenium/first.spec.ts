import puppeteer, { Browser, Page } from "puppeteer";

describe("Test", () => {
    let page: Page;
    let browser: Browser;
    const SECONDS = 1000;
    const site = "https://5element.by/";
    const xPathForBurger = '::-p-xpath(//div[@class="h-burger"])';
    const xPathForSearch = '::-p-xpath(//div[@class="multi-search"]//input[contains(@value,"product")])';
    const xPathForTV = '::-p-xpath(//div[@class="section-heading__title" and contains(text(), "Результаты поиска «телевизор»")]'
    const xPathForLoyalty = '::-p-xpath(//li[@class="h-nav__item"]/a[text()="Хочу бонусную карту"])';
    const xPathActions = '::-p-xpath(//span[@class="h-discounts__text" and text()="Акции"])'

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

    it("Наличие кнопки-бургера Каталог", async () => {
        await page.goto(site)
        let element = await page.waitForSelector(xPathForBurger)
        expect(await element?.isVisible()).toBeTruthy()
    }, 70 * SECONDS);

    it("Поиск товара", async () => {
        await page.goto(site)
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
        await page.goto(site)
        await page.waitForSelector(xPathForLoyalty);
        await page.click(xPathForLoyalty),
            await page.waitForNavigation({ waitUntil: 'networkidle2' })
    }, 150 * SECONDS);

    it("Наличие кнопки Акции", async () => {
        await page.goto(site)
        let element = await page.waitForSelector(xPathActions)
        expect(await element?.isVisible()).toBeTruthy()
    }, 70 * SECONDS);

    it("Наличие изображения 5 элемент", async () => {
        const element = await page.$('img[src="/resources/images/logo_.svg"]');
        expect(element).not.toBeNull();
    }, 70 * SECONDS);
});
