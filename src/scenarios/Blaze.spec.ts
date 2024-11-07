import { test } from '@playwright/test';
import { join } from 'path';
import { TheConfig } from 'sicolo';

import TodoPage from '../support/pages/TodoPage';

test.describe('TodoMVC', () => {
  const CONFIG = join(__dirname, '../support/fixtures/config.yml');
  let todoPage: TodoPage;
  const BASE_URL = TheConfig.fromFile(CONFIG)
    .andPath('application.todoMVC')
    .retrieveData();

  test.beforeEach(async ({ page }) => {
    todoPage = new TodoPage(page);
    await page.goto(BASE_URL);
  });

  test('Write new Todo', async () => {
    await todoPage.addNewTodo();
    await todoPage.validateIfAddNewTodo();
  });

  test('Check Todo', async () => {
    await todoPage.checkTodo();
  });
});
