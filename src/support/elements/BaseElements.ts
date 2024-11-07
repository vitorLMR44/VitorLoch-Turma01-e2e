import { Page } from 'playwright';

export default abstract class BaseElements {
  constructor(readonly page: Page) {
    this.page = page;
  }

  protected getByName(name: string, type: 'input' | 'select') {
    return this.page.locator(`${type}[name="${name}"]`);
  }

  protected getByValue(name: string, type: 'input' | 'select') {
    return this.page.locator(`${type}[value="${name}"]`);
  }

  protected getById(name: string, type: 'input' | 'select') {
    return this.page.locator(`${type}[id="${name}"]`);
  }

  protected getByClass(name: string, type: 'input' | 'select' | 'ul') {
    return this.page.locator(`${type}[class="${name}"]`);
  }

  protected getByCustom(
    name: string,
    type: 'input' | 'select',
    identifier: string
  ) {
    return this.page.locator(`${type}[${identifier}="${name}"]`);
  }
}
