import { Page } from 'playwright';
import { expect } from '@playwright/test';
import BasePage from './BasePage';
import TodoElements from '../elements/TodoElements';

export default class TodoPage extends BasePage {
  private readonly element: TodoElements;

  public constructor(readonly page: Page) {
    super(page);
    this.element = new TodoElements(page);
  }

  public async addNewTodo() {
    await this.element.getFieldText().fill('Comprar Batatas');
    await this.element.getFieldText().press('Enter');
  }

  public async validateIfAddNewTodo() {
    const liLocator = this.element
      .getTodoList()
      .locator('li', { hasText: 'Comprar Batatas' });
    expect(liLocator).toBeTruthy();
  }

  public async checkTodo() {
    await this.element.getToggleButton().check({ force: true });
  }
}
