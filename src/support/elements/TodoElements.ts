import { Page } from 'playwright';
import BaseElements from './BaseElements';

export default class TodoElements extends BaseElements {
  public constructor(readonly page: Page) {
    super(page);
  }

  public getFieldText() {
    return this.getById('todo-input', 'input');
  }

  public getTodoList() {
    return this.getByClass('todo-list', 'input');
  }

  public getToggleButton() {
    return this.page
      .locator('li')
      .filter({ hasText: 'Comprar Batatas' })
      .getByLabel('Toggle Todo');
  }
}
