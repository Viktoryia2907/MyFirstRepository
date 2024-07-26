import { Page } from '@playwright/test';
import { NavigationBar } from '../elements/navigationBar';


export class HomePage {
  private page: Page;
  private homeURL: string;
  private mainBanner: string;
  public navigationBar: NavigationBar;

  constructor(page: Page) {
    this.page = page;
    this.navigationBar = new NavigationBar(page);
    this.homeURL = 'https://5element.by';
    this.mainBanner = '.swiper-slide-active';
  }

  async navigateTo(): Promise<void> {
    await this.page.goto(this.homeURL);
  }

  async verifyMainBanner(): Promise<void> {
    const bannerVisible = await this.page.isVisible(this.mainBanner);
    if (!bannerVisible) {
      throw new Error('Main banner is not visible');
    }
  }
}