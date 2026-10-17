import { test as base, expect } from '@playwright/test';
import { Login_successful } from '../pages/LoginPage';
import { testData } from '../test-data/testData';

type MyFixtures = {
  loggedInPage: void;
};

export const test = base.extend<MyFixtures>({
  loggedInPage: async ({ page }, use) => {
    const loginPage = new Login_successful(page);

    await page.goto('https://www.saucedemo.com/');

    await loginPage.login_success(
      testData.username,
      testData.password
    );

    await use();
  },
});

export { expect };