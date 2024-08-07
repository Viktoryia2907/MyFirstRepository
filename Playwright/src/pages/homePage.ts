import { Page } from '@playwright/test';
import { BasePage } from './BasePage';
import { NavigationBar } from '../elements/navigationBar';
import { URLS } from '../../const/consts';

export class HomePage extends BasePage {
  private homeURL: string;
  private mainBanner: string;
  public navigationBar: NavigationBar;

  constructor(page: Page) {
    super(page);
    this.navigationBar = new NavigationBar(page);
    this.homeURL = URLS.BASE_URL;
    this.mainBanner = '.swiper-slide-active';
  }

  async navigateTo(): Promise<void> {
    await this.page.goto(this.homeURL);
  }

  async verifyMainBanner(): Promise<void> {
    await this.verifyElementVisible(this.mainBanner, 'Главный баннер не виден');
  }
}