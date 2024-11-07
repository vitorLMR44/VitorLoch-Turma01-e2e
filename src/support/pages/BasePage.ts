import { expect } from '@playwright/test';
import { Page } from 'playwright';

export default abstract class BasePage {
  constructor(readonly page: Page) {
    this.page = page;
  }

  async verifyTitle(title: string): Promise<void> {
    await expect(this.page).toHaveTitle(title);
  }

  async verifyUrl(url: string): Promise<void> {
    await expect(this.page).toHaveURL(url);
  }
}
